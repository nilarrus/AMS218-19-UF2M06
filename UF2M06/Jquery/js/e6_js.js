function asignarEvents(){
    $("input[name='creardorEnlace']").on("click",crearEnlace);
    $("input[name='clonadorEnlace']").on("click",clonarEnlace);
}
function crearEnlace(){
    $("#firstP").append($("<a>",
    {
        text:'nuevo enlace',
        href:'http://nuevoenlace.com',
        class:'myClass'
    }));
}
function clonarEnlace(){
    $("span").after($("a:first").clone());
}
$(document).ready(asignarEvents);