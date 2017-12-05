var addForm = function(){
  //Elimina el campo de "añadir lista"
  var form=document.getElementById('form');
  var addList=document.getElementById('add-list');
  form.removeChild(addList);
  // creo el contenedor del formulario

  var content=document.createElement('form');
  form.setAttribute('class','formulario2');
  form.setAttribute('id','form2');
  document.getElementById("formulario").appendChild(form2);
  // creo el contenedeor del formulario
  //a.Entrada (Añade una lista)
  var enter=document.createElement('input');
  enter.setAttribute('type','text');
  enter.setAttribute('placeholder','Añadir una lista');
  enter.setAttribute('class','entrada2');
  enter.setAttribute('id','entrada2');
  document.getElementById("form2").appendChild(enter);

    //b.Botón guardar
    var save=document.createElement('input');
    save.setAttribute('type','button');
    save.setAttribute('value','Guardar');
    save.setAttribute('class','boton2');
    save.setAttribute('id','boton2');
    document.getElementById("form2").appendChild(save);
    //Se guarda el input cuando se oprime el botón guardar
    save.addEventListener('click', function (){
      var contentTitle=document.createElement('a');

      var texto=document.getElementById('entrada2');
      contentTitle.innerText=texto.value;
      var content3=document.createElement('a');// contenido general de la ventana
      document.getElementById('listas').appendChild(contentTitle);

      //Se borran todos los elementos del formulario inicial
      form.removeChild(enter);
      form.removeChild(save);

      //Se crean todos los contenidos que van dentro de la caja 3


      var content3=document.createElement('div');
      content3.setAttribute('background', 'gray');
      content3.setAttribute('width', '50px');
      content3.setAttribute('heigth', '50px');
      var boxes=document.createElement('input');
      boxes.setAttribute('class','boxes');
      var send3=document.createElement('input');
      send3.setAttribute('class','send3');
      send3.setAttribute('id','send3');
      send3.setAttribute('type','button');
      send3.setAttribute('value','agregar');
      var close3=document.createElement('input');
      close3.setAttribute('class','close3');
      close3.setAttribute('type','button');
      close3.setAttribute('value','X');
      //Agregar los elementos al documento
      document.getElementById('listas').appendChild(content3);
      content3.appendChild(contentTitle);
      content3.appendChild(boxes);
      content3.appendChild(send3);
      content3.appendChild(close3);

      //Se crea la lista de tareas
      var addList =function(){

      // Mandando a llamar al boton Agregar para que el user suba lo que ingresa al input
      //Funcion que agrega eventos a la lista

        var newList= document.createElement("li");//Creando nuevo elemento tipo lista
        var textList= document.createTextNode(boxes.value);//Agregando el texto a una variable nueva que sera un nodo elemento del tipo texto
        newList.appendChild(textList);//Nodo texto agregado al nodo elemento <li>
        document.getElementById('list-task').appendChild(newList);//Agregando a la etiqueta <li> a <ol> para q se muestre y agregue en lista etext-newtextNew.value=" ";//limpiando el input para que el usuario vuelva a escribir una nueva tarea
       boxes.value="";}

       document.getElementById('send3').addEventListener('click',addList);

    });

    //c. Botón cerrar
    var close=document.createElement('div');
    close.setAttribute('class','cerrar2');
    close.setAttribute('id','cerrar2');
    document.getElementById("form2").appendChild(close);
}
var addList=document.getElementById('add-list');
addList.addEventListener('click', addForm);
