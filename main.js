var nav = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function(e){
    //console.log(window.scrollY);
    if(window.scrollY > 5){
        nav.classList.remove('transp-nav');
        nav.classList.add('dark-nav');
    }
    else{
        nav.classList.add('transp-nav');
        nav.classList.remove('dark-nav');
    }
})