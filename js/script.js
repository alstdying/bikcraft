//ativar links da nav

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
    const url = location.href;
    const href = link.href;
    if(url.includes(href)){
        link.classList.add("ativo");
    }
};

links.forEach(ativarLink);


//ativar itens do orçamento

const parametros = new URLSearchParams(location.search); //retorna um objeto com os parametros de pesquisa da url atual

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }
};

parametros.forEach(ativarProduto);


//perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
    const pergunta = event.currentTarget; //obtem o botao especifico que foi clicado
    const controls = pergunta.getAttribute("aria-controls"); //obtem o valor do atributo aria-controls do botão clicado, o id do elemento que contém a resposta da pergunta
    const resposta = document.getElementById(controls); //localiza o elemento com o id correspondente a resposta da pergunta

    resposta.classList.toggle("ativa"); //alterna a classe "ativa" na resposta, mostrando ou ocultando o conteudo da resposta
    const ativa = resposta.classList.contains("ativa"); //verifica se a classe "ativa" está presente na resposta 
    pergunta.setAttribute("aria-expanded", ativa); //define o valor do atributo aria-expanded no botão da pergunta para refletir se a resposta está atualmente visível ou oculta 
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);