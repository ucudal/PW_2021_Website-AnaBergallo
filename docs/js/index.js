const btn_open = document.getElementById('btn_open');
const modal_container = document.getElementById('modal_container');
const btn_close = document.getElementById('btn_close');

btn_open.addEventListener('click', showModal);
btn_close.addEventListener('click', hideModal);

function showModal() {
    modal_container.classList.add('show');
}
function hideModal() {
    modal_container.classList.remove('show');
}