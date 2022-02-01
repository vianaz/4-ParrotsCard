const gridCards = document.createElement('div');
gridCards.classList.add('grid-cartas');
const imagensVerso = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif', 'tripletsparrot.gif','unicornparrot.gif'];

// Cria a carta
function criarCarta() {
    // Declara as divs da Carta
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
    imgBack.src = `img/${}`;

    // Organiza a estrutura HTML da carta e Adiciona ao HTML
    conteinerCarta.appendChild(frontFace);
    conteinerCarta.appendChild(backFace);
    frontFace.appendChild(imgFront);
    backFace.appendChild(imgBack);
    
    gridCards.appendChild(conteinerCarta);
    document.body.appendChild(gridCards);
}