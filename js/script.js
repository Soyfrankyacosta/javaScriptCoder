const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')

//Incorporando fecha actual
const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es', {weekday:'long', month:'short',day:'numeric'})

//funcion para agregar una tarea nueva

function agregarTareaNueva (tarea){
    const elemento = `  <li id="elemento">
                        <img class="circulo-lista" id="0" data="realizada" src="https://icongr.am/feather/circle.svg?size=40&color=5065b9" alt="circulo tarea terminada">
                        <p class="texto-lista">${tarea}</p>
                        <img class="eliminar-tarea" id="0" data="eliminada" src="https://icongr.am/feather/trash-2.svg?size=40&color=5065b9" alt="eliminar tarea">
                        </li>
                    `
    lista.insertAdjacentHTML('beforeend', elemento)
}

enviar.addEventListener('click',()=>{
    const tarea = input.value
    if(tarea) {
        agregarTareaNueva(tarea)
    }
    input.value=''
})