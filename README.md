# **Trello** <h1>

En este reto, replicaremos el tablero de **Trello**, para ello vamos a seguir un flujo de versiones que te servirán como una guía.

Puedes usar tu propio estilo o seguir la del [sitio original](https://trello.com/).

![Trello (Interactivo)](https://media.giphy.com/media/l1J9Ai0amYnS22ChW/giphy.gif)

## Flujo de trabajo<h2>

> Recuerda que la réplica debe contener las siguientes versiones

**Versión 1**
* Se mostrará el texto **"Añadir una lista"**.
* Al hacer click se debe ocultar el texto y mostrar un formulario.
* El formulario está conformado por un input y un botón para que pueda añadir tareas a tu lista.

Para llevar a cabo las anteriores tareas se trabajó en js, realizando:
 1. Crear un _content_ donde el usuario pueda añadir un texto.
 2. Asignarle clases
 3. Para guardar el formulario crear un _input_ para el botón de guardar.

**Versión 2**
* Al dar click en el botón de "Guardar", se mostrará un nuevo cuadro donde estará el nombre de la lista agregada.
* Mostrar un texto de "Añadir una tarea" dentro de la lista.

Aquí realizamos lo siguiente:
 1. Crear un evento donde  el texto previamente dado se quede como "Título".
 2. Crear un _input_ para que la nueva lista se le pueda "Añadir una tarea".

**Versión 3**
* Al dar click en "Añadir una tarea", deberá mostrar un formulario con un textarea y un botón que diga "Añadir".

En esta versión la logramos haciendo:
 1. Crear un _content_ que tenga el botón de añadir, asignarle clases a través de _setAttribute_  

**Versión 4**
* Poner focus al input al dar click en "Agregar nueva tarea".
* Al dar click en el botón de "Añadir", deberá aparecer el texto de la tarea debajo del título de la lista.

Para realizar lo de la versión 4:
 1. Utilizamos _removeChild_ para quitar el formulario anterior y hacer que el formulario de la nueva tarea quede debajo del título.

**Versión 5**
* Mostrar el formulario nuevamente debajo de la última tarea añadida.

En esta versión:
 1.  Se creo un _appendChild_ para agregar en tipo de listas las nuevas tareas que se dieron por el usuario.

**Versión 6 (extra)**
* Poder agregar múltiples listas con tarjetas. Para esto, el formulario de "Añadir una lista" debe aparecer a la derecha de la lista anteriormente creada.
