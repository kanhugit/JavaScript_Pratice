//create unoredr list with  friut items without using innerHTML

//  create an unordered list of fruits without  innerHTML

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "Apple";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "Banana";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "Orange";
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.textContent = "Mango";
ul.appendChild(li4);

const li5 = document.createElement("li");
li5.textContent = "Grapes";
ul.appendChild(li5);

document.body.appendChild(ul);

