// ELEMENTO TELA
let screen001 = document.querySelector('.screen-contents');
let screen002 = document.querySelector('.screen-preview');
let abrirHistorico = document.querySelector('.container-historico');
let conteudoHistorico = document.querySelector('.historico');

// VALOR TELA
let inputScreen001 = '';
let inputScreen002 = '';
let resultado = '';
let historico = '';

// FUNÇÃO PARA INSERIR NA TELA
function inputscreen001(p) {
    if (resultado != '' && (p == '/' || p == '*' || p == '-' || p == '+')) {
        inputScreen001 += p;
        screen001.innerHTML = inputScreen001;

    } else if (resultado != '' && inputScreen001 == resultado && inputScreen002 == '') {
        inputScreen001 = '';
        resultado = '';
        inputScreen001 += p;
        screen001.innerHTML = inputScreen001;
    
        resultado = eval(inputScreen001);
        inputScreen002 = resultado;
        screen002.innerHTML = inputScreen002;

    } else {
        inputScreen001 += p;
        screen001.innerHTML = inputScreen001;
    
        resultado = eval(inputScreen001);
        inputScreen002 = resultado;
        screen002.innerHTML = inputScreen002;
    }
}

// FUNÇÃO PARA INSERIR PORCENTAGEM
function porcentagem() {
    inputScreen001 += '/100*';
    screen001.innerHTML = inputScreen001;

    resultado = eval(inputScreen001);
    inputScreen002 = resultado;
    screen002.innerHTML = inputScreen002;
}

// FUNÇÃO PARA CALCULAR RESULTADO
function calcular() {
    inputScreen002 = `${inputScreen001}=`;
    screen002.innerHTML = inputScreen002;

    inputScreen001 = resultado;
    screen001.innerHTML = inputScreen001;

    incluirHistorico()
    inputScreen002 = '';
}

// FUNÇÃO BACKSPACE
function backspace() {
    if (inputScreen002 == '') {
        limpar();

    } else {
        inputScreen001 = inputScreen001.slice(0, -1);
        screen001.innerHTML = inputScreen001;
    
        resultado = eval(inputScreen001);
        inputScreen002 = resultado;
        screen002.innerHTML = inputScreen002;
    }
}

// FUNÇÃO PARA LIMPAR TUDO
function limpar() {
    inputScreen001 = '';
    inputScreen002 = '';
    resultado = '';
    screen001.innerHTML = inputScreen001;
    screen002.innerHTML = inputScreen002;
}

// FUNÇÃO EXIBIR HISTÓRICO
function historicoEnabled() {
    if (abrirHistorico.style.display == 'none') {
        abrirHistorico.style.display = 'block';

    } else {
        abrirHistorico.style.display = 'none';
    }
}

// FUNÇÃO INCLUIR HISTÓRICO
function incluirHistorico() {
    historico += (inputScreen002 + inputScreen001 + '<br>');
    conteudoHistorico.innerHTML = historico;
}