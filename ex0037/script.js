var compra = Number(prompt("Digite o valor da sua compra:"))
var desc10 = prompt("Digite um cumpom de desconto:")

var desconto = (compra * 10) / 100

if(compra  desc10){
    alert(`Es foi seu desconto ${desconto}`)
}else{
    alert("Sem desconto")
}