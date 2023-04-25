console.log("hellooo")

var numero = 24;
var booleano = true;
let variable;
const constante = 3; // este valor no se puede cambiar

console.log("mi edad es "+numero);

var op1 = 2;
var op2 = 3;
var resultado = op1 + op2;
console.log("resultado vale:"+resultado);

// condicionales
let num = 6;
let nombre ="sonic";
// otras comparaciones son !=, <, >, <=, >=, &&, ||
if (num == 6 && nombre=="sonic"){ // con === se tiene una igualdad mas estricta, que incluye tipo
    console.log("si, sonic, vale 6")
}else{
    console.log("ña")
}

let num2 = 5;
if(num2>0){
    console.log("el numero es positivo")
}
else if(num===0){
    console.log("mi numero es cero")
}
else{
    console.log("el numero es negativo")
}


let contador = 0;
while(contador < 5){
    console.log(contador);
    contador = contador + 1;
}

for(let i = 0; i < 10; i++){
    console.log(i)
}

function saludar(nombre){
    console.log("hola hola "+nombre);

}

saludar("julian");

function multiplicar(n1,n2){
    let resultado = n1*n2;
    return resultado;
}

let r = multiplicar(4,6);
console.log(r);

// arreglos
let arreglo = ["sonic","tails","knuckles","eggman"]
for(let i = 0; i<4;i++){
    let mostrar = arreglo[i]
    console.log(mostrar)
}

//objetos
let persona1 = { nombre:"julian", edad:24, masculino:true}
let persona2 = { nombre:"carito", edad:22, masculino:false}
let arregloObj = [persona1,persona2]
persona1.comidaFavorita = "hamburguesa";
persona2.comidaFavorita = "pollito";
console.log(persona1);
console.log(persona2);
