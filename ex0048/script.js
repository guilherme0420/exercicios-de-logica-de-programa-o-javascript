var maca = Number(prompt("Digite quantas maçãs você vai comprar"))
var precoUndMaca = 1.30

if (maca >= 12) {
    precoUndMaca = 1
    var calculo = maca * precoUndMaca
    alert(`Você comprou ${maca} maçãs e saiu na promoção.
        total = ${calculo} R$`)
} else {
    var calculo = maca * precoUndMaca
    alert(`Você comprou ${maca} maçãs
        total = ${calculo} R$`)
}