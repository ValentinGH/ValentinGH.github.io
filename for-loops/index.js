window.onload = () => {
    // PART 1
     const userInput = document.getElementById('list-data');
     const setTextButton = document.getElementById('set-text');
     const listButton = document.getElementById('add-to-list');
    
    
    setTextButton.onclick = () => {
        userInput.value = '';
        let i =0;
        
    }
    //PART 3
    listButton.onclick = () =>
    {
        for(i;i<6;i++)
        {
         const myList = document.getElementById('my-list');
     elfCode.appendToList(myList, userInput.value);
    }
 }
}
