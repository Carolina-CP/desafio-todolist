const inputTareas = document.querySelector('#nueva-tarea');
const btnAgregarTareas = document.querySelector('#btn-tarea');
const listaDeTareas = document.querySelector('#lista-tareas')
const tareas = [];
let id = 1;

btnAgregarTareas.addEventListener('click', () => {
    console.log('botón ok')
    
    const nuevaTarea = {id: id ,nombre: inputTareas.value};
    
    console.log(nuevaTarea);

    tareas.push(nuevaTarea);
    console.log(tareas)
    id ++;

    let html='';
    for (let tarea of tareas) {
        html += `
        <div class="resultado-id">${tarea.id} -
         ${tarea.nombre} -  
         <input type="checkbox" name="seleccionar" id="tarea-ejecutada" onclick="seleccionarTarea()" > -
         <button class='boton-eliminar' type="reset" onclick="eliminarTareas">X</button> -
         </div> 
       

        `}
        

        listaDeTareas.innerHTML= html;

 
  });
  