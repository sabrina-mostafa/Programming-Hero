const crypto = require("crypto"); // Import the built-in crypto module for encryption/decryption

const algorithm = "aes-256-cbc"; // AES encryption algorithm with 256-bit key and CBC mode

// Generate a random 32-byte (256-bit) key
const key = crypto.randomBytes(32);

// Function to encrypt text
function encrypt(text) {
    // Generate a NEW random 16-byte initialization vector (IV) for every encryption
    const iv = crypto.randomBytes(16);

    // Create a Cipher object using the algorithm, key, and IV
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    // Encrypt the text
    // 'utf-8' is the input encoding, 'hex' is the output encoding
    let encrypted = cipher.update(text, "utf-8", "hex");
    encrypted += cipher.final("hex"); // Finalize encryption and append remaining data

    // Return the encrypted data and IV as hex strings
    return {
        iv: iv.toString("hex"),       // IV needed for decryption
        encryptedData: encrypted,     // Encrypted text
    };
}

// Function to decrypt encrypted data
function decrypt(encryptedData, ivHex) {
    // Create a Decipher object using the same algorithm, key, and IV
    const decipher = crypto.createDecipheriv(
        algorithm,
        key,
        Buffer.from(ivHex, "hex") // Convert hex IV back to a Buffer
    );

    // Decrypt the text
    // 'hex' is the input encoding, 'utf-8' is the output encoding
    let decrypted = decipher.update(encryptedData, "hex", "utf-8");
    decrypted += decipher.final("utf-8"); // Finalize decryption

    return decrypted; // Return the original text
}

// Original sensitive data
const sensitiveData = "My credit card: 4242 4242 4242 4242";
console.log("original data : ", sensitiveData);

// Encrypt the sensitive data
const encrypted = encrypt(sensitiveData);
console.log("Encrypted : ", encrypted);

// Decrypt the encrypted data
const decrypted = decrypt(encrypted.encryptedData, encrypted.iv);
console.log("Decrypted : ", decrypted);

// Check if decryption matches the original data
console.log("match : ", sensitiveData === decrypted); // true if successful
