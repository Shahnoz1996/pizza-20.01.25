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

button.addEventListener('click', () => {
    list.classList.toggle('show'); // Илова/пок кардани синфи 'show'
    if (list.classList.contains('show')) {

    } else {

    }
});


// Popup 1 elements
const modal1 = document.getElementById('modal1');
const modal1Overlay = document.getElementById('modal1Overlay');
const toModal2Button = document.getElementById('toModal2');

// Popup 2 elements
const modal2 = document.getElementById('modal2');
const modal2Overlay = document.getElementById('modal2Overlay');
const toModal3Button = document.getElementById('toModal3');

// Popup 3 elements
const modal3 = document.getElementById('modal3');
const modal3Overlay = document.getElementById('modal3Overlay');
const closeAllButton = document.getElementById('closeAll');

// Open first popup on body click
document.body.addEventListener('click', () => {
    modal1.classList.add('show');
    modal1Overlay.classList.add('show');
}, { once: true }); // Срабатывает только один раз

// Transition from Popup 1 to Popup 2
toModal2Button.addEventListener('click', () => {
    modal1.classList.remove('show');
    modal1Overlay.classList.remove('show');
    modal2.classList.add('show');
    modal2Overlay.classList.add('show');
});

// Transition from Popup 2 to Popup 3
toModal3Button.addEventListener('click', () => {
    modal2.classList.remove('show');
    modal2Overlay.classList.remove('show');
    modal3.classList.add('show');
    modal3Overlay.classList.add('show');
});

// Close all popups
closeAllButton.addEventListener('click', () => {
    modal3.classList.remove('show');
    modal3Overlay.classList.remove('show');
});

// Optional: Close modals by clicking outside
[modal1Overlay, modal2Overlay, modal3Overlay].forEach((overlay) => {
    overlay.addEventListener('click', () => {
        overlay.classList.remove('show');
        overlay.previousElementSibling.classList.remove('show');
    });
});


