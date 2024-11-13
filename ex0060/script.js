var btnMais = document.querySelector("#mais")
var btnMenos = document.querySelector("#menos")
var res = document.querySelector("#res")
var contador = 0

function incremento() {
    contador++
    res.innerText = contador

}
btnMais.addEventLister("click", incremento)
limiter()
function decremento() {
    contador--
    res.innerText = contador

}
btnMenos.addEventListener("click", decremento)
limiter()
function limiter(){
    if(contador == 0){
        btnMenos.setAttribute("disabled","")
    }else{
        btnMenos.removeAttribute("disabled","")
    }
}
limiter()