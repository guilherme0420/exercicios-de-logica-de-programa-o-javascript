var numero1 = Number(prompt("Digite um número"))
var numero2 = Number(prompt("Digite outro número"))
var numero3 = Number(prompt("Digite o ultimo número"))

if(numero1 > numero2 & numero1 > numero3){
    alert (`${numero1} é o maior número`)
}if(numero2 > numero1 & numero2 > numero3){
    alert (`${numero2} é o maior número`)
}if(numero3 > numero1 & numero3 > numero2){
    alert (`${numero3} é o maior número`)
}