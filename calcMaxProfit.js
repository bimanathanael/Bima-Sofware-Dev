
//test case
const test1 = '54321';
const test2 = '328486079';
const test3 = '321562';
const test4 = '132516901';
const test5 = '335009277';
const test6 = '145911644';

//begin code
function calcMaxProfit(arrs) {
  let n = arrs.split('')
  let maxProfit = 0 
  for(let i = 0 ; i < n.length-1 ; i++) {
    const maxNum = Math.max(...n.slice(i+1));
    maxProfit = (maxNum - n[i] > maxProfit) ? maxNum - n[i] : maxProfit;
  };
  return maxProfit;
};

//begin test
console.log(calcMaxProfit(test1));
console.log(calcMaxProfit(test2));
console.log(calcMaxProfit(test3));
console.log(calcMaxProfit(test4));
console.log(calcMaxProfit(test5));
console.log(calcMaxProfit(test6));
