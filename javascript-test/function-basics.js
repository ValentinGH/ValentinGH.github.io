window.onload =() => {
    const FunctionCalls= document.getElementById("functionCalls"); 
    const callUserInput = document.getElementById("callUserInput")
     const returnValue = document.getElementById("functionReturn")
     
     FunctionCalls.onclick = () => {
        simpleFunction();
        functionParameters("many functions take parameters");
           returnValue.textContent=  functionReturn();
        
        
    
    }
callUserInput.onclick=() => {
        const userInputParagraph = document.getElementById("showUserInput");
        const UserInput = document.getElementById("userInput");
        userInputParagraph.textContent = UserInput.value;
        
    }
  
}


    function simpleFunction()
    {
        const displayText = "function should consist of statements designed to perform a single task";
        const simpleFunctionParagraph = document.getElementById("simpleFunction");
        console.log(displayText);
        simpleFunctionParagraph.textContent = displayText;
    }

    function functionParameters(value)
        {

            const simpleFunctionParagraph = document.getElementById("functionParameters");
            console.log(value);
            simpleFunctionParagraph.textContent = value;

        }
    
 function functionReturn() 
{
    const returnText = "Many functions return values";
    return(returnText);
    
}
  