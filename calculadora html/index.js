console.log(":D")
const txtOp1 = document.getElementById("op1");
const txtOper = document.getElementById("operacion");
const txtOp2 = document.getElementById("op2");
const btnCalcular = document.getElementById("calcular");
const pRes = document.getElementById("resultado");

btnCalcular.addEventListener('click',calcular)

function calcular(){
    const operacion = txtOper.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)
    if(operacion=="+" || operacion=="-" || operacion=="*" || operacion=="/"){
        let resultado;
        switch(operacion){
            case "+":
                resultado= op1+op2
                break;
            case "-":
                resultado= op1-op2
                break;
            case "*":
                resultado=op1*op2
                break;
            case "/":
                resultado=op1/op2
                break;
        }
        console.log(resultado)
        pRes.innerText= "= "+resultado;
    }else{
        console.log("no se puede calcular")
    }

}