let num = 3;
const numberString ="3";
const rain = true;


console.log (num,numberString );
console.log (typeof num, typeof numberString);

console.log(num + numberString);
//always use triple === to compare
if(rain === true){
    console.log("stay inside");
}
else{console.log("go out for a walk");
}
num = 5;
console.log("modulus test for even", num %2);

console.log(num % 2);
num = 4;


function evenOrOdd(value){

if (value %2 ===0) {console.log("the number", + value, "is even.");}
else {console.log("the number",+ value, "is odd.");}
}
evenOrOdd(num);
evenOrOdd(15);
var app = {

    isEven: function(input) {
        if (input % 2 === 0) {
            console.log('Your input of ' + input + ' is even');
        } else {
            console.log('Your input of ' + input + ' is odd');
        }
    }
};

app.isEven(2);
app.isEven(3);
app.isEven(4);
app.isEven(5);
