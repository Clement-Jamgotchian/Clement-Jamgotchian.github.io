const app = { 

init: function() {
    app.selectElement();
},


selectElement: function(){
const about = document.querySelector('.about_bg');
about.addEventListener('click', app.handleClickAbout );
const resume = document.querySelector('.resume_bg');
resume.addEventListener('click', app.handleClickResume );
const contact = document.querySelector('.about_bg');
// about.addEventListener('click', app.handleClickAbout );
},

handleClickAbout: function(){
    const sectionAbout = document.querySelector('.about');
    const sectionResume = document.querySelector('.resume');

    if(sectionResume.classList.contains('activ') === true){
        sectionResume.classList.remove('activ')
    }
    sectionAbout.classList.add('activ');
},

handleClickResume: function(){
    const sectionAbout = document.querySelector('.about');
    const sectionResume = document.querySelector('.resume');

    if(sectionAbout.classList.contains('activ') === true){
        sectionAbout.classList.remove('activ')
    }
    sectionResume.classList.add('activ');
}

}

document.addEventListener('DOMContentLoaded', app.init);