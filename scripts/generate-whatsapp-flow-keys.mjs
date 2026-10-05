import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const outputDir = path.join(process.cwd(), ".whatsapp-keys");

fs.mkdirSync(outputDir, { recursive: true });

const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,

  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },

  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

const privateKeyPath = path.join(
  outputDir,
  "whatsapp-flow-private.pem",
);

const publicKeyPath = path.join(
  outputDir,
  "whatsapp-flow-public.pem",
);

fs.writeFileSync(privateKeyPath, privateKey, {
  mode: 0o600,
});

fs.writeFileSync(publicKeyPath, publicKey, {
  mode: 0o644,
});

console.log("");
console.log("WhatsApp Flow RSA-2048 keys generated.");
console.log("");
console.log(`Private key: ${privateKeyPath}`);
console.log(`Public key:  ${publicKeyPath}`);
console.log("");
console.log("The private key is unencrypted PEM.");
console.log("Protect it using environment-variable secrets.");
console.log("");