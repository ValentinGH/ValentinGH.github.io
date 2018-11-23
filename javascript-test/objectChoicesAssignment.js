window.onload  = function (){
    const btnSimpleObject = document.getElementById('simple-object-action');
    const btnFunctionObject = document.getElementById('function-object-action');
    const btnCustomClass = document.getElementById('custom-class-action');


btnSimpleObject.onclick = () => {
const simpleObjectDisplay = document.getElementById('simple-object-display');
simpleObjectDisplay.textContent = simpleObject.sayName() + " " + simpleObject.dynamicFunction();

}

btnFunctionObject.onclick = () => {
    var funcObj = new FunctionObject ();
    const functionObjectDisplay = document.getElementById('function-object-display');
    functionObjectDisplay.textContent = funcObj.sayName();
}

btnCustomClass.onclick = () => {
    var custClass = new CustomClass();
    const customClassDisplay = document.getElementById('custom-class-display');
    customClassDisplay.textContent = custClass.sayName();
}

var simpleObject = {
    sayName: function () {
        
        const simplestring= 'simple string';
        return simplestring;
        }
}
simpleObject.dynamicFunction = function () {
    const dynamicString = "dynamic function";
    return dynamicString;
}

function FunctionObject () {
    
        
    FunctionObject.prototype.sayName = function () {
        return 'Function Object SayName';
    }
}
    class CustomClass {

sayName () {
    return "custom class";
}
}

console.log(simpleObject.sayName());
var callFunctionObject = new FunctionObject();
console.log(callFunctionObject.sayName());
var callCustomClass = new CustomClass();
console.log(callCustomClass.sayName());
    
}






