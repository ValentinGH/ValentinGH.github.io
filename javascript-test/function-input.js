window.onload=function(){
const feetToInchesAction = document.getElementById('feet-to-inches-action');
const milesToFeetAction = document.getElementById('miles-to-feet-action');
const areaOfCircleAction = document.getElementById('area-of-circle-action');
const areaOfTriangleAction  = document.getElementById('area-of-triangle-action');

areaOfTriangleAction.onclick = () => {
    const baseOfTriangleInput = document.getElementById('base-of-triangle-input');
    const heightOfTriangleInput = document.getElementById('height-of-triangle-input');
    const areaOfTriangleDisplay = document.getElementById('area-of-triangle-display')
    areaOfTriangleDisplay.textContent = areaOfTriangle(baseOfTriangleInput.value, heightOfTriangleInput.value);
}

areaOfCircleAction.onclick = () => {
    const areaOfCircleInput = document.getElementById('area-of-circle-input');
    const areaOfCricleDisplay = document.getElementById('area-of-circle-display');
    areaOfCricleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
}

milesToFeetAction.onclick = () => {
    const milesToFeetInput = document.getElementById('miles-to-feet-input');
    const milesToFeetDisplay = document.getElementById('miles-to-feet-display');
    milesToFeetDisplay.textContent = milesToFeet(milesToFeetInput.value);
}

feetToInchesAction.onclick = () => {
    const feetToInchesInput = document.getElementById('feet-to-inches-input');
    const feetToInchesDisplay = document.getElementById('feet-to-inches-display');
    feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
}



} // end onload

function feetToInches(feetInput)
{
return (feetInput * 12);
}

function milesToFeet(milesInput)
{
    
    return (milesInput * 5280);
}

function areaOfTriangle(baseInput, heightInput)
{
    return (baseInput * heightInput / 2);
}

function areaOfCircle(radiusInput)
{
    const radiusSquared = (radiusInput * radiusInput);
    return (Math.PI *radiusSquared);
}

