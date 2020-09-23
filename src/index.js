module.exports = function reverse (n) {
  let nStr = String(n);
  let finalStr = '';

  for (let i = nStr.length - 1; i >= 0; i--) {
  	finalStr += nStr[i];
  }
  
  if (finalStr[finalStr.length - 1] == '-') finalStr = finalStr.slice(0, -1);

  return Number(finalStr);
}
