/* 

+ add
- minus
* multiply
/ divide
% modulus

*/

function generatenum(){//selects which operation to carry out based on id of button

    let element=document.getElementById('add');//var is intialised to element that has id add
    let elementId = element ? element.id : '';//check id of said element and assign id to var "elementID"
     if (elementId === 'add') {//compare the two 
       res = addition(ab, bb);//if equal meaning button that has been clicked is ass
       document.getElementById('result').innerHTML = res;
       console.log(res);
     } else {
       element = document.getElementById('subtract');
       elementId = element ? element.id : '';
     
       if (elementId === 'subtract') {
         res = subtraction(ab, bb);
         document.getElementById('result').innerHTML = res;
         console.log(res);
       } else {
         element = document.getElementById('multiply');
         elementId = element ? element.id : '';
     
         if (elementId === 'multiply') {
           res = multiplication(ab, bb);
           document.getElementById('result').innerHTML = res;
           console.log(res);
         } else {
           element = document.getElementById('divide');
           elementId = element ? element.id : '';
     
           if (elementId === 'divide') {
             res = division(ab, bb);
             document.getElementById('result').innerHTML = res;
             console.log(res);
           }
         }
       }
     }
     
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
       console.log(`${x} is divisible by ${y}`)
    }else{//if it is not 0, y is not a factor of x
        console.log(`${x} is not divisible by ${y}`)
    }
};

function checkOdd(x){
let a=modulus(x,2)
if(a===0){
    console.log(`${x} is not odd`)
}else{
    console.log(`${x} is odd`)
}
};

function checkEven(x){
    let a=modulus(x,2);
    if(a===0){
        console.log(`${x} is even`);
    }else{
        console.log(`${x} is not even`);
    }
    };

function checkSize(x,y){
        if(x<y){
            console.log(`${x} is less than ${y}`);
        }else if(x>y){
            console.log(`${x} is greater than ${y}`);
        }else if(x===y){
            console.log(`${x} is equal to ${y}`);
        }
    };

//now to use these functions

/* let product=multiplication(12,12);
console.log(product);
let product1=checkDivisible(12,5);
console.log(product1);
checkEven(4)
checkOdd(5)
checkSize(2,3) */
