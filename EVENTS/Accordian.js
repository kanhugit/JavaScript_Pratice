let questions=document.getElementsByClassName("question");
let answer=document.getElementsByClassName("answer");
answer[0].style.display="none";
answer[1].style.display="none";
answer[2].style.display="none";

let plus=document.getElementsByClassName("plus");
let mark=document.getElementsByClassName("mark");
mark[0].style.display='none';
mark[1].style.display='none';
mark[2].style.display='none';

questions[0].addEventListener("click",()=>{
    if(answer[0].style.display=='none'){
        answer[0].style.display='block';
        mark[0].style.display="inline";
        plus[0].style.display='none';
    }else{
        answer[0].style.display="none";
        mark[0].style.display="none";
        plus[0].style.display='inline'
    }

})
questions[1].addEventListener("click",()=>{
    if(answer[1].style.display=='none'){
        answer[1].style.display='block';
        mark[1].style.display="inline";
        plus[1].style.display='none';
    }else{
        answer[1].style.display="none";
        mark[1].style.display="none";
        plus[1].style.display='inline'
    }

})
questions[2].addEventListener("click",()=>{
    if(answer[2].style.display=='none'){
        answer[2].style.display='block';
        mark[2].style.display="inline";
        plus[2].style.display='none';
    }else{
        answer[2].style.display="none";
        mark[2].style.display="none";
        plus[2].style.display='inline'
    }

})



