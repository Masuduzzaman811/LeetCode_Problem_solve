var longestCommonPrefix = function(strs) {
  let answer = ""
  for (let i=0; i < strs[0].length; i++){ 
      let prefix = strs[0][i]

      for (let j = 1; j < strs.length; j++){ 
          if(strs[j][i] !== prefix) 
          return answer
      }
      answer = answer + prefix
  }
  return answer;

};