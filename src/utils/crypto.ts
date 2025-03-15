import crypto from 'crypto';

const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
const IV_LENGTH = 16;
const REQUIRED_KEY_LENGTH = 32;

if (!ENCRYPTION_KEY) {
  throw new Error('Encryption key is required');
}

const keyBuffer = Buffer.from(ENCRYPTION_KEY, 'base64');
if (keyBuffer.length !== REQUIRED_KEY_LENGTH) {
  throw new Error(
    `Encryption key must be exactly ${REQUIRED_KEY_LENGTH} bytes when decoded`,
  );
}

export function encrypt(buffer: Buffer): Buffer {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', keyBuffer, iv);
  const encrypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
  return Buffer.concat([iv, encrypted]);
}

export function decrypt(encrypted: Buffer): Buffer {
  const iv = encrypted.subarray(0, IV_LENGTH);
  const encryptedData = encrypted.subarray(IV_LENGTH);
  const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, iv);
  return Buffer.concat([decipher.update(encryptedData), decipher.final()]);
}
