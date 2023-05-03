const app = { 

init: function() {
    app.selectElement();
},

about: document.querySelector('.about_bg'),
resume: document.querySelector('.resume_bg'),
contact: document.querySelector('.contact_bg'),

sectionAbout: document.querySelector('.about'),
sectionResume: document.querySelector('.resume'),
sectionContact: document.querySelector('.contact'),


selectElement: function(){
app.about.addEventListener('click', app.handleClickAbout );
app.resume.addEventListener('click', app.handleClickResume );
app.contact.addEventListener('click', app.handleClickContact );
},

handleClickAbout: function(){

    app.sectionResume.classList.contains('activ') ? app.sectionResume.classList.remove('activ') : '';
    app.resume.classList.contains('header_list-activ') ? app.resume.classList.remove('header_list-activ') : '';

    app.sectionContact.classList.contains('activ') ? app.sectionContact.classList.remove('activ') : '';
    app.contact.classList.contains('header_list-activ') ? app.contact.classList.remove('header_list-activ') : '';

    app.sectionAbout.classList.add('activ' , 'fadeInLeft');
    app.about.classList.add('header_list-activ');
},

handleClickResume: function(){

console.log(app.about.classList.contains('header_list-activ'));

    app.sectionAbout.classList.contains('activ') ? app.sectionAbout.classList.remove('activ') : '';
    app.about.classList.contains('header_list-activ') ? app.about.classList.remove('header_list-activ') : '';

    app.sectionContact.classList.contains('activ') ? app.sectionContact.classList.remove('activ') : '';
    app.contact.classList.contains('header_list-activ') ? app.contact.classList.remove('header_list-activ') : '';

    app.sectionResume.classList.add('activ', 'fadeInLeft');
    app.resume.classList.add('header_list-activ');
},

handleClickContact: function(){

    app.sectionAbout.classList.contains('activ') ? app.sectionAbout.classList.remove('activ') : '';
    app.about.classList.contains('header_list-activ') ? app.about.classList.remove('header_list-activ') : '';
    
    app.sectionResume.classList.contains('activ') ? app.sectionResume.classList.remove('activ') : '';
    app.resume.classList.contains('header_list-activ') ? app.resume.classList.remove('header_list-activ') : '';

    app.sectionContact.classList.add('activ', 'fadeInLeft');
    app.contact.classList.add('header_list-activ')
},


}

document.addEventListener('DOMContentLoaded', app.init);