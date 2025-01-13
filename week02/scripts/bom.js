const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const myItem = input.value.trim(); // using .trim to trim the leading and trailing white space
    if (!myItem) {
        alert('Please enter an item.'); // added an error check to ensure no empty tiems are trying to be added to the list
        return;
    }
    input.value = ''

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${myItem}</span>
        <button>❌</button>
    `;

    list.append(listItem);

    const deleteButton = listItem.querySelector('button');
    deleteButton.addEventListener('click', () => listItem.remove());

    input.focus();
});