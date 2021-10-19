const btn_open = document.getElementById('btn_open');
const modal_container = document.getElementById('modal_container');
const btn_close = document.getElementById('btn_close');
const form = document.getElementById('form');

btn_open.addEventListener('click', showModal);
btn_close.addEventListener('click', hideModal);

form.addEventListener('submit', fixFormulario)

function showModal() {
    modal_container.classList.add('show');
}
function hideModal() {
    form.reset();
    modal_container.classList.remove('show');
}
function fixFormulario(e) {
    e.preventDefault();
}