const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
let tareasGuardadas 
let id 


window.addEventListener('load', ()=>{
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperaturaValor')
    let temperaturaDescripcion = document.getElementById('temperaturaDescripcion')

    let ubicacion = document.getElementById('ubicacionActual') 
    let iconoAnimado = document.getElementById('ubicacionIcono')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            //ubicación por ciudad tiempo actual
            const url = `https://api.openweathermap.org/data/2.5/weather?q=BsAs&lang=es&units=metric&appid=6fb3a49675c7e92d3bc3d21cb048953a`
            
            fetch(url)
                .then(response => { return response.json() })
                .then(data => {
                    console.log(data.main.temp)
                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} °C`
                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()
                    ubicacion.textContent = data.name
                    //para iconos dinámicos
                    console.log(data.weather[0].main)
                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado.src = 'animated/thunder.svg'
                            console.log('TORMENTA');
                            break;
                        case 'Drizzle':
                            iconoAnimado.src = 'animated/rainy-2.svg'
                            console.log('LLOVIZNA');
                            break;
                        case 'Rain':
                            iconoAnimado.src = 'animated/rainy-7.svg'
                            console.log('LLUVIA');
                            break;
                        case 'Snow':
                            iconoAnimado.src = 'animated/snowy-6.svg'
                            console.log('NIEVE');
                            break;
                        case 'Clear':
                            iconoAnimado.src = 'animated/day.svg'
                            console.log('LIMPIO');
                            break;
                        case 'Atmosphere':
                            iconoAnimado.src = 'animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;
                        case 'Clouds':
                            iconoAnimado.src = 'animated/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;
                        default:
                            iconoAnimado.src = 'animated/cloudy-day-1.svg'
                            console.log('por defecto');
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }
})



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
    return Swal.fire({
        icon: 'info',
        title: 'Por favor',
        text: 'Asegurese de ingresar una tarea!',
        })
    const tarea = input.value
    if(tarea) {
        agregarTareaNueva(tarea,id,false)
        tareasGuardadas.push({
            nombre:tarea,
            id:id,
            eliminada:false
        })
    }
    localStorage.setItem('LISTA', JSON.stringify(tareasGuardadas))
    input.value='' //una vez enviada la tarea el valor del input se restablece vacio
    id++
})

//Agregar tarea presionando la tecla enter

document.addEventListener('keyup',function(event){
    if (!input.value)
    return Swal.fire({
        icon: 'info',
        title: 'Por favor',
        text: 'Asegurese de ingresar una tarea!',
        })
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
        localStorage.setItem('LISTA', JSON.stringify(tareasGuardadas))
        input.value=''
        id++
    }
})

//Evento  eliminar tarea 
lista.addEventListener('click',function(event){
    const elemento = event.target
    const elemntData = elemento.attributes.data.value
    if(elemntData==='eliminada'){
        tareaEliminada(elemento)
    }
    localStorage.setItem('LISTA', JSON.stringify(tareasGuardadas))
})

//funcion para eliminar una tarea

function tareaEliminada(elemento){
    Swal.fire({
        icon: 'success',
        title: 'Eliminada',
        text: 'Tu tarea fue eliminada',
        })
    elemento.parentNode.parentNode.removeChild(elemento.parentNode)
    tareasGuardadas[elemento.id].eliminada = true
}

//localStorage 

function listaGuardada(datos){
    datos.forEach(function(i){
        agregarTareaNueva(i.nombre,i.id,i.eliminada)
    })
}


let elementosGuardados = localStorage.getItem('LISTA')
if(elementosGuardados){
    tareasGuardadas=JSON.parse(elementosGuardados)
    id = tareasGuardadas.length
    listaGuardada(tareasGuardadas)
} else{
    //restablece los datos del array
    tareasGuardadas = []
    id= 0
}


