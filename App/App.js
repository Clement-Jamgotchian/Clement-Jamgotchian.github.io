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

    if(app.sectionResume.classList.contains('activ') === true ){
        app.sectionResume.classList.remove('activ')
    }
    else if(app.resume.classList.contains('header_list-activ') === true){
        app.resume.classList.remove('header_list-activ')
    }
    if(app.sectionContact.classList.contains('activ') === true){
        app.sectionContact.classList.remove('activ')
    }
    else if(app.contact.classList.contains('header_list-activ') === true){
        app.contact.classList.remove('header_list-activ')
    }
    app.sectionAbout.classList.add('activ' , 'fadeInLeft');
},

handleClickResume: function(){

    if(app.sectionAbout.classList.contains('activ') === true){
        app.sectionAbout.classList.remove('activ')
    }
    if(app.sectionContact.classList.contains('activ') === true){
        app.sectionContact.classList.remove('activ')
    }
    else if(app.contact.classList.contains('header_list-activ') === true){
        app.contact.classList.remove('header_list-activ')
    }
    app.sectionResume.classList.add('activ', 'fadeInLeft');
},

handleClickContact: function(){

    if(app.sectionAbout.classList.contains('activ') === true){
        app.sectionAbout.classList.remove('activ')
    }
    if(app.sectionResume.classList.contains('activ') === true){
        app.sectionResume.classList.remove('activ')
    }
    app.sectionContact.classList.add('activ', 'fadeInLeft');
},


}

document.addEventListener('DOMContentLoaded', app.init);