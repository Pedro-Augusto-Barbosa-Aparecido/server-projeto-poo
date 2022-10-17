import crypto from "crypto";

export const CRYPTO_TYPE = "sha512";
export const CRYPTO_SALT = crypto.randomBytes(16).toString();
