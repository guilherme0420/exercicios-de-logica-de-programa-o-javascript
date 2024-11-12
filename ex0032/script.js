var altura = Number(prompt("Digite sua altura:"))
var peso = Number(prompt("Digite seu peso:"))

if(peso / altura ** 2 < 18.5 ){
    alert ("Abaixo do peso")
}else if(peso / altura ** 2 < 24.9){
    alert ("Peso normal")
}else if(peso / altura ** 2 < 29.9){
    alert ("Sobrepeso")
}else{
    alert ("Obeso")
}