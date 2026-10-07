import crypto from "node:crypto";
import fs from "node:fs";

const privateKeyPath = ".whatsapp-keys/whatsapp-flow-private.pem";
const publicKeyPath = ".whatsapp-keys/whatsapp-flow-public.pem";

console.log("=== WhatsApp Flow Crypto Test ===\n");

// ---------------------------------------------------------
// 1. Check key files
// ---------------------------------------------------------

if (!fs.existsSync(privateKeyPath)) {
  throw new Error(`Private key not found: ${privateKeyPath}`);
}

if (!fs.existsSync(publicKeyPath)) {
  throw new Error(`Public key not found: ${publicKeyPath}`);
}

console.log("✓ RSA key files found");

// ---------------------------------------------------------
// 2. Load RSA keys
// ---------------------------------------------------------

const privateKeyPem = fs.readFileSync(privateKeyPath, "utf8");
const publicKeyPem = fs.readFileSync(publicKeyPath, "utf8");

const privateKey = crypto.createPrivateKey({
  key: privateKeyPem,
  format: "pem",
});

const publicKey = crypto.createPublicKey({
  key: publicKeyPem,
  format: "pem",
});

console.log("✓ RSA keys loaded");

// ---------------------------------------------------------
// 3. Generate a fake AES-128 key
// ---------------------------------------------------------

const aesKey = crypto.randomBytes(16);

console.log("✓ AES-128 key generated");

// ---------------------------------------------------------
// 4. Encrypt AES key using RSA-OAEP-SHA256
// ---------------------------------------------------------

const encryptedAesKey = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  aesKey,
);

console.log("✓ AES key encrypted with RSA-OAEP-SHA256");

// ---------------------------------------------------------
// 5. Create a fake WhatsApp Flow payload
// ---------------------------------------------------------

const originalBody = {
  version: "3.0",
  action: "ping",
};

const initialVector = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(
  "aes-128-gcm",
  aesKey,
  initialVector,
);

const plaintext = Buffer.from(
  JSON.stringify(originalBody),
  "utf8",
);

const ciphertext = Buffer.concat([
  cipher.update(plaintext),
  cipher.final(),
]);

const authTag = cipher.getAuthTag();

const encryptedFlowData = Buffer.concat([
  ciphertext,
  authTag,
]);

console.log("✓ Test Flow payload encrypted");

// ---------------------------------------------------------
// 6. Simulate Meta request
// ---------------------------------------------------------

const metaRequest = {
  encrypted_aes_key: encryptedAesKey.toString("base64"),
  encrypted_flow_data: encryptedFlowData.toString("base64"),
  initial_vector: initialVector.toString("base64"),
};

console.log("✓ Fake Meta request created");

// ---------------------------------------------------------
// 7. Simulate your decryptFlowRequest()
// ---------------------------------------------------------

const decryptedAesKey = crypto.privateDecrypt(
  {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  Buffer.from(metaRequest.encrypted_aes_key, "base64"),
);

if (!decryptedAesKey.equals(aesKey)) {
  throw new Error("AES key decryption failed");
}

console.log("✓ RSA AES-key decryption works");

const decryptedIv = Buffer.from(
  metaRequest.initial_vector,
  "base64",
);

const encryptedData = Buffer.from(
  metaRequest.encrypted_flow_data,
  "base64",
);

const receivedAuthTag = encryptedData.subarray(
  encryptedData.length - 16,
);

const receivedCiphertext = encryptedData.subarray(
  0,
  encryptedData.length - 16,
);

const decipher = crypto.createDecipheriv(
  "aes-128-gcm",
  decryptedAesKey,
  decryptedIv,
);

decipher.setAuthTag(receivedAuthTag);

const decryptedPlaintext = Buffer.concat([
  decipher.update(receivedCiphertext),
  decipher.final(),
]);

const decryptedBody = JSON.parse(
  decryptedPlaintext.toString("utf8"),
);

if (
  JSON.stringify(decryptedBody) !==
  JSON.stringify(originalBody)
) {
  throw new Error("Flow payload decryption failed");
}

console.log("✓ AES-128-GCM Flow decryption works");

// ---------------------------------------------------------
// 8. Simulate your encryptFlowResponse()
// ---------------------------------------------------------

const responseBody = {
  version: "3.0",
  data: {
    status: "active",
  },
};

const transformedIv = Buffer.from(initialVector);

for (let i = 0; i < transformedIv.length; i += 1) {
  transformedIv[i] =
    ~transformedIv[i] & 0xff;
}

const responseCipher = crypto.createCipheriv(
  "aes-128-gcm",
  decryptedAesKey,
  transformedIv,
);

const responsePlaintext = Buffer.from(
  JSON.stringify(responseBody),
  "utf8",
);

const responseCiphertext = Buffer.concat([
  responseCipher.update(responsePlaintext),
  responseCipher.final(),
]);

const responseAuthTag =
  responseCipher.getAuthTag();

const encryptedResponse = Buffer.concat([
  responseCiphertext,
  responseAuthTag,
]).toString("base64");

console.log("✓ Response encryption works");

// ---------------------------------------------------------
// 9. Decrypt the response again to verify it
// ---------------------------------------------------------

const responseBuffer = Buffer.from(
  encryptedResponse,
  "base64",
);

const responseReceivedAuthTag =
  responseBuffer.subarray(
    responseBuffer.length - 16,
  );

const responseReceivedCiphertext =
  responseBuffer.subarray(
    0,
    responseBuffer.length - 16,
  );

const responseDecipher = crypto.createDecipheriv(
  "aes-128-gcm",
  decryptedAesKey,
  transformedIv,
);

responseDecipher.setAuthTag(
  responseReceivedAuthTag,
);

const responseDecryptedPlaintext =
  Buffer.concat([
    responseDecipher.update(
      responseReceivedCiphertext,
    ),
    responseDecipher.final(),
  ]);

const responseDecryptedBody =
  JSON.parse(
    responseDecryptedPlaintext.toString("utf8"),
  );

if (
  JSON.stringify(responseDecryptedBody) !==
  JSON.stringify(responseBody)
) {
  throw new Error(
    "Response decryption verification failed",
  );
}

console.log("✓ Response encryption/decryption verified");

// ---------------------------------------------------------
// 10. Test Base64 private-key environment format
// ---------------------------------------------------------

const privateKeyBase64 =
  Buffer.from(privateKeyPem, "utf8").toString("base64");

const decodedPrivateKey =
  Buffer.from(
    privateKeyBase64,
    "base64",
  ).toString("utf8");

if (decodedPrivateKey !== privateKeyPem) {
  throw new Error(
    "Private-key Base64 encode/decode failed",
  );
}

console.log(
  "✓ WHATSAPP_FLOW_PRIVATE_KEY_BASE64 format works",
);

// ---------------------------------------------------------
// Final result
// ---------------------------------------------------------

console.log("\n================================");
console.log("ALL WHATSAPP CRYPTO TESTS PASSED");
console.log("================================");