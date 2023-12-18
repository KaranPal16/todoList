
const list = document.querySelector('.list');
const button = document.querySelector('#button')

button.addEventListener('click', () => {
    const input = document.querySelector('#input');
    if (input.value === "") {
        alert("You have to write something...");
    }
    else {
        li = document.createElement('li');
        li.innerHTML = input.value + `<i class="fa-solid fa-circle-xmark"></i>`;
        list.appendChild(li);
    }
    input.value = "";
    datastore();
});

//Delete the item from the list when clicked on the circle x mark
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('active')
        datastore();
    }
    else if (e.target.tagName === 'I') {
        e.target.parentElement.remove();
        datastore();
    }
});

//store data in local storage of browser
function datastore() {
    localStorage.setItem('data', list.innerHTML)
}
function displayData() {
    list.innerHTML = localStorage.getItem('data');
}
displayData();