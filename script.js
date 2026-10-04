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

for (let gasto of gastos) {
    totalGastos += gasto.valor;
}


let totalEntradas = 1500;

const entradas = document.getElementById("entradas");

entradas.textContent = `R$ ${totalEntradas.toFixed(2).replace(".", ",")}`;


const gastosMes = document.getElementById("gastosMes");

gastosMes.textContent = `R$ ${totalGastos.toFixed(2).replace(".", ",")}`;


const saldo = document.getElementById("saldo");

let valorSaldo = totalEntradas - totalGastos;

saldo.textContent = `R$ ${valorSaldo.toFixed(2).replace(".", ",")}`;