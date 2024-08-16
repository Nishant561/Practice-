// const promiseOne = new Promise(function(res,rej){
//     setTimeout(() => {
//         console.log("Async task is completed");
//         res()
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task two");
        
//     },1000)
// }).then(function(){
//     console.log("async 2 resolved");
// })


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"nishant"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
    }, 1000);
})