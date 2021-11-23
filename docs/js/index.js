const btn_open = document.getElementById('btn_open');
const btn_close = document.getElementById('btn_close');
const btn_education = document.getElementById('btn_education');
const btn_work_exp = document.getElementById('btn_work_exp');
const btn_skill = document.getElementById('btn_skill');
const btn_languages = document.getElementById('btn_languages');
const btn_other_info = document.getElementById('btn_other_info');
const info_contenido = document.getElementById('info_contenido');
const modal_container = document.getElementById('modal_container');
const form = document.getElementById('form');
const form_user = document.getElementById('form-user');
const btn_save_user = document.getElementById('btn_save_user');
const btn_enviar_msj = document.getElementById('btn-enviarMensaje');
const nombre = document.getElementById('nombreContacto');
const documento = document.getElementById('document-user');
const email = document.getElementById('email-user');
const education = 'education';
const experiencia = 'experiencia-laboral';
const languages = 'languages';
const skills = 'skills';
const other_info = 'other_info';
const save_user = 'enviar-formulario';
const api_url = 'https://PW2021-APINode-AnaBergallo.anabergallo.repl.co'
const HTMLResponse = document.getElementById('info_contenido');

btn_open.addEventListener('click', showModal);
btn_close.addEventListener('click', hideModal);
btn_education.addEventListener('click', function() {getInfo(education)});
btn_work_exp.addEventListener('click', function() {getInfo(experiencia)});
btn_skill.addEventListener('click', function() {getInfo(skills)});
btn_languages.addEventListener('click', function() {getInfo(languages)});
btn_other_info.addEventListener('click', function() {getInfo(other_info)});
btn_save_user.addEventListener('click', function() {sendInfo()});
form.addEventListener('submit', function() {fixFormulario});
// form_user.addEventListener('submit', function() {sendInfo(e)});

function sendInfo() {
    let name = nombre.texto;
    let doc = documento.texto;
    let mail = email.texto;
    let data = {'nombreContacto': name, 'documento': doc, 'email': mail}; 
    fetch(`${api_url}/${save_user}`, {
        method: "POST",
        mode: 'cors',
        headers: new Headers({ "content-type": "application/json" , "Access-Control-Allow-Origin": "*"}),
        body: JSON.stringify(data)
    }).then((response) => { 
        let contacto = response.cookie["PW_2021-CV_Contacto"];
        alert (`Gracias ${contacto}`);
        return console.log(response);
    }).catch(err => console.log('error ', err));
};

function getInfo(endpoint) {
    fetch(`${api_url}/${endpoint}`, {
        mode: "cors",
        headers: new Headers({ "content-type": "application/json" })
    }).then((response) => response.json()).then((data)=> {
        let texto = '';
        if (endpoint == 'experiencia-laboral') {
            console.log(data)
            let experiencia = data['experiencia-laboral'];
            for (let row of experiencia) {
                texto += `<p><b>${row.empresa}</b> - ${row.puesto} - ${row.descripcion} - ${row.inicio} - ${row.fin}</p>`
            }   
        } else if (endpoint == 'skills') {
            for (let row of data) {
                texto += `<p><b>${row.name}:</b> ${row.description}</p>`
            }  
        } else if (endpoint == 'education') {
            for (let row of data) {
                texto += `<p><b>${row.name}</b> - ${row.institution} - ${row.description} - ${row.state}</p>`
            }   
        } else if (endpoint == 'languages') {
            for (let row of data) {
                texto += `<p><b>${row.name}:</b> ${row.description}</p>`
            }   
        } else if (endpoint == 'other_info') {
            for (let row of data) {
                texto += `<p><b>${row.name}:</b> ${row.description}</p>`
            }  
        }
        
        HTMLResponse.innerHTML = `${texto}`;
    });

};

//to do
// document.addEventListener('mousedown', (event) => {
//     var var_form = document.getElementById('modal');
//     if (!useRef().current.contains(event.target)){
//         hideModal();
//     }
// });

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