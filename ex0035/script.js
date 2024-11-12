var horario = Number(prompt("Digite um horário de (0-23)"))

if(horario <= 5){
    alert ("Madrugada")
}else if(horario <= 12){
    alert ("Manhã")
}else if(horario <= 18){
    alert ("Tarde")
}else if(horario <= 23){
    alert ("Noite")
}