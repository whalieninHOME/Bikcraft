
//Ativar links do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = window.location.href;
    const href = link.href;
    if (url.includes(href))
    link.classList.add('ativo');
}

links.forEach(ativarLink);

//Ativar links do orçamento
const paramentros = new URLSearchParams(location.search); //classe

function ativarProdutos(paramentro){
    const elemento = document.getElementById(paramentro);
    if (elemento) {
        elemento.checked = true;
    } // passando informações de uma página para outra
}

paramentros.forEach(ativarProdutos);

//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains("ativa");
    console.log(ativa);
    pergunta.setAttribute("aria-expanded", "true");
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//Galeria de Bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    if (media){
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animação
if(window.SimpleAnime){
    new SimpleAnime();
}
