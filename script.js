let gastos = [
    {
        descricao: "Mercado",
        valor: 150
    },
    {
        descricao: "Farmácia",
        valor: 80
    },
    {
        descricao: "Internet",
        valor: 100
    }
];

let totalGastos = 0;
let totalEntradas = 1500;

const entradas = document.getElementById("entradas");
const gastosMes = document.getElementById("gastosMes");
const saldo = document.getElementById("saldo");
const listaLancamentos = document.querySelector(".lista-lancamentos");


// Atualiza o total de gastos
function atualizarGastos() {

    totalGastos = 0;

    for (let gasto of gastos) {
        totalGastos += gasto.valor;
    }

    gastosMes.textContent = `R$ ${totalGastos.toFixed(2).replace(".", ",")}`;
}


// Atualiza o saldo disponível
function atualizarSaldo() {

    let valorSaldo = totalEntradas - totalGastos;

    saldo.textContent = `R$ ${valorSaldo.toFixed(2).replace(".", ",")}`;
}


// Mostra os lançamentos na tela
function mostrarLancamentos() {

    listaLancamentos.innerHTML = "";

    for (let gasto of gastos) {

        const item = document.createElement("p");

        item.textContent = `${gasto.descricao} - R$ ${gasto.valor.toFixed(2).replace(".", ",")}`;

        listaLancamentos.appendChild(item);
    }
}


// Mostra as entradas inicialmente
entradas.textContent = `R$ ${totalEntradas.toFixed(2).replace(".", ",")}`;


// Atualiza os valores quando o site abre
atualizarGastos();
atualizarSaldo();
mostrarLancamentos();


// Botão de adicionar lançamento
const btnSalvar = document.querySelector(".btn-salvar");

btnSalvar.addEventListener("click", function() {

    const descricao = document.getElementById("descricao").value;
    const valor = Number(document.getElementById("valor").value);
    const tipo = document.getElementById("tipo").value;


    // Se for um gasto
    if (tipo === "gasto") {

        gastos.push({
            descricao: descricao,
            valor: valor
        });

    }


    // Se for uma entrada
    if (tipo === "entrada") {

        totalEntradas += valor;

    }


    // Atualiza os valores na tela
    entradas.textContent = `R$ ${totalEntradas.toFixed(2).replace(".", ",")}`;

    atualizarGastos();
    atualizarSaldo();
    mostrarLancamentos();


    // Limpa o formulário
    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("tipo").value = "gasto";

});