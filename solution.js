/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let longStr = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (longStr.indexOf(s[j]) !== -1) break;
      else longStr += s[j]
    }
    result = Math.max(longStr.length, result);
  }
  return result;
};