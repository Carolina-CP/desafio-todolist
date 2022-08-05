const inputTareas = document.querySelector('#nueva-tarea');
const btnAgregarTareas = document.querySelector('#btn-tarea');
const listaDeTareas = document.querySelector('#lista-tareas');
const contadorTareas = document.querySelector('#resultado-total');
const tareas = [];
let id = 1;
let ejecutada = false;

btnAgregarTareas.addEventListener('click', () => {
  console.log('botón ok')

  const nuevaTarea = { id: id, nombre: inputTareas.value, ejecutada: ejecutada };

  console.log(nuevaTarea);

  tareas.push(nuevaTarea);
  contadorTareas.innerHTML = tareas.length;
  id++;

  let html = '';
  for (let tarea of tareas) {
    html += `
        <div class="resultado-id">${tarea.id} -
         ${tarea.nombre} -  
    
         <input type="checkbox" id="tarea-ejecutada" onclick="seleccionarTarea(${tarea.ejecutada})">    
         <button class='boton-eliminar' type="reset" onclick="eliminarTarea(${tarea.id})">X</button> 
         </div> 
        `}

  listaDeTareas.innerHTML = html;
});




function seleccionarTarea(ejecutada) {
  console.log('seleccionada')
  /*let index = tareas.findIndex((t => t.ejecutada === true))
  tareas.map(index,1);
  console.log(ejecutada.value)*/
  if (ejecutada.checked === true) {
    console.log('Tarea Ejecutada');
  }
  console.log(tareas)
  return seleccionarTarea

}


console.log(seleccionarTarea.value)




let html = '';
for (let tarea of tareas) {
  html += `
        <div class="resultado-id">${tarea.id} -
         ${tarea.nombre} -  
         <input type="checkbox" name="seleccionar" id="tarea-ejecutada" onclick="seleccionarTarea(${tarea.id})" > 
         <button class='boton-eliminar' type="reset" onclick="eliminarTarea(${tarea.id})">X</button> 
         </div> 
        `}

listaDeTareas.innerHTML = html;



function eliminarTarea(id) {
  console.log('eliminar')
  console.log(tareas)
  let index = tareas.findIndex((t => t.id === id))
  tareas.splice(index, 1);
  console.log(tareas);
  contadorTareas.innerHTML = tareas.length;

  let html = '';
  for (let tarea of tareas) {
    html += `
        <div class="resultado-id">${tarea.id} -
         ${tarea.nombre} -  
         <input type="checkbox" name="seleccionar" id="tarea-ejecutada" onclick="seleccionarTarea(${tarea.id})" > 
         <button class='boton-eliminar' type="reset" onclick="eliminarTarea(${tarea.id})">X</button> 
         </div> 
        `}

  listaDeTareas.innerHTML = html;
}


