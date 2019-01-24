function contruirNouElement(){
    var value = $("li:last").text();
    $("ul").append($("<li>").text(value*2));
}
function borrarFirst(){
    alert("borrarFirst");
}
$(document).ready(function(){
    $("input[name='construir']").on("click",contruirNouElement);
    $("input[name='borrarFirst']").on("click",borrarFirst);
    $("input[name='borraSeleccion']").on("click",contruirNouElement);

});
