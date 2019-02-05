function contruirNouElement(){
    var value = $("li:last").text();
    $("ul").append($("<li>").text(value*2));
}
function borrarFirst(){
    $("li:first").remove();
}
function borraSeleccion(){
    var valInput = $("input[name='elementToDelete']").val();
    $("li").eq(valInput-1).remove();
}
$(document).ready(function(){
    $("input[name='construir']").on("click",contruirNouElement);
    $("input[name='borrarFirst']").on("click",borrarFirst);
    $("input[name='borraSeleccion']").on("click",borraSeleccion);

});
