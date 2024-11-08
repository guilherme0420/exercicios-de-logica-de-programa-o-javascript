var idade = Number(prompt("Digite uma idade"))
var outraIdade = Number(prompt("Digite outra idade"))

if(idade == outraIdade){
    alert("Os dois usuarios tem a mesma idade")
}else if(idade > outraIdade){
    alert("O primeiro usuario é mais velho")
}else{
    alert("O segundo usuario é mais velho")
}