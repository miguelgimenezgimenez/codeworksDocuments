const  sayHi = () =>3;


console.log(sayHi());
const nums = [1, 2, 3,4,5].map(num =>2+num).filter(num=>num > 3);


const oldnums = [1, 2, 3,4,5].map(function (num) {
  return 2 + num;
}).filter(function (num) {
  return num > 3;
  
});
console.log(nums,oldnums);

const between = num