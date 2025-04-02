let p=document.querySelector("p");

p.className="demo";

document.getElementsByClassName("demo")[0].style.backgroundColor="red";

p.className="test";
p.classList.add("demo","fly");
p.classList.remove("fly");
p.classList.toggle("test");
p.classList.toggle("test");
p.classList.toggle("test");

console.log(p.classList.contains("test"));
console.log(p.classList.contains("fly"));
console.log(p.classList.contains("demo"));

//create tables

let table1=document.getElementsByTagName('table')[0];
let thead=document.createElement('thead');
let tbody=document.createElement('tbody');
let tr1=document.createElement("tr");
let tr2=document.createElement("tr");
let tr3=document.createElement("tr");
let tr4=document.createElement("tr");

let th1=document.createElement("th");
th1.innerText="SL NO";

let th2=document.createElement("th");
th2.innerText="NAME";

let th3=document.createElement("th");
th1.innerText="SALARY";

tr1.append(th1,th2,th3);
table1.append(thead,tbody);
thead.append(tr1);

let td1=document.createElement("td");
td1.innerText="1";
let td2=document.createElement("td");
let td3=document.createElement("td");
let td4=document.createElement("td");
let td5=document.createElement("td");
let td6=document.createElement("td");
let td7=document.createElement("td");
let td8=document.createElement("td");









