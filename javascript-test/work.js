#!/usr/bin/env node


var person =  {
    firstName: 'Val',
    lastName: 'Montgomery',
     
    
add_names(firstName,lastName){
    return (firstName + " " + lastName);
}
} // end person
var calculator = {
    operand01: -1,
    operand02: -1,
    add() {
        const sum = calculator.operand01 + calculator.operand02;
        
        divider("Add:",sum);
    }
    ,
    subtract()  {
        const difference = calculator.operand01 - calculator.operand02;
        divider("Subtract:",difference);
    }
} // end calculator
function multiply() {
  const product =   calculator.operand01 * calculator.operand02;
  divider("Multiply:", product);

}

function divider (title, amount) {
    console.log('=========================');
    console.log(title);
    console.log(" ");
    console.log(amount);
    console.log('=========================');
}

function nameLength() {
calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;
}

divider("First Name:",person.firstName);
divider("Last Name:",person.lastName);
divider("Full Name:",person.add_names(person.firstName,person.lastName));
nameLength();
divider("operand 1:",calculator.operand01);
console.log(" ");
divider("operand2:",calculator.operand02);
calculator.add();
calculator.subtract();
multiply();






