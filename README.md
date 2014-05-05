# Intervention

Cambia la pagina de inicio de google para presentarla en LOLCAT

## Contenido

* [Extensiones](#addons)
* [Tecnologia](#tech)
  - [Firefox SDK](#install)
  - [Herramientas de desarrollo](#devtools)
  - [Jquery 101](#jquery)
  - [Librerias](#libs)

-----

## <a name="addons"></a>Extensiones

* [Greg Leuch, Shaved Bieber](http://fffff.at/shaved-bieber/)
* [Greg Leuch, Kardashian blocker](http://fffff.at/dash-out-kardashian-blocker/)
* [Greg Leuch, China Blocker](http://fffff.at/chinablocker/)
* [Gred Leuch, Tinted Sheen](http://fffff.at/tinted-sheen/)
* [Theo Watson, Mittens Romney](http://fffff.at/mittens-romney-extension/)
* [Benjamin Grosser, Facebook Demetricator](http://bengrosser.com/projects/facebook-demetricator/)
* [Addie Wagenknecht, Girls Vs Git](https://github.com/wheresaddie/girlsvsgit)
* [Erick Butler, Firesheep](http://codebutler.com/firesheep/)
* [Jaime Wilkinson, Google Alarm](http://jamiedubs.com/googlealarm/)
* [Jens Natzschka, HappyTube](http://happytube.org/)
* [Society of Algoritm, FaceLeaks](http://www.faceleaks.info/)
* [Brian House](http://brianhouse.net/works/tanglr/)


## <a name="tech"></a> Tech

### <a name="install"></a>Guia rapida para el desarrollo de Addons para Firefox:

1. Instalar el [Firefox Add-on SKD](https://addons.mozilla.org/en-US/developers/docs/sdk/latest/dev-guide/tutorials/installation.html)
2. Desde el terminal (CMD en Window$) ejecutar [cfx](https://addons.mozilla.org/en-US/developers/docs/sdk/latest/dev-guide/cfx-tool.html) para verificar la instalacion
3. ``cfx init`` crea el espacio de trabajo para el addon
4. ``cfx run`` ejecuta el codigo en Firefox
5. ``cfx xpi`` comprime la extension en XPI
6. 

### <a name="dev-tools"></a>Herramientas de desarrollo

``Firefox > Tools > web developer``

#### Tool Box
![](https://mdn.mozillademos.org/files/5337/devtools-window-attached.png)
*Conjunto de herramientas para inspeccionar la ventana activa*

incluye:

* Web Console: Imprime y ejecuta mensajes de JS
* JavaScript Debugger: Inspecciona codigo de JS
* Page Inspector: Inspecciona la estructura HTML 
* Style Editor: Inspecciona y revisa CSS
* Network Monitor: Muestra peticiones a servidores

#### Scratch Pad
![](https://mdn.mozillademos.org/files/5983/scratchpad.png)


*Donde escribir y ejecutar codigo de JS*

#### Browser Console
![](https://mdn.mozillademos.org/files/5847/browser-console-window.png)
*Imprime mensajes de error y debug de todo el navegador incluyendo los tabs en ejecucion, addons y demas componentes*


### <a name="jquery"></a>Jquery 101

#### Selectores
* ``$("*")`` > Todos los elementos
* ``$(".class")`` > clase ej: ``$(".active")``
* ``$("#id")`` > id ej: ``$("#header")``
* ``$("elemento")`` > tipo de elemento ej: ``$("h1")``

[+ selectores >>](http://api.jquery.com/category/selectors/)

#### CSS
* ``.addClass("xxxx")`` > agrega la clase especificada al elemento seleccionado
* ``.removeClass("yyyy")`` > elimina la clase especificada al elemento seleccionado
* ``.css()`` > obtiene o modifica la propiedad CSS del elemento especificado
  Ej:

  ``$("h1").css({"color":"#FFF"})`` > cambia el color de los H1
  ``$("h1").css("color")`` > obtiene el color de los H1

[+ CSS >>](http://api.jquery.com/category/css/)


#### Manipulacion del DOM
* ``.html()`` > obtiene o modifica el HTML del elemento seleccionado
  Ej:
  ``$("body").html() `` > obtiene el contenido
  ``$("body").html("<h1>Hello World</h1>")`` > modifica el contenido del body
* ``.text()`` > similar al ``.html()`` pero para contenido textual
* ``.remove()`` > elimina el elemento seleccionado

[+ Manipulacion >>](http://api.jquery.com/category/manipulation/)


### <a name="libs"></a>Librerias utiles
* [JQuery](http://jquery.com/)
* [Underscore](http://documentcloud.github.io/underscore/)
* [Underscore.string -manipulacion de texto-](http://epeli.github.io/underscore.string/)
