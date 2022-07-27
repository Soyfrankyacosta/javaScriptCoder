function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

let jugador = 0
let jugadorII = 0
let ganadas = 0
let perdidas = 0

while (ganadas < 3 && perdidas < 3) {
    jugadorII = random(1,3)
    jugador = prompt('Elige: 1 para piedra, 2 para papel, 3 para tijera')
    if (jugador == 1) {
        alert('Elegiste piedra')
    } else if (jugador == 2) {
        alert('Elegiste papel')
    } else if (jugador == 3) {
        alert('Elegiste tijera')
    } else {
        alert('No elejiste nada t(-_-t)')
    }
    if (jugadorII == 1) {
        alert('Jugador II eligió piedra')
    } else if (jugadorII == 2) {
        alert('Jugador II eligió papel')
    } else if (jugadorII == 3) {
        alert('Jugador II eligió tijera')
    }

    if (jugadorII == jugador) {
        alert('Empate :/')
    } else if (jugador == 1 && jugadorII == 3) {
        alert('Ganaste :D')
        ganadas = ganadas +1
    } else if (jugador == 2 && jugadorII == 1) {
        alert('Ganaste :D')
        ganadas = ganadas +1
    } else if (jugador == 3 && jugadorII == 2) {
        alert('Ganaste :D')
        ganadas = ganadas +1
    } else {
        alert('Perdiste :C')
        perdidas = perdidas +1
    }
}

alert('Ganadas ' + ganadas + ' Perdidas ' + perdidas)


