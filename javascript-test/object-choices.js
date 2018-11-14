function loader () {
    const getNamesBtn = document.getElementById('getName');
    const functionBtn = document.getElementById('getFunctionObject');
getNamesBtn.onclick = function () {
    const name = myObject.getName();
    const getNameDisplay = document.getElementById('getNameDisplay');
    getNameDisplay.textContent = name;

    const fullName = myObject.getFullName();
    const getFullNameDisplay = docuent.getElementById('getFullNameDisplay');
    getFullNameDisplay.textContent = fullName;
}
functionBtn.onclick = functionObject;
}
const myObject = {
    firstName: 'Fred',
    lastName: 'smith',
    getName: function() {
        return (this.firstName + ' ' + this.lastName);
    }
}

function FunctionObject() {
    const firstName = 'sue';
    const LastName = 'James';
}
myObject.middleName = 'barfoo';

myObject.getFullName = function() {
    return (this.firstName + " " + this.middleName +" " + this.lastName);
}

console.log(myObject.firstName);
console.log(myObject['firstName']);
console.log(myObject.getName());
console.log(myObject.middleName);
console.log(myObject.getFullName());



const functionObject = () => {
console.log("my function object");
const getName = () => {
    return ('Function Object');
}
functionObject.prototype.getFullName= () => {
    return firstName + ' ' + lastName;
}
console.log(getName());

}








