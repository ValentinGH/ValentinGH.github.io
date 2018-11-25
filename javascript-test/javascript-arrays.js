
window.onload = () => {

    const btnNumbersAction = document.getElementById('numbers-action');
    const liNumbersDisplay = document.getElementById('numbers-display');
    const btnLanguagesAction = document.getElementById('languages-action');
    const liLanguagesDisplay = document.getElementById('languages-display');
    const liNumbersSortDisplay = document.getElementById('numbers-sorted-display');
    const liLanguagesSortDisplay = document.getElementById('languages-sorted-display');
    const btnClearLists = document.getElementById('clear-action');
    const pDescription = document.getElementById('description');

    var arrays =
    {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
        languages: ['JavaScript', 'HTML', 'CSS', 'Java', 'C#', 'Python', 'C++'],
    }





    btnNumbersAction.onclick = () => {
        for (let number of arrays.numbers) {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(number));
            liNumbersDisplay.appendChild(li);
        }


        arrays.numbers.sort();
        for (let number of arrays.numbers) {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(number));
            liNumbersSortDisplay.appendChild(li);
        }
        pDescription.textContent = "This button calls the arrays of numbers and displays it in the corresponding list. Then the array is sorted and displayed again in another list. ";
    }
    btnLanguagesAction.onclick = () => {
        for (let number of arrays.languages) {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(number));
            liLanguagesDisplay.appendChild(li);
        }
        arrays.languages.sort();

        for (let number of arrays.languages) {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(number));
            liLanguagesSortDisplay.appendChild(li);
        }
pDescription.textContent= 'This button calls an array of programming languages and displays them in a list. The arrays is then sorted alphabetically and displayed in another list.';
    }
    btnClearLists.onclick = () => {
        liNumbersDisplay.textContent = ' ';
        liLanguagesDisplay.textContent = ' ';
        liLanguagesSortDisplay.textContent = ' ';
        liNumbersSortDisplay.textContent = ' ';
        pDescription.textContent= 'This button clears the lists by setitng their textContent attribute to empty';

    }




for (let i = 0; i < arrays.numbers.length; i++) {
    console.log(arrays.numbers[i]);
}
} // onload

