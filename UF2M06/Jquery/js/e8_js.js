      /*Asignar el evento click:
      *input(listaGeneral) => crearJuegoLista
      *input(listaAnual) => asignarListaYear
      */
      $(function(){
          $("input[name='listaGeneral']").on("click",crearJuegoLista);
          $("input[name='listaAnual']").on("click",asignarListaYear);
      });
      /*
      *Recorre el array asociativo juegos y crea un nuevo elemento de la lista
      * en el div de Listado de juegos general.
      * Asocia a ese elemento de la lista (li) el año del juego usando $.data
      */
      function crearJuegoLista(){
        var juegos = {
          'Days Gone':'2018',
          'Far Cry 5':'2018',
          'Monster Hunter: World':'2018',
          'Assassins Creed Origins':'2017',
          'Horizon Zero Dawn':'2017',
          'Destiny 2':'2017',
          'Dark Souls III':'2016',
          'Final Fantasy XV':'2016'
        };
        //tu código empieza aquí 
        //Bucle
        for (var titol in juegos) {
          //$("<li>").data("any",juegos[titol]).text(titol).appendTo("ul:first");
          var myLi = $("<li>");//element li
          myLi.data("any",juegos[titol]);//afegim el data 
          myLi.text(titol);//afegim el text = titol del joc
          myLi.appendTo("ul:first");//afegim al cos del html en la posicio que volem         
        }
                
      }
      /*
      *Recorre la lista general y consultando la información guardada en data
      * de los elementos crea un nuevo elemento en la lista del año que toque
      */
      function asignarListaYear(){
        alert("asignar lista year");
        var llistaLi = $("li");
        for (var i = 0; i < llistaLi.length; i++) {
          var element = llistaLi[i];
          if(element.data()=="2018"){
            alert("2018");
          }
          if(element.data()=="2017"){
            alert("2017");
          }
          if(element.data()=="2016"){
            alert("2016");
          }

          
        }
      }