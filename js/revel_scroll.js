//cahregment de l'api scroll

function revealFunction(){

    window.sr = ScrollReveal({duration: 1000, distance:'100px', easing:'ease-in-out'});

    
    

    ScrollReveal({ distance: '100px' });
    sr.reveal('.reveal-top', { origin: 'top', rest:true });
    sr.reveal('.reveal-right', { origin: 'right' , rest:true});
    sr.reveal('.reveal-left', { origin: 'left' , rest:true});
    sr.reveal('.reveal-bottom', { origin: 'bottom' , rest:true});
}


window.addEventListener('load', ()=> {
    revealFunction();
}) 

