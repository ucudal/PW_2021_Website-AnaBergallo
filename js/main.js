const form1 = document.getElementById('form');

form1.addEventListener('submit', enviarMensaje);

function enviarMensaje(e) {
    e.preventDefault();
    console.log('Mensaje enviado ok');
    alert("Mensaje enviado! ");
}