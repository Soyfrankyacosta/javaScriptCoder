const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const tareasGuardadas = []
let id = 0

let nombre = prompt('Ingrese su nombre y apellido:');
document.getElementById('nombreUsuario').innerHTML = nombre;



//Incorporando fecha actual
const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es', {weekday:'long', month:'short',day:'numeric'})

//funcion para agregar una tarea nueva

function agregarTareaNueva (tarea,id,eliminada){
    if(eliminada){return}

    const elemento = `  <li id="elemento">
                        <p class="texto-lista">${tarea}</p>
                        <img class="eliminar-tarea" id="${id}" data="eliminada" src="https://icongr.am/feather/trash-2.svg?size=40&color=5065b9" alt="eliminar tarea">
                        </li>
                    `
    lista.insertAdjacentHTML('beforeend', elemento)
}

enviar.addEventListener('click',()=>{
    if (!input.value)
    return alert('¡Por favor, asegurese de ingresar una tarea!')
    const tarea = input.value
    if(tarea) {
        agregarTareaNueva(tarea,id,false)
        tareasGuardadas.push({
            nombre:tarea,
            id:id,
            eliminada:false
        })
    }
    input.value='' //una vez enviada la tarea el valor del input se restablece vacio
    id++
})

//Agregar tarea presionando la tecla enter

document.addEventListener('keyup',function(event){
    if (!input.value)
    return alert('¡Por favor, asegurese de ingresar una tarea!')
    if(event.key=='Enter'){
        const tarea = input.value
        if(tarea){
            agregarTareaNueva(tarea,id,false)
        tareasGuardadas.push({
            nombre:tarea,
            id:id,
            eliminada:false
        })
        }
        input.value=''
        id++
    }
})


lista.addEventListener('click',function(event){
    const elemento = event.target
    const elemntData = elemento.attributes.data.value
    if(elemntData==='eliminada'){
        tareaEliminada(elemento)
    }
})

//funcion para eliminar una tarea

function tareaEliminada(elemento){
    elemento.parentNode.parentNode.removeChild(elemento.parentNode)
    tareasGuardadas[elemento.id].eliminada = true
}