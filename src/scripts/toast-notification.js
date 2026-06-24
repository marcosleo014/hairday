const msgToastContainer = document.querySelector('.msg-toast');
const btnToast = document.querySelector('.close-toast');

// -------------------- toast msg -----------------
let toastTimeout;

export function toastMsg(msg) {
    msgToastContainer.innerText = msg;
    const toastContainer = msgToastContainer.closest('.toast-notification');
    toastContainer.classList.remove('toast-off');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toastContainer.classList.add('toast-off');
    }, 6000);
}

// --------------- button close of toast ----------------
btnToast.addEventListener('click', () => {
    btnToast.closest('aside').classList.add('toast-off')
})

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};