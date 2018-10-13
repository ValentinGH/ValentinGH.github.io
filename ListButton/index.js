window.onload = () => {
    // PART 1
     const userInput = document.getElementById('list-data');
     const setTextButton = document.getElementById('set-text');
     const listButton = document.getElementById('add-to-list');
    
    // PART 2 -- I changed this to a clear text button because I thought it would
    // make things easier to deal with. 
    setTextButton.onclick = () => {
        userInput.value = '';
    }
    //PART 3
    listButton.onclick = () =>
    { const myList = document.getElementById('my-list');
    elfCode.appendToList(myList, userInput.value);
 }
}
