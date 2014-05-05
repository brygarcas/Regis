//Importa el API para modificiacion de paginas
var pageMod = require("sdk/page-mod");
//Importa el API self
var self = require("sdk/self");


pageMod.PageMod({
    include: "*.registraduria.gov.co",
    contentScriptFile: [self.data.url("jquery-1.10.2.min.js"), 
                        self.data.url("registro.js")],
    onAttach: function(worker){
                worker.port.emit("replacePage", "bang");    
            }
});

