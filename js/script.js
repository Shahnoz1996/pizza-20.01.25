const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
});

closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});


const button = document.getElementById('toggleButton');
const list = document.getElementById('myList');

// Илова кардани рӯйдод ба тугма
button.addEventListener('click', () => {
    list.classList.toggle('show'); // Илова/пок кардани синфи 'show'
    if (list.classList.contains('show')) {

    } else {

    }
});