// synchronous
let data=new Promise((resolve,reject)=>{
    var fs=require("fs")
    var val=fs.readFileSync("word.txt")
    resolve(val.toString())
})
data.then((item)=>{
    console.log(item);
}).catch((item)=>{

})

// asynchronous
let data=new Promise((resolve,reject)=>{
    var fs=require("fs")
    var val=fs.readFileSync("word.txt" ,function(err,value){
        reject (err)

    })
    resolve(val.toString())


})
data.then((item)=>{
    console.log(item);
}).catch((item)=>{

})