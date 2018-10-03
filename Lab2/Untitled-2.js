Array.prototype.even = function(){
    setImmediate(
        ()=>{
          const res =  this.filter(x=>x%2==0);
          console.log(res);
        })
}
Array.prototype.odd = function(){
    setImmediate(
        ()=>{
          const res =  this.filter(x=>x%2==1);
          console.log(res);
        })
}
const arr1 = [1,2,3,4,5,6,7,8];
console.log('Start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
// setTimeout(console.log(odd(arr1)), 3000);
// process.nextTick(even(arr1))
console.log('End');