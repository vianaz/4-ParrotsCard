// Variaveis globais necessárias
let imagensVerso = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif', 'tripletsparrot.gif','unicornparrot.gif'];
const cartasEmJogo = [];  
let numeroCartas = 0;


// Prompt perguntando sobre o numero de cartas
function perguntarCartas() {
    alert('É um jogo da memória, então tente achar as cartas certas! :)')
    while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 != 0) {
        numeroCartas = prompt('Quantas cartas você deseja?(números pares de 4 a 14)');
        if (numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 != 0) {
            alert('Valor invalido!');
        }
    }
    return numeroCartas;
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
        cartasEmJogo.push(imagensVerso[i]);
        cartasEmJogo.push(imagensVerso[i]);
    }
    shuffle(cartasEmJogo);
} 

// Montar a estrutura das cartas
function montarCarta(numero) {
    let gridCartas = document.querySelector('div');
    let cartas = `
    <div class="card" onclick="girarCartas(this)">
        <div class="front-face face">
            <img src="img/front.png">
        </div>
        <div class="back-face face">
            <img src="img/${cartasEmJogo[numero]}">
        </div>
    </div>`;
    gridCartas.innerHTML = gridCartas.innerHTML + cartas;
}

function girarCartas(carta) {
    let frontFace = carta.children[0];
    let backFace = carta.children[1];

    frontFace.classList.toggle('front-face');
    frontFace.classList.toggle('girar-tras');
    backFace.classList.toggle('back-face');
    backFace.classList.toggle('girar-frente');
}

// Função que exectura o jogo
function executarJogo() {
    const paresCartas = perguntarCartas() / 2;
    shuffle(imagensVerso);
    estruturarPares(paresCartas);
    for (let i = 0; i < numeroCartas; i++) {
        montarCarta(i);
    }
}
executarJogo()