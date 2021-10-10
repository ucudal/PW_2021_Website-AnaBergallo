let btn = document.querySelector('#btn-enviarMensaje');

btn.addEventListener('click', enviarMensaje);

function enviarMensaje() {
    alert("Mensaje enviado! ");
    console.log('Mensaje enviado ok');
}