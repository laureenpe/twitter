function agregar() {
    // recuperar texto ingresado en text area y limpio tarea
    var tareas = document.getElementById("tarea").value;
    document.getElementById("tarea").value = "";
    // donde estaran las tareas que recupere de text area
    var cont = document.getElementById("contenedor");
    // crear nuevos nodos elementos en el html
    var nuevasTareas = document.createElement("div");
    var textoNuevaTarea = document.createTextNode("tareas");
    var elementoContenedor = document.createElement("span");
    // valida que el textarea no este vacía al presionar el boton aceptar -extra
    if (tareas == null || tareas.length == 0) {
        alert("¡Error! Debe ingresar tarea");
        return false;
    }
    // asignamos los padres a los elementos creados
    elementoContenedor.appendChild(textoNuevaTarea);
    nuevasTareas.appendChild(elementoContenedor);
    cont.appendChild(nuevasTareas);
    // crear checkbox e iconos y darles atributos y clases
    var chck = document.createElement("input");
    chck.type = "checkbox";
    chck.setAttribute("class", "check");
    var basura = document.createElement("span");
    basura.classList.add("fa", "fa-trash-o");
    var cora = document.createElement("span");
    cora.classList.add("fa", "fa-heart");
    // asignamos padres a nodos creados
    nuevasTareas.appendChild(chck);
    nuevasTareas.appendChild(basura);
    nuevasTareas.appendChild(cora);
    // evento al hacer clic para que elimine o agregue la clase "tachado " al elemento contenedor
    chck.addEventListener("click", function() {
        elementoContenedor.classList.toggle("tachado");
        console.log("tachar/ seleccionar");
    });
    // remover el icono basurero al hacerle click sobre el 
    basura.addEventListener("click", function() {
        cont.removeChild(nuevasTareas);
        console.log("borra tarea");
    });
    // creacion funcion  click para el corazon y asignar la clase red de css
    cora.addEventListener("click", function() {
        cora.classList.toggle("red");
        console.log("activa corazón");
    });
}