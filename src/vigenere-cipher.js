const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */ class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(plaintext, key) {
    if (!plaintext || !key) {
      throw new Error("Missing arguments");
    }

    if (typeof plaintext !== "string" || typeof key !== "string") {
      throw new Error("Invalid input");
    }

    let result = [];
    let keyIndex = 0;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < plaintext.length; i++) {
      const char = plaintext[i].toUpperCase();
      if (alphabet.includes(char)) {
        const shift = alphabet.indexOf(
          key[keyIndex % key.length].toUpperCase()
        );
        const encryptChar =
          alphabet[(alphabet.indexOf(char) + shift) % alphabet.length];
        result.push(encryptChar);
        keyIndex++;
      } else {
        result.push(plaintext[i]);
      }
    }

    return this.isDirect ? result.join("") : result.reverse().join("");
  }

  decrypt(ciphertext, key) {
    if (!ciphertext || !key) {
      throw new Error("Missing arguments");
    }

    if (typeof ciphertext !== "string" || typeof key !== "string") {
      throw new Error("Invalid input");
    }

    let result = [];
    let keyIndex = 0;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < ciphertext.length; i++) {
      const char = ciphertext[i].toUpperCase();
      if (alphabet.includes(char)) {
        const shift = alphabet.indexOf(
          key[keyIndex % key.length].toUpperCase()
        );
        const decryptedChar =
          alphabet[
            (alphabet.indexOf(char) - shift + alphabet.length) % alphabet.length
          ];
        result.push(decryptedChar);
        keyIndex++;
      } else {
        result.push(ciphertext[i]);
      }
    }

    return this.isDirect ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
