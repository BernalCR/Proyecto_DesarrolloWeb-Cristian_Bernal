const pass = confirm("Bienvenido a NutriAmigo, muy pronto tendremos promociones increibles para ti, deseas recibir notificaciones?");
let userName = "";
let userEmail = "";

if(pass){
    userName = prompt("Ingrese su nombre:");
    while(userName === "" || userName === null){
        userName = prompt("Tiene que ingresar un campo! \nIngrese su nombre:");
    }

    userEmail = prompt("ingrese su correo electronico:");
    while(userEmail === "" || userEmail === null){
        userEmail = prompt("Tiene que ingresar un campo! \nIngrese su Email:");
    }

    alert("Listo " + userName + " tu correo a sido agregado con exito, muy pronto recibiras descuentos increibles.")
}