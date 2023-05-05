// console.log("Estamos conectados");

$(document).ready(function  () {
    console.log("Estamos conectados");


    //ACCEDIENDO AL DOM

    $('h1').html('INTRODUCCIÓN A JQUERY - CAMBIO SELECTOR');
    $('#IdTitulo').html('INTRODUCCIÓN A  JQUERY - CAMBIO ID');
    $('.text-center').html('INTRODUCCIÓN A  JQUERY - CAMBIO CLASE');


    //Agregar - quitar clase a etiqueta del DOM
    $('#IdGlosa').addClass('display-2');
    $('#IdGlosa').removeClass('display-6');

    //Agregar , quitar etiquetas del DOM [append, prepend]

    $('#articulos').append('<p>Artículo nuevo agregado al final del contenedor');
    $('#articulos').prepend('<p>Artículo nuevo agregado al inicio del contenedor');
     $('#parr3').remove();


     //Modificar estilos de etiquetas del DOM [css]
     $('#parr1').css('color', 'blue');
     $('#parr2').css({color:  'red', background: 'green'});
});