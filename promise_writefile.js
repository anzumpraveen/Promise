// let data=new Promise((resolve,reject)=>{
//     var fs=require("fs")
//     var val=fs.writeFileSync("document.txt","i an the student of navgurukul")
//     resolve(val.toString())


// })
// data.then((item)=>{
//     console.log(item);
// }).catch((item)=>{

// })

let data=new Promise((resolve,reject)=>{
    var fs=require("fs")
   var obj="i am the student of navgurukul"
    var val=fs.writeFile("document.txt",obj,function(err,value){
        reject(err)
    })
    resolve(val.toString())


})
data.then((item)=>{
    console.log(item);
}).catch((item)=>{

})