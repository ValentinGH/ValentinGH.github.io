window.onload=() => {
const simpleobjectBtn = document.getElementById('simple-object-action');
const functionObjectBtn = document.getElementById('function-object-action');
const customClassBtn = document.getElementById('custom-class-action')   ;

const simpleObjectDisplay = document.getElementById("simple-object-display");
const functionObjectDisplay = document.getElementById('function-object-display');
const customClassDisplay = document.getElementById('custom-class-display');

simpleobjectBtn.onclick = () => {
    simpleObjectDisplay.textContent = simpleObject.sayName() + ' ' + simpleObject.dynamicMethod();
}
functionObjectBtn.onclick = () => {
    var functionObject = new FunctionObject();
 functionObjectDisplay.textContent = functionObject.sayName();
 
}

customClassBtn.onclick= () =>{
    const custClass = new customClass();
   customClassDisplay.textContent =  custClass.printClass();
}

} // end onload






// FIRST OBJECT
var simpleObject = {
    sayName(){
    
        var simpleObj = console.log("simple object");
        return simpleObj;
        }
}; // simpleobject
simpleObject.dynamicMethod = () => {
var dynamic = console.log('dynamic method');
return dynamic;
}
// SECOND OBJECT
function FunctionObject () {
    // const function obj
   FunctionObject.prototype.sayName = function()
   {
       var sayName = console.log('FunctionObject.sayName');
      return sayName;
    }
FunctionObject.PrivateFunction = function() {
var pri =  console.log('private function');
return pri;}
}


//THIRD OBJECT
class customClass{
    printClass(){
var print = console.log('custom class');
return print;    }
    }



