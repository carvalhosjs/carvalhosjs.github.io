const meuCabecalho = document.querySelector("h1");
meuCabecalho.textContent = 'Ola Mundo';

let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'images/a.jpg'){
        minhaImagem.setAttribute('src', 'images/b.jpg');
    }else{
        minhaImagem.setAttribute('src', 'images/a.jpg');
    }
}

let meuBotao = document.querySelector("button");
let meuCab = document.querySelector("h1");


function defineUsuario(){
    let meuNome = prompt('Digite seu nome');
    if(!meuNome || meuNome==null){
        defineUsuario();
    }else{
        localStorage.setItem('nome', meuNome); 
        meuCab.textContent = 'Mozilla ' + meuNome
    }
}

if(!localStorage.getItem('nome')){
    defineUsuario();
}else{
    let nomeGuardado = localStorage.getItem('nome');
    meuCab.textContent = 'Mozilla ' + nomeGuardado;
}

meuBotao.onclick = function(){
    defineUsuario();
}