function Hide(){
    document.getElementById("para1").style.display="none";
}
function Show(){
    document.getElementById("para1").style.display="block";

}

function Hide1(){
    document.getElementById("para2").style.display="none";
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="block";
   
}
function Show1(){
    document.getElementById("para2").style.display="block";
    document.getElementById("btn1").style.display="block";
    document.getElementById("btn2").style.display="none";
    
}

function change() {
    document.getElementById("p").innerHTML =
        "Read carefully javascripts.";
}


// Initial count value
let count = 0;

function updateCount(change) {
    if (change > 0 && count < 10) {
        count += change; 
    } else if (change < 0 && count > 0) {
        count += change; 
    }
    
    document.getElementById("count").textContent = count;
}












    
   
   
    
