function limpiar(){
    document.getElementById("formulario").reset();
}
function suma(){
    let x = parseInt(document.getElementById("valor1").value);
    let y  = parseInt(document.getElementById("valor2").value);
    document.getElementById('resultado').value=x+y;
}
function resta(){
    let x = parseInt(document.getElementById("valor1").value);
    let y  = parseInt(document.getElementById("valor2").value);
    document.getElementById('resultado').value=x-y;
}
function multiplicacion(){
    let x = parseInt(document.getElementById("valor1").value);
    let y  = parseInt(document.getElementById("valor2").value);
    document.getElementById('resultado').value=x*y;
}
function division(){
    let x = parseInt(document.getElementById("valor1").value);
    let y  = parseInt(document.getElementById("valor2").value);
    document.getElementById('resultado').value=x/y;
}