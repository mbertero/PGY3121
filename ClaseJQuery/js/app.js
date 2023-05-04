// console.log("Estamos conectados");

$(document).ready(function  () {
    console.log("Estamos conectados");


    //ACCEDIENDO AL DOM

    $('h1').html('INTRODUCCIÓN A JQUERY - CAMBIO SELECTOR');
    $('#IdTitulo').html('INTRODUCCIÓN A  JQUERY - CAMBIO ID');
    $('.text-center').html('INTRODUCCIÓN A  JQUERY - CAMBIO CLASE');


    //Agregar - quitar clase a etiqueta del DOM
    $('#IdGlosa').addClass('display-2');

});