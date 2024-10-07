// question-1---------------------------------

function number(num){
    while (num>0) {
        if(num%2==0){
           console.log("number is even",num);
           break;
           
        }else{
            console.log("number is odd",num);a
            break;
        }    
    }
    
}
number(5)


// question-2---------------------------------------------

function myfun(marks){

    if(marks>90 || marks==90){
        return "grade A"
    }
    if(marks>80 || marks==80){
        return "grade B"
    }
    if(marks>70 || marks==70){
        return "grade C"
    }
    if(marks>60 || marks==60){
        return "grade D"
    }
    if(marks>50 || marks==50){
        return "grade E"
    }   
    else{
        return "FAIL"
    }
}

let rv=myfun(100);
console.log(rv);

// Question-3----------------------------------------------------


const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// It will multiply numbers with 2

// Question-4--------------------------------------------------------
function fun(str){
let result=str.includes("h");
return result;
}
let rv=fun("hello,world!");
console.log(rv);

// Question-5-------------------------------------------------------

function sum(a,b){
    c=a+b;
    return c;
}
let rv=sum(5,10)
console.log(rv);
