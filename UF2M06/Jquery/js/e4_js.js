$(document).ready(function(){
    //$("li")[3].innerText = "Fallout 4";
    //o
    $("li:eq(3)").text("Fallout 4");
    //les dues són vàlides, és important distingir que en el primer es fa servir innerText = pq estem tractant elements HTML, en canvi, al segon farem servir el .text perquè ens estarà retornant un element JQuery
  });