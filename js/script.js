// Variaveis globais necessárias
let listaImagensVerso = ['bobrossparrot','explodyparrot','fiestaparrot','metalparrot','revertitparrot', 'tripletsparrot','unicornparrot'];
let listaCartasEmJogo = [];  
let numeroDeCartasDesejado = 0;
let listaDePares = [];
let contadorDeJogads = 0;
let contadorFinalizarJogo = 0;
let jogoFinalido = false;


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


// Montar a estrutura das cartas
function montarCarta(numero) {
    let gridCartas = document.querySelector('div');
    let cartas = `
    <div class="card" onclick="girarCartas(this)" id="${listaCartasEmJogo[numero]} data-identifier="card"">
        <div class="front-face face" data-identifier="front-face">
            <img src="img/front.png">
            </div>
        <div class="back-face face" data-identifier="back-face">
            <img src="img/${listaCartasEmJogo[numero]}.gif">
            </div>
            </div>`;
    gridCartas.innerHTML = gridCartas.innerHTML + cartas;
}

// Faz a carta girar para mostrar o verso
function girarCartas(carta) {
    verificarParesIguais(carta);
    if (listaDePares.length <= 2 && jogoFinalido === false) {
        let frontFace = carta.children[0];
        let backFace = carta.children[1];
    
        frontFace.classList.remove('front-face');
        frontFace.classList.add('girar-tras');
        backFace.classList.remove('back-face');
        backFace.classList.add('girar-frente');
        contadorDeJogads ++;
    }
    listaDePares[0].attributes[1].nodeValue = "";
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
    listaDePares[0].attributes[1].nodeValue = "girarCartas(this)";
    listaDePares[1].attributes[1].nodeValue = "girarCartas(this)";
    listaDePares = []
} 

// Verificar cartas iguais
function verificarParesIguais(escolhida) {
    listaDePares.push(escolhida);
    
    if (listaDePares.length === 2) {
        if (listaDePares[0].id === listaDePares[1].id) {
            listaDePares[1].attributes[1].nodeValue = "";
            listaDePares = [];
            contadorFinalizarJogo++;
            setTimeout(finalizarJogo, 500);
        } else {
            setTimeout(desgirarCartas, 1000);
        }
    } 
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
    console.log();
    for (let i = 0; i < valor; i++) {
        listaCartasEmJogo.push(listaImagensVerso[i]);
        listaCartasEmJogo.push(listaImagensVerso[i]);
        console.log(listaCartasEmJogo);
    }
    
    shuffle(listaCartasEmJogo);
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

// Verifica se o jogo já terminou
function finalizarJogo() {
    if (contadorFinalizarJogo === (numeroDeCartasDesejado / 2)) {
        alert(`Você ganhou em ${contadorDeJogads} jogadas!`);
        let jogarDeNovo = prompt('Você quer jogar de novo? S/N');
        reniciarJogo(jogarDeNovo);
    }
}

function reniciarJogo(jogarDeNovo) {
    if (jogarDeNovo === 'S') {
        zerarTodasVariaveis();
        document.querySelector('div').innerHTML = ""
        executarJogo()
    } else {
        jogoFinalido = true;
    }
}
executarJogo();

function zerarTodasVariaveis() {
    listaImagensVerso = ['bobrossparrot','explodyparrot','fiestaparrot','metalparrot','revertitparrot', 'tripletsparrot','unicornparrot'];
    numeroDeCartasDesejado = 0;
    listaCartasEmJogo = [];
    listaDePares = [];
    contadorDeJogads = 0;
    contadorFinalizarJogo = 0;
    jogoFinalido = false;
}