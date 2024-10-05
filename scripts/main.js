// ELEMENTO TELA
let screen001 = document.querySelector('.screen-contents');
let screen002 = document.querySelector('.screen-preview');

// VALOR TELA
let inputScreen001 = '';
let inputScreen002 = '';
let resultado = '';

// FUNÇÃO PARA INSERIR NA TELA
function inputscreen001(p) {
    inputScreen001 += p;
    screen001.innerHTML = inputScreen001;

    inputScreen002 += p;
    screen002.innerHTML = inputScreen002;
}

// FUNÇÃO PARA CALCULAR RESULTADO
function calcular() {
    resultado = eval(inputScreen002);
    screen001.innerHTML = resultado;
    inputScreen001 = '';
    inputScreen002 += '=';
    screen002.innerHTML = inputScreen002;
    inputScreen002 = '';
}

// FUNÇÃO PARA LIMPAR TUDO
function limpar() {
    inputScreen001 = '';
    inputScreen002 = '';
    resultado = '';
    screen001.innerHTML = inputScreen001;
    screen002.innerHTML = inputScreen002;
}