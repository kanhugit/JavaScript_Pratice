//target elements
//1) Direct ways
console.log(document.images);
console.log(document.images[0]);
console.log(document.images[1]);
console.log(document.images[2]);

console.log(document.links);
console.log(document.links[0]);
console.log(document.links[1]);
console.log(document.links[2]);

console.log(document.body);
console.log(document.title);

//2)indirect accesss
//document.getElementById()-It accepts id name in form of string
// -return 1st occureneces
//target the elements based on the id name

let x = document.getElementById("item1");
console.log(x);

// document.getElementsByClassName()
//target the elemments based upon the class name
//accepts class name in form of string
//returns all occurances in form of HTML collection
//to access indivisually we use index postion

let y = document.getElementsByClassName("listitem");
console.log(y);

for (let i = 0; i < y.length; i++) {
  console.log(y[i]);
}

// document.getElementsByTagName()-
//accepts tagname in form of string
//returns all occurences in form of HTML collection
//To access indivisually use index position

let ul = document.getElementsByTagName("ul");
console.log(ul);
console.log(ul[0]);

// document.querySelector() -accepts idname ,class name ,tag name in form of string
//returns first occurences
//#idname,.classname,tagname...

console.log(document.querySelector("ul"));
console.log(document.querySelector(".listitem"));
console.log(document.querySelector("#item2")); 

// document.querySelectorAll()- accepts idname ,class name ,tag name in form of string
//returns all occurences in form of nodeList
//#idname,.classname,tagname...

console.log(document.querySelectorAll("ul")[0]); //[ul]
console.log(document.querySelectorAll(".listitem")); //[li,li...]
console.log(document.querySelectorAll("#item1")[0]); //[item1]
