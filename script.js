// entrega 1
const nombre = "Camila"; //String
const apellido = "Heredia"; //String
var edad = 24; //Number
var celular = "1127002851"; //String
var direccion = "Murguiondo 900"; //String
var localidad = "CABA"; //String
var estadoCivil = "soltera"; //String
var tieneHijos = false; //Boolean
var amigos = ["Sofía", "Lucas", "Jimena", "Santiago"]; //Array
var madre = {
    nombre: "Blanca",
    edad: 54,
    correo: "blancav@gmail.com",
    telefono: 1185978625,
    hobbies: ["cantar", "pescar", "correr"],
} // Object


// entrega 2: tomando decisiones

let mascotas = "perro";

switch (mascotas) {
    case "":
        console.log("No tengo mascotas");
        break;
    case "perro":
        console.log("Tengo perro");
        break;
    case "gato":
        console.log("Tengo gato");
        break;
    default:
        console.log(`Tengo ${mascotas}`);    
}