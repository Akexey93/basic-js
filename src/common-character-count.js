const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Array = s1.split("");
  let s2Array = s2.split("");
  let sum = 0;
  s2Array.map((el) => {
    if (s1Array.includes(el)) {
      sum++;
      s1Array.splice(s2Array.indexOf(el), 1);
    }
  });
  return sum;
}

module.exports = {
  getCommonCharacterCount,
};
