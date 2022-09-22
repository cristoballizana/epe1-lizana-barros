

document.getElementById("boton-subir").addEventListener('click', scrollUp);

var botonSubir = document.getElementById("boton-subir");

function scrollUp(){

var scrollinfo = document.documentElement.scrollTop;

    if (scrollinfo > 0) {

    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, scrollinfo - (scrollinfo / 1));
  
    }
}
