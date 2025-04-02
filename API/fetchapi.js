let div1=document.getElementById("div1");
// let x=fetch("https://fakestoreapi.com/products");
// console.log(x);   //promise   =>fulfilled   
// x.then((response)=>{
//     console.log(response);
//     // console.log(response.json);
//     return response.json()
// }).then((data)=>{
//     console.log(data);//20 object
//     // document.write(data[0].description)
    


//     data.map((obj)=>{
//         div1.innerHTML +=`<div style="border:2px solid red;width:300px;padding:10px;">
//             <img src=${obj.image} height="200" width=""200>
//             <h2>${obj.title}</h2>
//             <p>${obj.description}</p>
//             <p>$-${obj.price}</p>

//         </div>
//         `
//     })
// })

const apiUrl="https://fakestoreapi.com/products";
    fetch(apiUrl)
    .then(response=>response.json)
    .then(data=>{
        console.log(data);


        data.map((obj)=>{
            div1.innerHTML +=`<div style="border:2px solid red;width:300px;padding:10px;">
                <img src=${obj.image} height="200" width=""200>
                <h2>${obj.title}</h2>
                <p>${obj.description}</p>
                <p>$-${obj.price}</p>
    
            </div>
            `
        })
    })



    // .catch(error=>{
    //     console.error("Error",error)
    // })