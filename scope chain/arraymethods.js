// for each

// const numbers = [1,2,3,4,5];
// let sum=0;
// numbers.forEach((item,index,arr)=>{
//     sum+=item;
// });

// console.log(sum);


// const letters = ['a','b','c','d','c','c'];
// let count = {}

// letters.forEach((items)=>{
//     if(count[items]){
//         count[items]++;
//     }
//     else{
//         count[items]=1;
//     }
// })

// console.log(count);

// const numbers = [1,2,3,4,5];

// const doub = numbers.map(double);
// const indexMul = numbers.map(indexMultiply);
// function double(value,index,arr){
//     return value*2;
// }
// function indexMultiply(value,index){
//     return value*index;
// }
// console.log(doub);
// console.log(indexMul);

// const product = [
//     {
//         name:'laptop',
//         price:1000,
//         count:5
//     },
//     {
//         name:'desktop',
//         price:1500,
//         count:2
//     },
//     {
//         name:'phone',
//         price:500,
//         count:1
//     }

// ]

// const price = product.map((value,index,arr)=>({
    
//         name:value.name,
//         total:value.price*value.count
    
// }))

// console.log(price);



// const letters  = ['1','2']

// const numbers = letters.map((value)=>Number(value));
// console.log(letters);
// console.log(numbers);


// filter method


// const number = [1,2,3,4,5,6];

// const filter = number.filter((value)=>  value%2===0)
// console.log(filter);

// const people = [
//     {
//     name: 'nishant',
//     age:18
// },
//     {
//     name: 'sujata',
//     age:23
// }
// ]

// const eligible = people.filter((value)=>value.age>=18);

// console.log(eligible);
//  const numbers = [1,2,3,4,5]

//  const sum = numbers.reduce(callback,0);

//  function callback(acc,value){
//     return (acc += value);
//  }

//  console.log(sum);

// const numbers = [11,2,3,4,5,6,7]

// const max = numbers.reduce((acc,value)=>{
//     if(acc>value){
//         return acc;
//     }
//     else{
//         return value;
//     }
// },-Infinity)

// console.log(max);


// const store = [
//     {
//         product:'laptop',
//         price:30,
//         count:4
//     },
//     {
//         product:'desktop',
//         price:50,
//         count:2
//     }


// ]

// let totalValuation = store.reduce((acc,value)=>{
//     return (acc += value.price * value.count);
// },0)

// console.log(totalValuation);

// sort 

// const numbers = [23,34,4,5,68];

// numbers.sort();

// function compareFunction(a,b){

// }

// concat

// const c= a.concat(c,d);

// fill 
// function fillInNumber(n){
//     return Array(n).fill(0).map((value,indx)=>value = indx + 1)
// }

// console.log(fillInNumber(65));


// includes

// const fruits = ['apple','orange'];

// const res= fruits.includes('apple');

// if(res){
//     console.log("lets buy apple");
// }
// else{
//     console.log("bye");
// }


// join 

// const sun = ['my', 'name', 'is', 'nishant']

// const res = sun.join(' ');
// console.log('hello '+ res);

// reverse 

//  const number = [1,2,3,4,5];

