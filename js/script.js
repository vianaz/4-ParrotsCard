// Variaveis globais necessárias
let listaImagensVerso = ['bobrossparrot','explodyparrot','fiestaparrot','metalparrot','revertitparrot', 'tripletsparrot','unicornparrot'];
const listaCartasEmJogo = [];  
let numeroDeCartasDesejado = 0;
let listaDePares = [];
let contadorDeJogads = 0;
let contadorFinalizarJogo = 0;


// Prompt perguntando sobre o numero de cartas
function perguntarCartas() {
    alert('É um jogo da memória, então tente achar as cartas certas! :)')
    while (numeroDeCartasDesejado < 4 || numeroDeCartasDesejado > 14 || numeroDeCartasDesejado % 2 != 0) {
        numeroDeCartasDesejado = prompt('Quantas cartas você deseja?(números pares de 4 a 14)');
        if (numeroDeCartasDesejado < 4 || numeroDeCartasDesejado > 14 || numeroDeCartasDesejado % 2 != 0) {
            alert('Valor invalido!');
        }
    }
    return numeroDeCartasDesejado;
}

// Função que deixa misturada a Array
function shuffle(array) {
    let m = array.length;
    while (m) {
    // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

// Pega no numero de cartas desejado, adiciona em pares e mistura
function estruturarPares(valor) {
    for (let i = 0; i < valor; i++) {
        listaCartasEmJogo.push(listaImagensVerso[i]);
        listaCartasEmJogo.push(listaImagensVerso[i]);
    }
    shuffle(listaCartasEmJogo);
} 

// Montar a estrutura das cartas
function montarCarta(numero) {
    let gridCartas = document.querySelector('div');
    let cartas = `
    <div class="card" onclick="girarCartas(this);verificarParesIguais(this)" id="${listaCartasEmJogo[numero]}">
        <div class="front-face face">
            <img src="img/front.png">
        </div>
        <div class="back-face face">
            <img src="img/${listaCartasEmJogo[numero]}.gif">
        </div>
    </div>`;
    gridCartas.innerHTML = gridCartas.innerHTML + cartas;
}

// Faz a carta girar para mostrar o verso
function girarCartas(carta) {
    let frontFace = carta.children[0];
    let backFace = carta.children[1];

    frontFace.classList.remove('front-face');
    frontFace.classList.add('girar-tras');
    backFace.classList.remove('back-face');
    backFace.classList.add('girar-frente');
    contadorDeJogads ++;

}

// Faz a carta desgirar para desmotrar o verso
function desgirarCartas() {
    for (let i = 0; i < listaDePares.length; i++) {
        let frontFace = listaDePares[i].children[0];
        let backFace = listaDePares[i].children[1];
        
        frontFace.classList.remove('girar-tras');
        frontFace.classList.add('front-face');
        backFace.classList.remove('girar-frente');
        backFace.classList.add('back-face');
    }
    listaDePares = []
} 

// Verificar cartas iguais
function verificarParesIguais(escolhida) {
    listaDePares.push(escolhida);
    if (listaDePares.length === 2) {
        if (listaDePares[0].id === listaDePares[1].id) {
            contadorFinalizarJogo++;
            listaDePares = [];
            finalizarJogo();
        } else {
            setTimeout(desgirarCartas, 1000);
        }
    } 
}

// Verifica se o jogo já terminou
function finalizarJogo() {
    if (contadorFinalizarJogo === (numeroDeCartasDesejado / 2)) {
        alert(`Você ganhou em ${contadorDeJogads} jogadas!`);
    }
}

// Função que exectura o jogo
function executarJogo() {
    // Define quantos pares irá ter
    const paresCartas = perguntarCartas() / 2;

    // Mistura as back-faces possíveis
    shuffle(listaImagensVerso);

    // Constroi os pares de carta, mistura e coloca eles em jogo
    estruturarPares(paresCartas);
    for (let i = 0; i < numeroDeCartasDesejado; i++) {
        montarCarta(i);
    }


}
executarJogo()