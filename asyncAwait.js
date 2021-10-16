// // without await

// async function f() {
//     return Promise.resolve(1);
//   }
  
//   f().then(d=>console.log(d)); // 1

// with await
// async function f(){
//     console.log("first output is this");
//     let promis=new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("done");

//         },1000)
//     })
//     let result= await promis
//     console.log(result);
//     console.log("before setTimeout execution");
// }
// f()



let data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("recive data")
    },1000)

})
async function f(){
    let res=await data
    console.log(res);
}
f()