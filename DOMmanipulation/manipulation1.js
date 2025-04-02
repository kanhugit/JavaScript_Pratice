//change the content 

let para1=document.getElementById("para1");
// console.log(para1);
para1.innerText="DOM    is     a document      object     model      ";
para1.innerHTML="<u>DOM  <br> <b>DOcument Object Model</b></u>"
para1.textContent="DOCUMENT  OBJECT MODEL ";

let table=document.getElementsByTagName("table")[0];
table.innerHTML=`
<tr>
    <td>kanha</td>
    <td>101</td>
    <td>java</td>
</tr>
<tr>
    <td>balia</td>
    <td>102</td>
    <td>pythom</td>
</tr>
<tr>
    <td>swamya</td>
    <td>103</td>
    <td>javascript</td>
</tr>

`
document.images[0].src="../../CSSCLASS/CLONNING PAGE/FlipKart/images/img4.jpeg";


// styles

tarElem.style.cssPropertyName="value"
tarElem.style.cssText="css properties"

para1.style.backgroundColor="red";
para1.style.textAlign="center";
para1.style.color="yellow";

para1.style.cssText="background-color:red;text-align:center;color:yellow";

table.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.style.backgroundColor="green";


// add attributes

document.querySelector("h2").setAttribute("title","DOCUMENT OBJECT MODEL");
document.images[0].setAttribute("title","tifin box");
