//primer ejercicio codigo//
let numero = prompt("Ingrese un número para el primer ejercicio");

for(let i = 1; i <= numero; i++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }

}
//segundo ejercicio codido//
let n = prompt("Ingrese un número para el segundo ejercicio");

let a = 0;
let b = 1;

for(let i = 1; i <= n; i++){
    console.log(a);

    let siguiente = a + b;
    a = b;
    b = siguiente;
}
//tercer ejercicio//
function esPrimo(numero){

    if(numero <= 1){
        return false;
    }

    for(let i = 2; i < numero; i++){

        if(numero % i == 0){
            return false;
        }

    }

    return true;
}

let num = prompt("Ingrese un número para el tercer ejercicio");

if(esPrimo(num)){
    console.log("El número es primo");
}
else{
    console.log("El número no es primo");
}
// cuarrto ejercicio//
let numero1 = prompt("Ingrese un numero para el cuarto ejercicio");

for(let i = 1; i <= 10; i++){
    console.log(numero1 + " x " + i + " = " + (numero1 * i));
}
//quinto ejercicio//
function contarVocales(texto){
    let contador = 0;
    for(let i = 0; i < texto.length; i++){
        if(
            texto[i] == "a" ||
            texto[i] == "e" ||
            texto[i] == "i" ||
            texto[i] == "o" ||
            texto[i] == "u"
        ){
            contador++;
        }
    }
    console.log("Vocales: " + contador);
}
let palabra = prompt("Ingrese un texto para el quinto ejercicio");
contarVocales(palabra);

//sexto ejercicio//
let numeros = [4, 8, 2, 15, 7];
function mayor(arreglo){
    let numMayor = arreglo[0];
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] > numMayor){
            numMayor = arreglo[i];
       }
    }
    console.log("El número mayor es: " + numMayor);
}
mayor(numeros);
//septimo ejercicio//
function sumar(a, b){
    return a + b;
}
function restar(a, b){
    return a - b;
}
function multiplicar(a, b){
    return a * b;
}
function dividir(a, b){
    return a / b;
}
let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));
let operacion = prompt("Ingrese la operación: sumar, restar, multiplicar o dividir");

if(operacion == "sumar"){
    console.log(sumar(num1, num2));
}
else if(operacion == "restar"){
    console.log(restar(num1, num2));
}
else if(operacion == "multiplicar"){
    console.log(multiplicar(num1, num2));
}
else if(operacion == "dividir"){
    console.log(dividir(num1, num2));
}
else{
    console.log("Operación no válida");
}
