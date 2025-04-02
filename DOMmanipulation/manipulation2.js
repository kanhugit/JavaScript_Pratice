//creates elements
//createsElement("tagName")

let tr1 = document.createElement("tr");
console.log(tr1);
tr1.innerHTML = `
<td>ID</td>
<td>NAME</td>

`;
console.log(tr1);
let table = document.getElementsByTagName("table")[0];
table.append(tr1);
