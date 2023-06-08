/* 

+ add
- minus
* multiply
/ divide
% modulus

*/
let a,b;

function calc(){//function that is called on click of "=" button
    let n1=parseFloat(document.getElementById('num1').value);//get value of num1 entered at 1st input box
    let n2=parseFloat(document.getElementById('num2').value);
    let operator=document.getElementById('operators').value;//since operator is a selector we will be differentiating by options

    a=n1;//intialized here for purpose of use in another function
    b=n2;// basically i want to make these variable values global.

    if(operator==='+'){//if id of variable operator is + we call addition function
        document.getElementById('result').value=addition(a,b);
    }else if(operator==='-'){//else if all the way
        document.getElementById('result').value = subtraction(a,b);
    }else if(operator==='X'){
        document.getElementById('result').value = multiplication(a,b);
    }else if(operator ==='/'){
        document.getElementById('result').value = division(a,b);
    };//function finito
};

function showMore(){// called upon click of Show More button
document.getElementById('tresult').innerHTML = checkDivisible(a,b)+checkEven(a)+checkEven(b)+checkOdd(a)+checkOdd(b)+checkSize(a,b);
};


function multiplication(x,y){
    //multiply the numbers return result
    let mresult=x*y;
    return mresult;
};

function division(x,y){
    // divide the 2 numbers
    let dresult=x/y;
    //return
    return dresult;
};

function addition(x,y){
    //add the 2
    let aresult=x+y;
    //return result
    return aresult;
};

function subtraction(x,y){
    //subtract y from x
    let sresult=x-y;
    //return
    return sresult;
};//x should be larger than y if you want positive result

function modulus(x,y){
    //get remainder of division x/y if any
    let moresult=x%y;
    //return the result whether zero or more
    return moresult;
    //if this function returns 0 , y is a factor of x 
};

function checkDivisible(x,y){
    let a=modulus(x,y);//use function to get modulus
    if(a==0){//compare result to 0, only if it is 0 is it divisible
       //console.log(`${x} is divisible by ${y}`);
       return(`${x} is divisible by ${y} <br>`);
    }else{//if it is not 0, y is not a factor of x
        //console.log(`${x} is not divisible by ${y}`)
        return(`${x} is not divisible by ${y} <br>`);
    }
};

function checkOdd(x){
let a=modulus(x,2)
if(a===0){
    //console.log(`${x} is not odd`);
    return(`${x} is not odd <br>`);
}else{
    //console.log(`${x} is odd`);
    return(`${x} is odd <br>`);
}
};

function checkEven(x){
    let a=modulus(x,2);
    if(a===0){
        //console.log(`${x} is even`);
        return(`${x} is even <br>`);
    }else{
        //console.log(`${x} is not even`);
        return(`${x} is not even <br>`);
    };
    };

function checkSize(x,y){
        if(x<y){
            //console.log(`${x} is less than ${y}`);
            return(`${x} is less than ${y} <br>`);
        }else if(x>y){
            //console.log(`${x} is greater than ${y}`);
            return(`${x} is greater than ${y} <br>`);
        }else if(x===y){
            //console.log(`${x} is equal to ${y}`);
            return(`${x} is equal to ${y} <br>`);
        };
    };