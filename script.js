const tareas = []

function seleccionarOpcion(){
    let opciones = "1. Agregar una tarea\n2. Eliminar tarea\n3. Mostrar tareas"
    let seleccion
        do {
            seleccion = Number(prompt("¡Hola! Bienvenido a su Lista de Tareas\n¿Que desea realizar?\n" + opciones))
            switch(seleccion){
                case 1:
                    agregarTarea()
                    console.log("Selecciono la 1")
                break;
                case 2:
                    eliminarTarea()
                    console.log("Selecciono la 2")
                break;
                case 3:
                    mostrarTareas()
                    console.log("Selecciono la 3")
                break;
                case 4:
                    alert("Adiós")
                    console.log("Selecciono la 4")
                break;
                default:
                    alert("Opcion invalida")
                    console.log("Opción no válida");
                    }
                } while(true) 
}


function mostrarTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas")
    } else {
        let listaTareas = "Tareas pendientes:\n"
        for (let i = 0; i < tareas.length; i++){
            listaTareas += (i + 1) + "." + tareas[i] + "\n"
        }
        alert(listaTareas)
    }
}

function agregarTarea(){
    let nuevaTarea = prompt("¿Que tarea desea agregar?")
    if(nuevaTarea){
        tareas.push(nuevaTarea)
        alert("Tarea agregada")
    }
    mostrarTareas();
    let deseaAgregarMas = confirm("¿Quiere agregar mas tareas?")
    if(deseaAgregarMas){
        agregarTarea()
    }
}

function eliminarTarea(){
    mostrarTareas()
    let tareaAEliminar = Number(prompt("¿Que tarea desea eliminar?"))
    if(tareaAEliminar >= 1 && tareaAEliminar <= tareas.length){
        tareas.splice(tareaAEliminar - 1, 1)
        alert("Tarea eliminada")
    }else{
        alert("No valido. Recuerde insertar un numero.")
    }
    mostrarTareas()
}

function editarTarea(){
    mostrarTareas()
    let tareaEditar = Number(prompt("¿Que tarea desea editar?"))
    if (tareaEditar >= 1 && tareaEditar <= tareas.length){
        let nuevo = prompt("Introduzca el nuevo texto:")
        if (nuevo){
            tareas[tareaEditar - 1] =  nuevo
            alert("Editado exitosamente")
        } else {
            alert("Error. No ha introducido ningun texto")
        }
} else {
    alert("Error. Introduzca un numero")
}
mostrarTareas()
}


seleccionarOpcion();
