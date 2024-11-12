var nota1 = Number(prompt("Digite sua nota"))
var nota2 = Number(prompt("Digite outra nota"))
var nota3 = Number(prompt("Digite a ultima nota"))

if (nota1 + nota2 + nota3 / 3 >= 6) {
    alert("Aprovado")
} else if(nota1 + nota2 + nota3 / 3 <= 6){
    alert("Reprovado")
}