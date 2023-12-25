let sections=document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');


window.onscroll= () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset= sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >=offset && top < offset +height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+id+']').classList.add('active');
            });

        };
    });
};
scrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});
scrollReveal().reveal('.home-content,.heading',{ origin:'top'});
scrollReveal().reveal('.home-img,.whats_app-container,.git_hub-box,.contact form',{ origin:'top'});

cont type = new Typed('.multiple-text',{
    strings: ['Frontend Developer','YouTuber','Blogger'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});