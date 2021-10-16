let data=new Promise((resolve,reject)=>{
    var a=19
    if(a>7){
        resolve(10)
    }
    else{
        reject(7)
    }
})
data.then((value)=>{
    console.log(value);
    return value
}).catch((value)=>{
    console.log(value,"o");
    return value*3
})
.then((value)=>{
    console.log(value,"p");
    return value*4
}).then((value)=>{
    console.log(value,"t");
    return value*5
})
.catch((value)=>{
    console.log(value);

})