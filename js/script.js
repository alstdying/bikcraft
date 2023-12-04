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