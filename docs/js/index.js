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
const education_csv = 'education.csv';
const experiencia_csv = 'experiencia.csv';
const languages_csv = 'languages.csv';
const skills_csv = 'skills.csv';
const other_info_csv = 'other_info.csv';

btn_open.addEventListener('click', showModal);
btn_close.addEventListener('click', hideModal);
btn_education.addEventListener('click', getInfo(education_csv));
btn_work_exp.addEventListener('click', getInfo(experiencia_csv));
btn_skill.addEventListener('click', getInfo(skills_csv));
btn_languages.addEventListener('click', getInfo(languages_csv));
btn_other_info.addEventListener('click', getInfo(other_info_csv));
form.addEventListener('submit', fixFormulario);

function getInfo(csv_id) {
    console.log(csv_id.text);
    let ruta = '../csv/'+csv_id;
    fetch(ruta).then(data => data.text()).then(data => {
        info_contenido.innerHTML = `<p>${data}</p>`;
    })
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