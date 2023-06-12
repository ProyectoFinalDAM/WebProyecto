function validar(){
    var nombre, apellidos, email, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    email = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || apellidos === "" || email === "" || direccion === "" || telefono === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length>30) {
        alert("El nombre es muy largo");
        return false;
    }
    else if (apellidos.length>60) {
        alert("Los apellidos muy largo");
        return false;
    }
    else if (email.length>100) {
        alert("El email es muy largo");
        return false;
    }
    else if (!expresion.test(email)){
        alert("El email no es válido");
        return false;
    }
    else if (telefono.length>9) {
        alert("El telefono es muy largo");
        return false;
    }
    else if (isNaN(telefono)) {
        alert("El telefono ingresado no es un número");
        return false;
    }
}