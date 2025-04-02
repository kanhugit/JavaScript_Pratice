console.log("start ");

let p1=new Promise((resolve,reject)=>{
    let num=10;
    if(num>15){
        resolve("promise is fulfilled becoz num is > 5 ")
    }else{
        reject("num is not > 15")
    }
})

// console.log(p1);

p1.then((result)=>{
    console.log(" The result is :======>",result);
})
.catch((error)=>{
    console.log(" The result is :======>",error);
})
.finally(()=>{
    console.log("finally is excuted ");
})
console.log("End");