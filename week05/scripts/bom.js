const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

button.addEventListener('click', () => {
    const myItem = input.value.trim();
    if (!myItem) {
        alert('Please enter an item.');
        return;
    }
    
    displayList(myItem);
    chaptersArray.push(myItem);
    setChapterList();
    input.value = '';
    input.focus();
});

function displayList(item) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${item}</span>
        <button>❌</button>
    `;
    
    list.append(listItem);
    
    const deleteButton = listItem.querySelector('button');
    deleteButton.addEventListener('click', () => {
        deleteChapter(item);
        listItem.remove();
    });
}

function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters')) || [];
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

chaptersArray.forEach(chapter => displayList(chapter));
