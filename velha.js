var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador_selecionado');
var vencedorSelecionado = document.getElementById('vencedor_selecionado');
var quadrados = document.getElementsByClassName('quadrado');
var vitoriasX = 0;
var vitoriasO = 0;


mudarJogador('X');

function escolherQuadrado(id) {

    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);

    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000'

    if (jogador === 'X') {
        jogador = 'O'
    }
    else {
        jogador = 'X'
    }
    mudarJogador(jogador);
    checaVencedor();

}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var q1 = document.getElementById('1');
    var q2 = document.getElementById('2');
    var q3 = document.getElementById('3');
    var q4 = document.getElementById('4');
    var q5 = document.getElementById('5');
    var q6 = document.getElementById('6');
    var q7 = document.getElementById('7');
    var q8 = document.getElementById('8');
    var q9 = document.getElementById('9');

    if (checaSequencia(q1, q2, q3)) {
        mudaCorQuadrado(q1, q2, q3);
        mudarVencedor(q1);
        return;
    }
    if (checaSequencia(q4, q5, q6)) {
        mudaCorQuadrado(q4, q5, q6);
        mudarVencedor(q4);
        return;
    }
    if (checaSequencia(q7, q8, q9)) {
        mudaCorQuadrado(q7, q8, q9);
        mudarVencedor(q7);
        return;
    }
    if (checaSequencia(q1, q4, q7)) {
        mudaCorQuadrado(q1, q4, q7);
        mudarVencedor(q1);
        return;
    }
    if (checaSequencia(q2, q5, q8)) {
        mudaCorQuadrado(q2, q5, q8);
        mudarVencedor(q2);
        return;
    }
    if (checaSequencia(q3, q6, q9)) {
        mudaCorQuadrado(q3, q6, q9);
        mudarVencedor(q3);
        return;
    }
    if (checaSequencia(q1, q5, q9)) {
        mudaCorQuadrado(q1, q5, q9);
        mudarVencedor(q1);
        return;
    }
    if (checaSequencia(q3, q5, q7)) {
        mudaCorQuadrado(q3, q5, q7);
        mudarVencedor(q3);
        return;
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    jogadorVencedor.innerHTML = vencedor;
    if (vencedor === 'X') {
        vitoriasX++
    }
    if (vencedor === 'O') {
        vitoriasO++
    }
    document.getElementById("vitorias_X").innerHTML = vitoriasX
    document.getElementById("vitorias_O").innerHTML = vitoriasO
}

function mudaCorQuadrado(q1, q2, q3) {
    q1.style.background = '#0f0';
    q2.style.background = '#0f0';
    q3.style.background = '#0f0';
}

function checaSequencia(q1, q2, q3) {
    var eigual = false;
    if (q1.innerHTML !== '-' && q1.innerHTML === q2.innerHTML && q1.innerHTML === q3.innerHTML) {
        eigual = true;
    }
    return eigual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee'
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

}