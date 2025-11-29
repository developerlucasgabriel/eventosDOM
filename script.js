// Seleciona todos os elementos com a classe .text (onde serão exibidas as mensagens)
let span = document.querySelectorAll('.text');

// Seleciona todas as caixas .box (onde acontecem os eventos)
let box = document.querySelectorAll('.box');


// ----------------------------------------------------------------------
// 1. Evento: CLICK no botão
// ----------------------------------------------------------------------
document.getElementById('btn-click').addEventListener('click', event => {
    event.preventDefault(); // Evita comportamento padrão
    span[0].innerHTML = 'Você clicou! 👈'; // Altera o texto do primeiro <p>
});


// ----------------------------------------------------
// 2. Evento: MOUSEOVER (quando o mouse entra na caixa)
// ----------------------------------------------------
document.querySelectorAll('.box')[1].addEventListener('mouseover', event => {
    event.preventDefault();

    // Troca o fundo quando passa o mouse
    box[1].style.backgroundColor = '#1B6D5A';

    // Troca a cor do texto dentro da boxsv
    span[1].style.color = 'fff';

    // Mensagem informativa
    span[1].innerHTML = "Mudou a cor!";
});


// -------------------------------------------------
// 3. Evento: MOUSEOUT (quando o mouse sai da caixa)
// -------------------------------------------------
document.querySelectorAll('.box')[1].addEventListener('mouseout', event => {
    event.preventDefault();

    // Restaura o fundo original
    box[1].style.backgroundColor = '#000';

    // Volta a cor do texto
    span[1].style.color = '#fff';

    // Texto padrão da div
    span[1].innerHTML = "Passe o mouse aqui para mudar a cor";
});


// -------------------------------------------------
// 4. Evento: MOUSEDOWN (botão do mouse pressionado)
// -------------------------------------------------
document.getElementById('btn-pressiona').addEventListener('mousedown', event => {
    event.preventDefault();
    span[2].innerHTML = 'Mouse Pressionado!';
});


// -----------------------------------------
// 5. Evento: MOUSEUP (botão do mouse solto)
// -----------------------------------------
document.getElementById('btn-pressiona').addEventListener('mouseup', event => {
    event.preventDefault();
    span[2].innerHTML = 'Soltou!';
});


// --------------------------------------
// 6. Evento: KEYDOWN (tecla pressionada)
// --------------------------------------
document.getElementById('inputTecla').addEventListener('keydown', event => {

    // Mostra a tecla pressionada
    let caixaDoResultado = document.getElementById('box-result');
    caixaDoResultado.style.display = 'block';
    span[3].innerHTML = `Ultima tecla informada: ${event.key}`;

});


// Criando elemento 'Span'
let spanKeyup = document.createElement('span')

// Adicionando este elemento a classe ".text"
spanKeyup.classList.add('text');

// Inserindo este Elemento depois do Terceiro Span
span[3].insertAdjacentElement('afterend', spanKeyup)

// ---------------------------------
// 7. Evento: KEYUP (soltou a tecla)
// ---------------------------------
document.getElementById('inputTecla').addEventListener('keyup', event => {

    // Pegando o valor digitado no input
    let palavraInformada = document.getElementById('inputTecla').value;

    // Exibindo a tecla solta
    spanKeyup.innerHTML = `<br>Palavra informada: ${palavraInformada}`;
});

// ---------------------------------
// 8. Mudança de valor (change)
// ---------------------------------

    // Criando um novo elemento "span"
    let novoSpan = document.createElement('span');

    // Adicionando a classe ".text" (a mesma dos outros spans)
    novoSpan.classList.add('text');

    let select = document.getElementById('curso');

    select.addEventListener('change', event => {

        // Inserindo o novo span logo depois do select
        select.insertAdjacentElement('afterend', novoSpan);

        novoSpan.innerHTML = `<br> ${event.target.value}`;
        novoSpan.style.color = '#000';
        novoSpan.style.display = 'flex';
        novoSpan.style.fontWeight = 'bold';
        novoSpan.style.justifyContent = 'center';
    });

// ---------------------------------
// 9. Envio de formulário (submit)
// ---------------------------------

document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();

    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    span[4].style.color = `#000`;
    span[4].style.display = `flex`;
    span[4].style.justifyContent = `center`;
    span[4].innerHTML = `<br><strong>Formulário Enviado!<strong>`;

    console.log(`Nome: ${nome}<br> E-mail: ${email}`);

});


// ---------------------------------
// 10. Duplo clique (dblclick)
// ---------------------------------

let imgPeterParker = document.getElementById('img-peterParker');
let imgSpiderman = document.getElementById('img-spiderman');

imgPeterParker.addEventListener('dblclick', event => {
    imgPeterParker.style.display = 'none'
    imgSpiderman.style.display = 'block';
});

imgSpiderman.addEventListener('dblclick', event => {
    imgSpiderman.style.display = 'none';
    imgPeterParker.style.display = 'block'
});

// ---------------------------------
// 11. Carregamento da página (load)
// ---------------------------------
window.addEventListener('load', event => {
    alert('Página carregada!');
});

// ---------------------------------
// 12. Desafio Contador
// ---------------------------------
let btnContador = document.getElementById('btn-contador');
let contador = 0;
let spanContador = document.getElementById('spanContador');

btnContador.addEventListener('click', event => {
    contador++;
    spanContador.style.display = 'block';
    spanContador.innerHTML = `Quantidade de cliques no botão: ${contador}`
})




