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
const education_csv = 'education';
const experiencia = 'experiencia-laboral';
const languages = 'languages';
const skills = 'skills';
const other_info = 'other_info';
const api_url = 'https://PW2021-APINode-AnaBergallo.anabergallo.repl.co'
const HTMLResponse = document.getElementById('info_contenido');

btn_open.addEventListener('click', showModal);
btn_close.addEventListener('click', hideModal);

// btn_education.addEventListener('click', function() {getInfo(education_csv)});
btn_work_exp.addEventListener('click', function() {getInfo(experiencia)});
btn_skill.addEventListener('click', function() {getInfo(skills)});
btn_languages.addEventListener('click', function() {getInfo(languages)});
// btn_other_info.addEventListener('click', function() {getInfo(other_info_csv)});
form.addEventListener('submit', fixFormulario);


function getInfo(endpoint) {
    fetch(`${api_url}/${endpoint}`).then((response) => response.json()).then((data)=> {
        let texto = '';
        if (endpoint == 'experiencia-laboral') {
            for (let row of data) {
                texto += `<p><b>${row.empresa}</b> - ${row.puesto} - ${row.descripcion} - ${row.inicio} - ${row.fin}</p>`
            }   
        } else if (endpoint == 'skills') {
            for (let row of data) {
                texto += `<p><b>${row.name}:</b> ${row.description}</p>`
            }  
        } else if (endpoint == 'education') {
            for (let row of data) {
                texto += `<p> ${row.skills}</p>`
            }  
        } else if (endpoint == 'languages') {
            for (let row of data) {
                texto += `<p><b>${row.name}:</b> ${row.description}</p>`
            }   
        } else if (endpoint == 'other_info') {
            for (let row of data) {
                texto += `<p> ${row.skills}</p>`
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