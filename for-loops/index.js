window.onload = () => {
    // PART 1
    const userInput = document.getElementById('list-data');
    const setTextButton = document.getElementById('set-text');
     const listButton = document.getElementById('run-for-loop');
    
    
    setTextButton.onclick = () => {
        userInput.value = '';
        let i =0;
        
    }
    //PART 3
    listButton.onclick = () =>
    {
        const myList = document.getElementById('my-list');
        for(i;i<6;i++)
        {
         
     elfCode.appendToList(myList, i);
    }
 }
}
