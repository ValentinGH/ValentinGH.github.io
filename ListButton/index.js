window.onload = () => {
    // PART 1
     const userInput = document.getElementById('list-data');
     const setTextButton = document.getElementById('set-text');
     const listButton = document.getElementById('add-to-list');
    
    // PART 2
    setTextButton.onclick = () => {
        userInput.value = '';
    }
    //PART 3
    listButton.onclick = () =>
    { const myList = document.getElementById('my-list');
    elfCode.appendToList(myList, userInput.value);
 }
}
