// ELEMENTO TELA
let screen001 = document.querySelector('.screen-contents');
let screen002 = document.querySelector('.screen-preview');

// VALOR TELA
let inputScreen001 = '';
let inputScreen002 = '';
let resultado = '';

// FUNÇÃO PARA INSERIR NA TELA
function inputscreen001(p) {
    if (resultado != '' && (p == '/' || p == '*' || p == '-' || p == '+')) {
        inputScreen001 += p;
        screen001.innerHTML = inputScreen001;

    } else if (resultado != '' && inputScreen001 == resultado) {
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

// FUNÇÃO PARA CALCULAR RESULTADO
function calcular() {
    inputScreen002 = `${inputScreen001}=`;
    screen002.innerHTML = inputScreen002;

    inputScreen001 = resultado;
    screen001.innerHTML = inputScreen001;

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