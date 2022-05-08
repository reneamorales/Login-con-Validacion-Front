// focus

$("input").hover(function() {
    $(this).css("border-bottom", "2px solid rgba(170, 9, 9, 0.774)");
}, function() {
    $(this).css("border-bottom", "2px solid rgba(226, 144, 21, 0.527)");
});


$('iniciar').hover(function() {
    $(this).css("background", "rgb(245, 161, 35)")
}, function() {
    $(this).css("background", "rgba(245, 161, 35, .7)");
});


$('.reset-password').hover(function() {
    $(this).css("background", "rgb(170, 9, 9)")
}, function() {
    $(this).css("background", "rgba(170, 9, 9, 0.774)");
});

//funtions toogle

$('.toggle').click(function() {
    $('.formulario').animate({
        'height': "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        'opacity': 'toggle',

    }, "slow");
})

$(".mostrar").append('<img class="img-mostrar" src="icons/vista.png">');

// confirmacion de registro

$(".registrar").click(function confirmar() {
    function Persona(username, correo, phone, contrasenia) {
        this.username = username;
        this.correo = correo;
        this.phone = phone;
        this.contrasenia = contrasenia;
    }
    var dato1 = document.getElementById("username").value;
    var dato2 = document.getElementById("email").value;
    var dato3 = document.getElementById("phone").value;
    var dato4 = document.getElementById("contraseniaC").value;

    usuarios = new Persona(dato1, dato2, dato3, dato4);
    /*eliminamos el var para que pase al scope global*/
    console.log("usuarios");
    cargarDatos();
});

var datosusuarios = [];

function cargarDatos() {
    datosusuarios.push(usuarios);
    console.log(datosusuarios);
}

/*img vista iniciar sesion*/

$(".contrasenia-inicio").append('<img class="img-mostrar" src="icons/vista.png">');


/*mostrar ocultar-contraseña iniciar sesion*/

$(".mostrar").click(function() {
    var control = $(this);
    var estatus = control.data('activo');

    var image = control.find('img');
    if (estatus == false) {

        control.data('activo', true);
        $(image).attr('src', 'icons/no-vista.png');
        $("#contrasenaI").attr('type', 'text');
    } else {

        control.data('activo', false);
        $(image).attr('src', 'icons/vista.png');
        $("#contrasenaI").attr('type', 'password');
    }
});

/*img vista crear cuenta*/

$(".mostrar-password").append('<img class="img-mostrar" src="icons/vista.png">');

/*mostrar ocultar-contraseña crear cuenta*/

$(".mostrar-password").click(function() {

    var control = $(this);
    var estatus = control.data('activo');
    var image = control.find('img');
    if (estatus == false) {

        control.data('activo', true);
        $(image).attr('src', 'icons/no-vista.png');
        $("#contraseniaC").attr('type', 'text');
    } else {

        control.data('activo', false);
        $(image).attr('src', '../icons/vista.png');
        $("#contraseniaC").attr('type', 'password');
    }
});

const form = document.getElementsByTagName('form')[1];

const nombre = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const contrasenia1 = document.getElementById('contraseniaC');
const contrasenia2 = document.getElementById('contrasena_ver');

const nameError = document.querySelector('#username + span.error');
const emailError = document.querySelector('#email + span.error');
const phoneError = document.querySelector('#phone + span.error');
const contrasenia1Error = document.querySelector('#contraseniaC + span.error');
const contrasenia2Error = document.querySelector('#contrasena_ver + span.error');

/*verificacion, mostrar, dejar de mostrar errores */

nombre.addEventListener('input', function(event) {
    if (nombre.validity.valid) {

        nameError.innerHTML = '';
        nameError.className = 'error';
    } else {
        showError();
    }

});

email.addEventListener('input', function(event) {

    if (email.validity.valid) {

        emailError.innerHTML = '';
        emailError.className = 'error';
    } else {
        showError();
    }

});

phone.addEventListener('input', function(event) {

    if (phone.validity.valid) {
        phoneError.innerHTML = '';
        phoneError.className = 'error';
    } else {
        showError();
    }

});

contrasenia1.addEventListener('input', function(event) {
    if (contrasenia1.validity.valid) {

        contrasenia1Error.innerHTML = '';
        contrasenia1Error.className = 'error';
    } else {
        showError();
    }

});

contrasenia2.addEventListener('input', function(event) {
    if (contrasenia2.validity.valid) {

        contrasenia2Error.innerHTML = '';
        contrasenia2Error.className = 'error';
    } else {
        showError();
    }

});
/*

/* mensajes de errores*/

$('#email').change(function() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
    }
    if (email.validity.typeMismatch) {
        emailError.textContent = 'El valor introducido debe ser una dirección de correo.';
    }
    if (email.validity.tooShort) {
        emailError.textContent = `El correo debe tener al menos ${ email.minLength } caracteres; ha introducido solo ${ email.value.length }.`;
    }

    emailError.className = 'error activo';

});


$('#phone').change(function() {
    console.log('hizo un cambio en el teléfono');
    if (phone.validity.valueMissing) {
        phoneError.textContent = 'Campo obligatorio.';
    }
    if (isNaN($('#phone').val())) {

        phoneError.textContent = 'En este apartado debe introducir solo números.';
    }
    if (phone.validity.tooShort) {

        phoneError.textContent = `El teléfono debe tener al menos ${ phone.minLength } caracteres; ha introducido solo ${ phone.value.length }.`;
    }
    phoneError.className = 'error activo';

});

$('#username').change(function() {
    console.log('hizo un cambio en el usuario');
    if (nombre.validity.valueMissing) {
        nameError.textContent = 'Debe introducir un nombre de usuario.';

    }
    if (nombre.validity.tooShort) {

        nameError.textContent = `El usuario debe tener al menos ${ nombre.minLength } caracteres; ha introducido solo ${ nombre.value.length }.`;
    }
    nameError.className = 'error activo';

});

$('#contraseniaC').change(function() {
    console.log('hizo un cambio en la contraseña');
    if (contrasenia1.validity.valueMissing) {
        contrasenia1Error.textContent = 'Debe introducir una contraseña.';

    }
    if (contrasenia1.validity.tooShort) {

        contrasenia1Error.textContent = `Para su seguridad la contraseña, debe tener al menos ${ contrasenia1.minLength } caracteres; ha introducido solo ${ contrasenia1.value.length }.`;
    }
    contrasenia1Error.className = 'error activo';

});

$('#contrasena_ver').change(function() {
    console.log('hizo un cambio en contraseña de verificación');
    if (contrasenia2.validity.valueMissing) {
        contrasenia2Error.textContent = 'Debe introducir una contraseña de verificación.';
    }
    if (contrasenia1 != contrasenia2) {

        contrasenia2Error.textContent = `Las contraseñas no coinciden.`;
    }
    contrasenia2Error.className = 'error activo';

});
