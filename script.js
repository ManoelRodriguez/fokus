const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const trocaImg = document.querySelector('.app__image')


focoBtn.addEventListener('click', () => {
    alteraContexto('foco')
})

curtoBtn.addEventListener('click', () => {
    alteraContexto('descanso-curto')
});

longoBtn.addEventListener('click', () => {
    alteraContexto('descanso-longo')
})

function alteraContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    trocaImg.setAttribute('src', `/imagens/${contexto}.png`)
}




/* ------------EXERCICIOS------------ */

const timerContainer = document.querySelector('.app__card-timer')
const trocaFrase = document.querySelector('.app__title')
