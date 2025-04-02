let a=11;
//if statement

if(a>10){
    console.log(" a is grater then 10");
}
console.log("hello world");


//if- else statement:if the given condition is true then if block gets excuted
//                  --if the given condition is false then if block gets excuted

//if(condition)
// {
//     if-block
// }
// else{
//     else -block
// }
// else{
//     else block
// }

//even or odd exp

if(a%2==0){
    console.log("given number is even number");
}else{
    console.log("given number is odd number");
}

//positive or negative number

if(a>0){
    console.log("given number is positive");
}else{
    console.log("given number is negative");
}

//nested-if statement

// if(cond 1)
// {
//     cond1 true
//     if(cond 2){
//         cond1 true and cond2 true
//     }
//     else{
//         cond 1 true and cond2 false
//     }
// }else{
//      cond1 false
//      if(cond 3){
//         cond3 true
//      }else{
//         cond false 
//      }
// }



if(a>0){
    console.log("given number is positive number");
    if(a%2==0){
        console.log("and even number");
    }else{
        console.log("and odd number");
    }
}else{
    console.log("given number is negative number");
    if(a%2==0){
        console.log("and even number");
    }else{
        console.log(" and odd number");
    }
    
}

//if-else ladder satements


// if(cond1){
//     cond1 true
// }else if(cond 2){
//  cond1 false and cond2 true
// }else if(condition 3){
//  cond3 true,but cond1,cond2 false
// }else{
//     cond 1,2,3 false
// }



//exaample ---army height>6, weights>60, age>18

let height=5;
let weights=60;
let age=19;

// if(height>18&&weights>60&&age>18){
//     console.log("eligible for job");
// }else{
//     console.log("not eligible for army");
// }


if(height>6){
    console.log("height is not ok");
}else if(weights<60){
  console.log("weight is not matched");
}else if(age<19){
  console.log("age is not matched");
}else{
    console.log("selected for the aramy");
}

//switch satements

// switch(expression/variable){
//     case 1:break;
//     case 2:break;
//     case 3:break;
//     ......
//     case n:break;
//     default

// }



//marriage age>21  job=true , salary>3cr loc=bdk
let marriage_age=20;
let job=true;
let salary=1;
let loc=bbsr;
if(marriage_age>21&&job==true&&salary==1&&loc==bdk){
    console.log("eligible for marrige ");
}else{
    console.log("not eligible for marriage");
}





//interview java>80,web>80,sql>80
//attended %>90%

let java=78;
let web=85;
let sql=80;
let attendance=70;
if(java>80){
    console.log("passed in java");
}else if(web>90){
    console.log("passed in web tec");
}else if(sql>80){
    console.log("passed in SQL");
}else if(attendance>90){
    console.log("passed in attendance");
}
//wap program to  to check the given number is divisible by 4 and 5
let n1=20;
if(n1%4==0&&n1%5==0){
    console.log("given number is  divisible by 4 and 5");
}else{
    console.log("given number is not divisible by 4 and 5");
    if(n1%4==0){
        console.log("given number is divisible by 4 only");
    }else if(n1%5==0){
        console.log("given number is divisible by 5 only");
    }
}

//given number is not divisible by 4 and 5

//given number is divisible by 4 but not divisible by 5
//given number is not divisible by 4 but divisible by 5


//wap to print the datatype of given number
let datatype1="kanha";
let datatype2=10;
let datatype3=true;
let datatype4;
console.log(typeof datatype1);
console.log(typeof datatype2);
console.log(typeof datatype3);
console.log(typeof datatype4);



//wap to check given number is divisible by 3 and 8
let num=24;
if(num%3==0&&num%8==0){
    console.log("divisible by 3 and 8");
}else{
    console.log("not divisible by  3 and 8");
}



//example:print the total number of subject passed and total number of subject failed

// let science=80;
// let math=75;
// let tel=40;
// let social=30;

