// 1.
const frutas = ['laranja', 'limão', 'uva'];

const primeiraFruta = document.getElementById('fruta-1');
const segundaFruta = document.getElementById('fruta-2');
const terceiraFruta = document.getElementById('fruta-3');

primeiraFruta.innerHTML = frutas[0];
segundaFruta.innerHTML = frutas[1];
terceiraFruta.innerHTML = frutas[2];

// 2.
const itemAdicional = document.getElementById('item-adicional');
const imprimirDigitacaoConsole = () => {
    console.log(itemAdicional.value);
};

// 3.
const quartaFruta = document.getElementById('fruta-4');
const botaoAdicionar = document.getElementById('btn');

const adicionarConteudo = () => {
    quartaFruta.innerHTML = itemAdicional.value;
};
