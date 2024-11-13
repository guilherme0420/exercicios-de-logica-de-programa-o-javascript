var temperatura = Number(prompt("Digite a temperatura:"))

if(temperatura < 0){
    alert("Muito frio")
}else if(temperatura < 20){
    alert("Frio")
}else if(temperatura <= 30){
    alert("Agradável")
}else if(temperatura > 30 ){
    alert("Calor")
}