import crypto from "node:crypto";

type FlowRequestPayload = {
  encrypted_aes_key: string;
  encrypted_flow_data: string;
  initial_vector: string;
};

export type DecryptedFlowRequest = {
  body: Record<string, unknown>;
  aesKey: Buffer;
  initialVector: Buffer;
};

function getPrivateKey() {
  const privateKey = process.env.WHATSAPP_FLOW_PRIVATE_KEY;
  const passphrase = process.env.WHATSAPP_FLOW_PRIVATE_KEY_PASSPHRASE;

  if (!privateKey) {
    throw new Error("WHATSAPP_FLOW_PRIVATE_KEY is not configured");
  }

  return crypto.createPrivateKey({
    key: privateKey.replace(/\\n/g, "\n"),
    format: "pem",
    passphrase: passphrase || undefined,
  });
}

/**
 * Decrypt a WhatsApp Flow data-exchange request.
 *
 * Meta sends:
 * - encrypted_aes_key: AES-128 key encrypted with our RSA public key
 * - encrypted_flow_data: AES-128-GCM encrypted JSON
 * - initial_vector: 16-byte AES-GCM IV
 *
 * RSA uses OAEP with SHA-256.
 */
export function decryptFlowRequest(
  payload: FlowRequestPayload,
): DecryptedFlowRequest {
  const privateKey = getPrivateKey();

  const encryptedAesKey = Buffer.from(
    payload.encrypted_aes_key,
    "base64",
  );

  const aesKey = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    encryptedAesKey,
  );

  if (aesKey.length !== 16) {
    throw new Error(
      `Unexpected AES key length: ${aesKey.length}; expected 16 bytes`,
    );
  }

  const initialVector = Buffer.from(
    payload.initial_vector,
    "base64",
  );

  if (initialVector.length !== 16) {
    throw new Error(
      `Unexpected IV length: ${initialVector.length}; expected 16 bytes`,
    );
  }

  const encryptedFlowData = Buffer.from(
    payload.encrypted_flow_data,
    "base64",
  );

  if (encryptedFlowData.length <= 16) {
    throw new Error("Encrypted Flow data is too short");
  }

  // AES-GCM authentication tag is appended to the encrypted payload.
  const authTag = encryptedFlowData.subarray(
    encryptedFlowData.length - 16,
  );
  const ciphertext = encryptedFlowData.subarray(
    0,
    encryptedFlowData.length - 16,
  );

  const decipher = crypto.createDecipheriv(
    "aes-128-gcm",
    aesKey,
    initialVector,
  );

  decipher.setAuthTag(authTag);

  const plaintext = Buffer.concat([
    decipher.update(ciphertext),
    decipher.final(),
  ]);

  const body = JSON.parse(plaintext.toString("utf8")) as Record<
    string,
    unknown
  >;

  return {
    body,
    aesKey,
    initialVector,
  };
}

/**
 * Encrypt a WhatsApp Flow response.
 *
 * Meta requires the response to use the transformed IV from the
 * incoming request. The official Meta example transforms each IV
 * byte using its bitwise complement.
 */
export function encryptFlowResponse(
  response: Record<string, unknown>,
  aesKey: Buffer,
  initialVector: Buffer,
): string {
  if (aesKey.length !== 16) {
    throw new Error("AES key must be 16 bytes");
  }

  if (initialVector.length !== 16) {
    throw new Error("IV must be 16 bytes");
  }

  const transformedIv = Buffer.from(initialVector);

  for (let i = 0; i < transformedIv.length; i += 1) {
    transformedIv[i] = ~transformedIv[i] & 0xff;
  }

  const cipher = crypto.createCipheriv(
    "aes-128-gcm",
    aesKey,
    transformedIv,
  );

  const plaintext = Buffer.from(JSON.stringify(response), "utf8");

  const ciphertext = Buffer.concat([
    cipher.update(plaintext),
    cipher.final(),
  ]);

  const authTag = cipher.getAuthTag();

  return Buffer.concat([ciphertext, authTag]).toString("base64");
}

export type { FlowRequestPayload };
