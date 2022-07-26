let emailCorrecto = 'ejemplo@gmail.com';
let emailUsuario = prompt('Ingresa tu email')

while (emailUsuario != emailCorrecto) {
    alert('Correo incorrecto');
    emailUsuario = prompt('Ingresa tu email');
    if (emailUsuario === emailCorrecto) {
        alert('Email correcto. Bienvenido!');
        break
    }
}


