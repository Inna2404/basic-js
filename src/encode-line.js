const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return "";

  let result = "";
  let currChar = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currChar) {
      count++;
    } else {
      result += (count > 1 ? count : "") + currChar;
      currChar = str[i];
      count = 1;
    }
  }
  result += (count > 1 ? count : "") + currChar;
  return result;
}

module.exports = {
  encodeLine
};
