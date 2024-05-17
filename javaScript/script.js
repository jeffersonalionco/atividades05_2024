

let kilo = document.querySelector(`#idKilo`)
let ipQuantidade = document.querySelector(`#ipQuantidade`)
let calcular = document.querySelector(`#calcular`)
let calcular1 = document.querySelector("#calcular1")
let calcular3 = document.querySelector("#calcular3")
let calcular5 = document.querySelector("#calcular5")
let calcular6 = document.querySelector("#calcular6")
let calcular7 = document.querySelector("#calcular7")
let calcular8 = document.querySelector("#calcular8")

function questao1(){
    let q11numero = document.querySelector("#q11numero")
    let q12numero = document.querySelector("#q12numero")
    let msg1a = document.querySelector("#msg1a")
  
    let troco = Number(q11numero.value) - Number(q12numero.value)

    msg1a.textContent = `Seu troco é: R$ ${troco}`

}

function calculo() {
    let kiloo = Number(kilo.value)
    let quantidade = Number(ipQuantidade.value)
    let msg1a = document.querySelector("#msg1a")
    let total = kiloo * quantidade

    msg1a.textContent = `Você comprou ${quantidade} Kilos, por ${kiloo} Reais, ficando um total de ${total} Reais`
    alert(`Você comprou ${quantidade} Kilos, por ${kiloo} Reais, ficando um total de ${total} Reais`)


}

function reajuste() {
    let saldo = document.querySelector("#salario")
    let mensagem = document.querySelector("#mensagem")
    let saldo1 = Number(saldo.value)

    let t = ((saldo1 * 1) / 100)
   
    mensagem.textContent = `Seu reajuste sera de ${t}`

}
//------------------------ EXERCICIO 3 -------------------------------
function questao4() {
    let pnumero = document.querySelector("#Pnumero")
    let snumero = document.querySelector("#Snumero")
    let tnumero = document.querySelector("#Tnumero")

    let msg3a = document.querySelector("#msg3a")
    let msg3b = document.querySelector("#msg3b")
    let msg3c = document.querySelector("#msg3c")
    let msg3d = document.querySelector("#msg3d")



    let ra = (Number(pnumero.value) + Number(snumero.value) + Number(tnumero.value)) / 3
    msg3a.textContent = `A media, dos valores é ${ra}`


    let vla = (Number(pnumero.value) * 3) + (Number(snumero.value) * 2) + (Number(tnumero.value) * 5)
    let vlb = 3 + 2 + 5
    let rb = vla / vlb
    msg3b.textContent = `A média Ponderada é ${rb}`

    msg3c.textContent = `A soma da média Pondera e a média Simples é ${rb + ra}`

    msg3d.textContent = `A Média das Médias é ${(rb + ra) / 2}`

}

function questao5() {
    let v1numero = document.querySelector("#v1numero")
    let v2numero = document.querySelector("#v2numero")
    let smg5 = document.querySelector("#msg5a")
    
    if (Number(v1numero.value) > Number(v2numero.value)) {
        smg5.textContent = `Valor: ${Number(v1numero.value)} é maior que  Valor: ${Number(v2numero.value)}`
    } else {
        smg5.textContent = `Valor: ${Number(v2numero.value)} é maior que Valor: ${Number(v1numero.value)}`
    }
}

function questao6() {
    let v1numero = document.querySelector("#q61numero")
    let v2numero = document.querySelector("#q62numero")
    let v3numero = document.querySelector("#q63numero")
    let v4numero = document.querySelector("#q64numero")
    let smg6 = document.querySelector("#msg6a")



    if (Number(v1numero.value) < v2numero.value && Number(v1numero.value) < v3numero.value && Number(v1numero.value) < v4numero.value) {
        smg6.textContent = `Este é o menor numero ${Number(v1numero.value)}`
    } else if (Number(v2numero.value) < v1numero.value && Number(v2numero.value) < v3numero.value && Number(v2numero.value) < v4numero.value) {
        smg6.textContent = `Este é o menor numero ${Number(v2numero.value)}`
    } else if (Number(v3numero.value) < v1numero.value && Number(v3numero.value) < v2numero.value && Number(v3numero.value) < v4numero.value) {
        smg6.textContent = `Este é o menor numero ${Number(v3numero.value)}`
    } else if (Number(v4numero.value) < v1numero.value && Number(v4numero.value) < v2numero.value && Number(v4numero.value) < v3numero.value) {
        smg6.textContent = `Este é o menor numero ${Number(v4numero.value)}`
    }


}

function questao7() {
    let q71numero = document.querySelector("#q71numero")
    let msg7a = document.querySelector("#msg7a")
    let num = Number(q71numero.value) / 2

    if (num === 0) {
        msg7a.textContent = `${q71numero.value} não é impar `
    } else {
        msg7a.textContent = `${q71numero.value}  é impar `
    }

}

function questao8() {
    let q81numero = document.querySelector("#q81numero")
    let msg8a = document.querySelector("#msg8a")

    let banco = {
        1: "Prego",
        2: "Parafuso",
        3: "Porca"
    }


    if (Number(q81numero.value) === 1) {
        msg8a.textContent = `Item consultado: ${banco[1]}`
    } else if (Number(q81numero.value) === 2) {
        msg8a.textContent = `Item consultado: ${banco[2]}`
    } else if (Number(q81numero.value) === 3) {
        msg8a.textContent = `Item consultado: ${banco[3]}`
    }


}


calcular.onclick = function () { calculo() }
calcular1.onclick = function () { reajuste() }
calcular3.onclick = function () { questao4() }
calcular5.onclick = function () { questao5() }
calcular6.onclick = function () { questao6() }
calcular7.onclick = function () { questao7() }
calcular8.onclick = function () { questao8() }
calcular9.onclick = function () { questao1() }