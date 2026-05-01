


// promises: a promises in java script is like a container for a future value . it is a way of saying "i dont have any value right now but i will have it later . "

// there are three main states : 
// 1. pending : the promises is waiting for something to finish . for example : waiting for data to load from a website .   

// 2. fulfilled : the promises has been completed successfull . for example : the data you are waiting now it avaliable .  

// 3. rejected :  the promises has failed . for example : the server not response . 


// syntex : 
// Promise (function(resolve,reject){
//     // do something 
// })



// let groot = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let data = false
//         if (data) {
//             resolve("data avaliable")
//         }
//         else {
//             reject("failed...")
//         }
//     }, 8000)
// })


// console.log(groot)  
// // old method : 
// groot.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })


// java script async / await  :

// async : the async keyword makes a function return a Promise 
// await: the await keyword can only be used inside the async function . the function pause the excutation and wait for resolve the promises . 

console.log(groot)
async function getdata(){
    let a=await groot
    console.log(a)
}

getdata()