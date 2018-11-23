window.onload = () => {
    const numbers = [2,1,3];
    const objectLiteralAction = document.getElementById('object-literal-action');
    const numbersAction = document.getElementById('numbers-action')
    
    objectLiteralAction.onclick = () => {
        const displayString = 'you clicked a button'
        const objectLiteralDisplay = document.getElementById('object-literal-display');
         console.log(displayString) ;  
        
         objectLiteralDisplay.textContent = displayString;
        } // end onclick

        numbersAction.onclick = () => {
            const numbersDisplay = document.getElementById('numbers-display');
            
            for (let number of numbers){
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(number));
                numbersDisplay.appendChild(li);
            }
       
        }

};


