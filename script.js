const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const trocaImg = document.querySelector('.app__image')


focoBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    trocaImg.setAttribute('src', '/imagens/foco.png')
})

curtoBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    trocaImg.setAttribute('src', '/imagens/descanso-curto.png')
});

longoBtn.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'descanso-longo')
    trocaImg.setAttribute('src', '/imagens/descanso-longo.png')
})




/* ------------EXERCICIOS------------ */

const timerContainer = document.querySelector('.app__card-timer')
const trocaFrase = document.querySelector('.app__title')
