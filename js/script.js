const gridCards = document.createElement('div');
gridCards.classList.add('grid-cartas');
let imagensVerso = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif', 'tripletsparrot.gif','unicornparrot.gif'];

// Prompt perguntando sobre o numero de cartas
function perguntarCartas() {
    let numeroCartas = 0;
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
function estruturarPares(numero) {
    const cartasEmJogo = [];   
    for (let i = 0; i < numero; i++) {
        cartasEmJogo.push(imagensVerso[i]);
        cartasEmJogo.push(imagensVerso[i]);
    }
    shuffle(cartasEmJogo);
    return cartasEmJogo;
}

// Montar a estrutura das cartas
function montarCarta() {
    const conteinerCarta = document.createElement('div');
    const frontFace = document.createElement('div');
    const imgFront = document.createElement('img');
    const backFace = document.createElement('div');
    const imgBack = document.createElement('img');
    

    // Adiciona as Classes necessárias
    conteinerCarta.classList.add('card');
    frontFace.classList.add('front-face', 'face');
    backFace.classList.add('back-face', 'face');
    imgFront.src = 'img/front.png';
    // imgBack.src = `img/${}`;

}
// Organiza a estrutura HTML da carta e Adiciona ao HTML
function montarHTML() {
    conteinerCarta.appendChild(frontFace);
    conteinerCarta.appendChild(backFace);
    frontFace.appendChild(imgFront);
    backFace.appendChild(imgBack);

    gridCards.appendChild(conteinerCarta);
    document.body.appendChild(gridCards);
}


// Vai pegar o número de cartas e colocar em jogo
function colocarCartasJogo() {
    let teste = perguntarCartas();
    for (let i = 0; i < teste; i++) {
        montarCarta();
    }
}

// Função que exectura o jogo
function executarJogo() {
    const paresCartas = perguntarCartas() / 2;
    shuffle(imagensVerso);
    estruturarPares(paresCartas);
}
executarJogo();