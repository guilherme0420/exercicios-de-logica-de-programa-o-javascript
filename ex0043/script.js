var temperatura = Number(prompt("Digite a temperatura:"))
var unidade = prompt("Digite a unidade:")

if(unidade == 'C'){
    alert(`
        ${(temperatura * 9/5) + 32}
        `)
}else if(unidade == 'F'){
    alert(`
        ${(temperatura - 32) * 5/9}
        `)
}