/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  const [I,V,X,L,C,D,M] = [1,5,10,50,100,500,1000];
let sum = 0;
for(let i =0; i < s.length; i++){
  if(s[i] === 'M')
    sum += M;
  else if (s[i] === 'D')
    sum += D;
  else if (s[i] === 'C') {
    if(s[i+1] === 'D'){
      sum += D - C;
      i++;
    }
    else if (s[i+1] === 'M'){
      sum += M - C;
      i++
    }
    else sum += C;
  }
  else if(s[i] === 'L')
    sum += L;
  else if(s[i] === 'X') {
    if(s[i+1] === 'L'){
      sum += L - X;
      i++;
    }
    else if (s[i+1] === 'C'){
      sum += C - X;
      i++
    }
    else sum += X;
  }
  else if(s[i] === 'V')
    sum += V;
  else if(s[i] === 'I'){
    if(s[i+1] === 'V'){
      sum += V - I;
      i++;
    }
    else if (s[i+1] === 'X'){
      sum += X - I;
      i++
    }
    else sum += I;
  }
}
return sum;
  
};