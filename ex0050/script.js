var compra = Number(prompt("Digite o valor da sua compra:"))

if(compra >= 100){
    var desconto = (compra * 10) / 100
    alert(`Sua compra teve desconto ${desconto}`)
}else{
    alert(`Sem desconto ${compra}`)
}