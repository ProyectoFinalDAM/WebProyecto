function guardarDatos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    
    var datos = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      mensaje: mensaje
    };

    var datosGuardados = JSON.parse(localStorage.getItem("datosUsuario.json")) || [];
      
    datosGuardados.push(datos);
    
    localStorage.setItem("datosUsuario.json", JSON.stringify(datosGuardados));
    
    document.getElementById("formulario").reset();
    
    alert("Los datos han sido almacenados correctamente.");
}