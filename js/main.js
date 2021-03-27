function load() {
    var button = document.querySelector('.button-menu');
    button.addEventListener("click",abre);

    var button_close = document.querySelector('.button-close');
    button_close.addEventListener("click",fecha);
}

function abre(){
    document.querySelector('.button-menu').style.display='none';
    document.querySelector('.button-close').style.display='block';
    document.querySelector('nav').style.display='block';
    document.querySelector('.slide').style.display='none';
    document.querySelector('.news').style.display='none';
    document.querySelector('.newsletter').style.display='none';
    document.querySelector('footer').style.display='none';
    
    
}

function fecha(){
    document.querySelector('nav').style.display='none';
    document.querySelector('.slide').style.display='grid';
    document.querySelector('.news').style.display='grid';
    document.querySelector('.newsletter').style.display='';
    document.querySelector('footer').style.display='';
    document.querySelector('.button-menu').style.display='';
    document.querySelector('.button-close').style.display='none';
}