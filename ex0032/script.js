var altura = Number(prompt("Digite sua altura:"))
var peso = Number(prompt("Digite seu peso:"))
var pesoAltura = peso / altura ** 2 == IMC

if (IMC == 20) {
    alert("Peso ideal")
}& if else (IMC < 18){
    alert("Abaixo do peso")
}& else if (IMC > 27) {
    alert("Sobrepeso")
} else {
    alert("obeso")
}