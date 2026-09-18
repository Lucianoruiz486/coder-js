// ==========================================
// Pre-Entrega 1: Mi Primer Script Interactivo
// Simulador: Calculadora de Edad
// ==========================================

// 1. SOLICITAR DATOS AL USUARIO
// Pedimos 3 datos distintos con prompt (siempre devuelven texto/string)
const nombre = prompt("¿Cuál es tu nombre?");
const ciudad = prompt("¿En qué ciudad vivís?");
let anioNacimiento = prompt("¿En qué año naciste?");

// 2. PROCESAR INFORMACIÓN

// Conversión de tipo: el prompt devuelve un string, lo pasamos a number
// para poder usarlo en una operación matemática
anioNacimiento = parseInt(anioNacimiento);

// Año actual (constante porque no cambia durante la ejecución del script)
const anioActual = 2026;

// Operación aritmética simple: calculamos la edad
const edad = anioActual - anioNacimiento;

// Transformación de texto: concatenamos variables con strings
const mensajeBienvenida = "Hola " + nombre + ", vemos que sos de " + ciudad + ".";
const mensajeEdad = nombre + ", este año vas a cumplir (o ya cumpliste) " + edad + " años.";

// 3. COMUNICAR RESULTADOS
console.log(mensajeBienvenida);
console.log(mensajeEdad);

alert(mensajeBienvenida);
alert(mensajeEdad);
