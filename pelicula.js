"use strict"

function ocultarImagenes(){
    document.getElementById('alerta1').hidden = true;
    document.getElementById('rubia1').hidden = true;
    document.getElementById('intensamente1').hidden = true;
    document.getElementById('mohana1').hidden = true;
}
function habiltarImagen(id){
    ocultarImagenes();
    console.log('entro habilitar' + id);
   document.getElementById(id).hidden = false;
}


