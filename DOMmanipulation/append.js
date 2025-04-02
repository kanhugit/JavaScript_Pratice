//using append( ) method
let appendContainer = document.getElementById("appendContainer"); //target parent container
let para1 = document.createElement("p"); //creating paragraph element with text dynamicaaly
para1.textContent = "this a paragraph added with append() method"; //adding the text  dynamically
// appendContainer.append(para1);   //adding text on webpage for visible

let para2 = document.createElement("pre");
para2.textContent = "this is paragraph2 added with append() method";
// appendContainer.append(para2);

let para3 = document.createElement("mark");
para3.textContent = "this the paragraph3 added with append() methods";
// appendContainer.append(para3);

let para4 = document.createElement("strike");
para4.textContent = "this is the paragraph4 added with append() methods";
appendContainer.append(
  para1,
  para2,
  para3,
  para4,
  "text string added by append() methods"
); ///it adds multiple elements or  text string at once
//====================================================================================

let appendChildContainer = document.getElementById("appendChildContainer");

// let line1 = document.getElementById("appendChildContainer");
// line1.textContent = "line1 added by appendchild() ";
// appendChildContainer.appendChild(line1);

let line2 = document.getElementById("appendChildContainer");
line2.textContent = "line2 added by appendchild() ";
appendChildContainer.appendChild(line2);

// let line3 = document.getElementById("appendChildContainer");
// line3.textContent = "line3 added by appendchild()";
// appendChildContainer.appendChild(line3);
 