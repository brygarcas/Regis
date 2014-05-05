//funcion que ejecuta los cambios en la pagina
self.port.on("replacePage", function(msg){

  console.log("-------------- FF addon");

  $(document).keypress(function (e){
    var code = e.which;
    var character = String.fromCharCode(code);
    
    console.info("presionaron: "+ code + " == carater " + character);
  }); 
});