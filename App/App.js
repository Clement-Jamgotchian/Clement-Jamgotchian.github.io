const app = { 

init: function() {
    app.selectElement();
    app.typeAnimation();
    app.scrollButton();
    app.titleEffect();
},

about: document.querySelector('.about_bg'),
resume: document.querySelector('.resume_bg'),
contact: document.querySelector('.contact_bg'),
works: document.querySelector('.works_bg'),

wrapper: document.querySelector('#wrapper'),
scroll: document.querySelector('#scroll'),

sectionAbout: document.querySelector('.about'),
sectionResume: document.querySelector('.resume'),
sectionContact: document.querySelector('.contact'),
sectionWorks: document.querySelector('.works'),


selectElement: function(){
app.about.addEventListener('click', app.handleClickAbout );
app.resume.addEventListener('click', app.handleClickResume );
app.contact.addEventListener('click', app.handleClickContact );
app.works.addEventListener('click', app.handleClickWorks );


app.wrapper.addEventListener('scroll', app.scrollButton);

},

handleClickAbout: function(){

    app.sectionResume.classList.contains('activ') ? app.sectionResume.classList.remove('activ') : '';
    app.resume.classList.contains('header_list-activ') ? app.resume.classList.remove('header_list-activ') : '';

    app.sectionContact.classList.contains('activ') ? app.sectionContact.classList.remove('activ') : '';
    app.contact.classList.contains('header_list-activ') ? app.contact.classList.remove('header_list-activ') : '';

    app.sectionWorks.classList.contains('activ') ? app.sectionWorks.classList.remove('activ') : '';
    app.works.classList.contains('header_list-activ') ? app.works.classList.remove('header_list-activ') : '';

    app.sectionAbout.classList.add('activ' , 'fadeInLeft');
    app.about.classList.add('header_list-activ');
},

handleClickResume: function(){

    app.sectionAbout.classList.contains('activ') ? app.sectionAbout.classList.remove('activ') : '';
    app.about.classList.contains('header_list-activ') ? app.about.classList.remove('header_list-activ') : '';

    app.sectionContact.classList.contains('activ') ? app.sectionContact.classList.remove('activ') : '';
    app.contact.classList.contains('header_list-activ') ? app.contact.classList.remove('header_list-activ') : '';
   app.sectionWorks.classList.contains('activ') ? app.sectionWorks.classList.remove('activ') : '';
    app.works.classList.contains('header_list-activ') ? app.works.classList.remove('header_list-activ') : '';
    
    app.sectionResume.classList.add('activ', 'fadeInLeft');
    app.resume.classList.add('header_list-activ');
},

handleClickContact: function(){

    app.sectionAbout.classList.contains('activ') ? app.sectionAbout.classList.remove('activ') : '';
    app.about.classList.contains('header_list-activ') ? app.about.classList.remove('header_list-activ') : '';

    app.sectionResume.classList.contains('activ') ? app.sectionResume.classList.remove('activ') : '';
    app.resume.classList.contains('header_list-activ') ? app.resume.classList.remove('header_list-activ') : '';

    app.sectionWorks.classList.contains('activ') ? app.sectionWorks.classList.remove('activ') : '';
    app.works.classList.contains('header_list-activ') ? app.works.classList.remove('header_list-activ') : '';
    
    app.sectionContact.classList.add('activ', 'fadeInLeft');
    app.contact.classList.add('header_list-activ')
},

handleClickWorks: function(){

    app.sectionAbout.classList.contains('activ') ? app.sectionAbout.classList.remove('activ') : '';
    app.about.classList.contains('header_list-activ') ? app.about.classList.remove('header_list-activ') : '';

    app.sectionResume.classList.contains('activ') ? app.sectionResume.classList.remove('activ') : '';
    app.resume.classList.contains('header_list-activ') ? app.resume.classList.remove('header_list-activ') : '';
    
    app.sectionContact.classList.contains('activ') ? app.sectionContact.classList.remove('activ') : '';
    app.contact.classList.contains('header_list-activ') ? app.contact.classList.remove('header_list-activ') : '';

    app.sectionWorks.classList.add('activ', 'fadeInLeft');
    app.works.classList.add('header_list-activ')
},

typeAnimation: function(){

    const typed = new Typed(".auto-type", {
        strings: ['en formation', 'front-end', 'React', 'Javascript'],
        typeSpeed: 95,
        backSpeed: 95,
        loop: true
    })
},


scrollButton: function(event){

    if(app.wrapper.scrollTop > 500){
        app.scroll.classList.add('scroll_top');
    } 
    else if(app.wrapper.scrollTop < 500){
        app.scroll.classList.remove('scroll_top');
    }
},


titleEffect: function(){
    const letters = "abcdefghijklmnopqrstuvwxyz";

let interval = null;

document.querySelector("h2").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 20);
}
}
}

document.addEventListener('DOMContentLoaded', app.init);