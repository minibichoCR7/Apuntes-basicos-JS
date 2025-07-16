//declarar variables
let var1="1";
//los string se pueden declarar tanto con "" como con ''
let var2='2';
//para imprimir por pantalla de usa
console.log(var1);
//para cambiar el valor de una variable se hace 
var1="ejemplo cambio";
console.log(var1);
//se pueden crear variabler vacias pero estas no se pueden imprimir
let var3;
console.log(var3);//indefinido
//se puede asignar un valor a una variable aunque haya sido creada vacia
var3="3";
console.log(var3);//definido
//puedes asignarle un valor a una varible con otra variable
let var4=var1;
console.log(var4);//ejemplo cambio
//ejemplo freecodecamp
let profession = "teacher";
let age;
console.log(age);
console.log(profession);
//guardar numeros no hace falta comillas
let num1 = 1;
//puedes imprimir sumando numeros a variables
console.log(num1 + 1);
//tambien lo puedes hacer con otro tipo de operadores
console.log(num1 - 1);
console.log(num1 / 1);
console.log(num1 * 1);
//declarar array
let array1 = [];
// los arrays pueden tener varios datos juntos
let array2 = ["hector", "mario", "markitos"];
// puedes imprimirlos todos o por posiciones se empieza desde 0
console.log(array2);
console.log(array2[0]);
// puedes cambiar especificamente el valor de una posicion
array2[2]=23;
console.log(array2);
//tambien esta el .length que te dice el numero de elementos que tiene un array o se pyuede usar para recorrerlo 
console.log(array2.length);//cantidad de elementos
//acceder al ultimo elemento de un array
console.log(array2[array2.length - 1]);//23
//para añadir un elemento al final de un array se usa el metodo .push()
array2.push("juan");
console.log(array2);
//para eliminar el ultimo elemento de un array se usa el metodo .pop(), tambien puedes asignar el valor eliminado a una variable
let eliminado = array2.pop();
console.log(array2);
console.log(eliminado);//juan
//un const no puede ser inicializado sin un valor
//const const1;
//si o si tiene que tener un valor
const const2 = "constante2";
//bucles
//for
/*for("iterator"; "condition"; "iteration"){

}*/
//normalmente para el iterator de usa la variable i
/*for(let i = 0; "condition"; "iteration"){

}*/
//rl condition suele ser el controlador de la iteracion es decir para si es false y continua cuando sea true
/*for(let i = 0; i<8; "iteration"){

}*/
//el iteration suele ser i++ que es lo mismo que i = i + 1 y es para que el bucle no sea infinito y se detenga en algun momento controlando tu el bucle
for(let i = 0; i<8; i++){
    console.log(i);
}
//el bucle for of 
for(let elemento of array2){
    console.log(elemento);//imprime todos los elementos del array
}
//el valor \n es un salto de linea
let texto = "hola\nmundo";  
console.log(texto);
//.repeat() es un metodo que repite el texto tantas veces como le digas
console.log(texto.repeat(3));
//ejercicio piramide
let piramide = "";
let altPiramide = 5; //altura de la piramide
for(let i = 0; i <= altPiramide; i++){
    piramide = piramide + "*".repeat(i) + "\n"
    //console.log(piramide);
}
console.log(piramide);
//funciones
// una funcion es un bloque de codigo que se puede reutilizar
// se declara con la palabra reservada function
function saludar(nombre){
    // puedes pasarle parametros a la funcion
    console.log("Hola " + nombre);
}
//se llama a la funcion con su nombre y los parametros que necesite
saludar("Hector");
//tambien pueden haber funciones que lo que devuelvan sea un return
function sumar(num1, num2){
    return num1 + num2;
}
console.log(sumar(2,3));
//si asignas una varoable fuera de la funcion esta es global y se puede usar en cualquier parte del codigo
//en cambio si la declaras dentro de la funcion es local y solo se puede usar dentro de esa funcion
//el return tambien cerrar la funcion y no se puede seguir ejecutando el codigo de esa funcion
function funcionLocal(){
    let variableLocal = "local1";
    console.log(variableLocal);
    return "local";
    console.log(variableLocal);
}
console.log(funcionLocal());

//piramide tocha
function piramideTocha(altura) {
    let piramide = "";
    for (let i = 0; i < altura; i++) {
        // Añadir espacios para centrar la pirámide
        piramide += " ".repeat(altura - i - 1);
        // Añadir asteriscos
        piramide += "*".repeat(2 * i + 1);
        // Salto de línea
        piramide += "\n";
    }
    return piramide;
}
console.log(piramideTocha(5));
let condicion = true;
let condicion2 = false;
//existe el condicional if
if(condicion){
    //codigo que se ejecuta
}

//tambien esta el else if
if(condicion){
    //codigo que se ejecuta si la condicion es verdadera
}else if(condicion2){
    //codigo que se ejecuta si la condicion2 es verdadera
} else {
    //codigo que se ejecuta si ninguna de las condiciones anteriores es verdadera       
}
//hay mas tipos de bucles como por ejemplo while
//el bucle while se ejecuta mientras la condicion sea verdadera
//== mira si son iguales
//=== mira si son iguales y del mismo tipo
let contador=0;
let conttrolador=5;
let bucle=true;
while(bucle){
    console.log("contador: " + contador);
    contador++;
    if(contador==conttrolador){
        bucle=false;
    }
}
/*!= mira si son diferentes*/
//.unshift() añade un elemento al principio del array
//.shift() elimina el primer elemento del array y lo devuelve

//ejercicio piramide de freecodecamp

const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);

//ejercicio ejemplo para calcular medias de notas de alumnos 
function getAverage(scores) {
    let notastot=0;
    for(let i=0; i<scores.length; i++){
    notastot=notastot + scores[i];
    }
    let media=notastot/scores.length;
    return media;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

//ejemplo notas que se traspasan a letras 
function getGrade(score) {
if(score===100){
    return 	"A++";
}else if(score>=90&&score<=99){
    return 	"A";
}else if(score>=80&&score<=89){
    return 	"B";    
}else if(score>=70&&score<=79){
    return 	"C";    
}else if(score>=60&&score<=69){
    return 	"D";    
}else{
    return 	"F";    
}
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

//ejemplo true o false depende si has aprobado o no
function hasPassingGrade(score) {
if(getGrade(score)=="F"){
    return false
}else{
    return true
}
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
//ejemplo mensaje para alumno segun si a aprobado o no 
function studentMsg(totalScores, studentScore) {
if(getGrade(studentScore)=="F"){
    return "Class average: "+ getAverage(totalScores) +  ". Your grade: " +    getGrade(studentScore)  + ". You failed the course."
}else{
    return "Class average: "+ getAverage(totalScores) +  ". Your grade: " +    getGrade(studentScore)  + ". You passed the course."
}
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));