

//test case
const test1 = [5,4,3,2,1];
const test2 = [3,2,8,4,8,6,0,7,9];
const test3 = [3,2,1,5,6,2];
const test4 = [1,3,2,5,1,6,9,0,1]; 
const test5 = [3,3,5,0,0,9,2,7,7];
const test6 = [1,4,5,9,1,1,6,4,4];

//begin code
function calcMaxProfit(n) {
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
