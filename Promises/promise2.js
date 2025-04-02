console.log("start");

let p1=new Promise((resolve,reject)=>{
    let num=1;
    if(num>5){
        resolve("promise is fulfilled becoz num is > 5 ")
    }else{
        reject("num is not > 5")
    }
})

console.log(p1);
p1.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("finally is excuted ");
})
console.log("End");