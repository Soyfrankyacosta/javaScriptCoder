class Tarea {
    constructor(nombre, area, dia, estado, id) {
        this.tarea = nombre;
        this.area = area;
        this.dia = dia;
        this.estado = estado;
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }

    estado(estado) {
        this.estado = estado;
    }
}

const tareas =[
    new Tarea('Pasear al perro', 'Casa', 'Lunes', 'Realizada', '1'),
    new Tarea('Limpiar habitación', 'Casa', 'Martes', 'No realizada', '2'),
    new Tarea('Terminar proyecto OtterDev', 'Trabajo', 'Jueves', 'No realizada', '3'),
    new Tarea('Ordenar Habitación', 'Casa', 'Viernes', 'No realizada', '4'),
    new Tarea('Salida con amigos', 'General', 'Sábado', 'Pendiente', '5'),
    new Tarea('Junta Cliente', 'Trabajo', 'Martes', 'Pendiente', '6')
]

console.log(tareas);


//--------------Momento de ingresar nuevas tareas y sumarlas al array--------------//

let continuar = true;

while (continuar) {
    let ingreso = prompt('Ingresar nueva tarea: nombre, area, día, estado, todo esto separado por un (-). Ingresa X para finalizar.');

    if (ingreso.toUpperCase()=='X') {
        continuar = false;
        break;
    }

    let datos = ingreso.split('-');
    const nuevaTarea = new Tarea(datos[0], datos[1], datos[2], datos[3]);

    tareas.push(nuevaTarea);

    nuevaTarea.asignarId(tareas);

    console.log(tareas)
}