var nota = Number(prompt("Digite sua nota de 0 a 10"))

if(nota < 5){
    alert("Insufisiente")
}else if(nota <= 6){
    alert("Regular")
}else if(nota <= 8){
    alert("Bom")
}else if(nota <= 10){
    alert("Exelente")
}