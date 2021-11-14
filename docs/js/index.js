const btn_open = document.getElementById('btn_open');
const modal_container = document.getElementById('modal_container');
const btn_close = document.getElementById('btn_close');
const form = document.getElementById('form');

btn_open.addEventListener('click', showModal);
btn_close.addEventListener('click', hideModal);

form.addEventListener('submit', fixFormulario);

//to do
document.addEventListener('mousedown', (event) => {
    var var_form = document.getElementById('modal');
    if (!useRef().current.contains(event.target)){
        hideModal();
    }
});

function showModal() {
    modal_container.classList.add('show');
}
function hideModal() {
    form.reset();
    modal_container.classList.remove('show');
}
function fixFormulario(e) {
    e.preventDefault();
    hideModal();
    alert("Gracias por tu mensaje")
}