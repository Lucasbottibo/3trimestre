const frm = document.querySelector("form")      //obtem elementos da pagina
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let numContas = 0   //declara e inicializa contador...
let valTotal = 0    //... e acumulador (variáveis globais)
let resposta = ""   //string com a resposta a ser exibida

frm.addEventListener("submit", (e) => {         //"escuta" evento submit do form
    e.preventDefault()                          //evita o envio do form

    const descricao = frm.inDescricao.value     //obtem dados da conta
    const valor = Number(frm.inValor.value)

    numContas++                                 //adiciona valores ao contador e acumulador
    valTotal = valTotal + valor

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"

    resp1.innerText = `${resposta}--------------------------------`
    resp2.innerText = `${numContas} Contas(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = ""                  //limpa campos do form
    frm.inValor.value = ""
    frm.inDescricao.focus()                     //posiciona no campo inDescricao do form
})