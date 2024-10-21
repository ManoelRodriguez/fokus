const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const trocaImg = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

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
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superficie.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}




/* ------------EXERCICIOS------------ */

const timerContainer = document.querySelector('.app__card-timer')
const trocaFrase = document.querySelector('.app__title')
