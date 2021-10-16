let data=new Promise((resolve,reject)=>{
    let readlineSync=require("readline-sync")
    let number=readlineSync.questionInt("enter the num")
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            reject(number, "is not a prime number")
            break
        }
    
    else {
        resolve(number, "is a prime number")
    }
    }
})
data.then((item)=>{
    console.log(item, "is a prime number");
}).catch((item)=>{
    console.log(item,"is not a prime number");
})