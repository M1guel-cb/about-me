const p = document.querySelector("header > div >p:nth-child(1)");

function calcularIdade() {
    data = new Date()
    anoAtual = data.getFullYear()
    mesAtual = data.getMonth()
    diaAtual = data.getDate()
    idade = 0
    if (mesAtual >= 11 && diaAtual >= 29) {
        idade = anoAtual - 2007
    } else {
        idade = anoAtual - 2008
    }
    p.innerHTML = `Miguel<span class="space"> | </span>${idade} anos<span class="space"> | </span>Brasil`
}