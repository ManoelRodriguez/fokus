const html = document.querySelector('html')
const focoBtn = document.querySelector('.app__card-button--foco')
const curtoBtn = document.querySelector('.app__card-button--curto')
const longoBtn = document.querySelector('.app__card-button--longo')
const trocaImg = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBt = document.querySelector('#start-pause')
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const txtSpan = document.querySelector('span')
const imgPlayPause = document.querySelector('.app__card-primary-butto-icon')
const musicaPlay = new Audio('/sons/play.wav')
const musicaPause = new Audio('/sons/pause.mp3')
let tempoDecorridoEmSegundos = 5
let intervaloId = null

musica.loop = true //a música irá tocar constantemente
musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {    //paused é nativo do objeto Audio
        musica.play()
    } else {
        musica.pause()
    }
})
focoBtn.addEventListener('click', () => {
    alteraContexto('foco')
    focoBtn.classList.add('active')

})

curtoBtn.addEventListener('click', () => {
    alteraContexto('descanso-curto')
    curtoBtn.classList.add('active')
});

longoBtn.addEventListener('click', () => {
    alteraContexto('descanso-longo')
    longoBtn.classList.add('active')
})

startPauseBt.addEventListener('click', () => {
    if (txtSpan.innerText === "Começar") {
        txtSpan.innerHTML = `Pausar`
        imgPlayPause.setAttribute('src', `imagens/pause.png`)
        musicaPlay.play()
    }else{
        txtSpan.innerHTML = `Começar`
        imgPlayPause.setAttribute('src', `imagens/play_arrow.png`)
        musicaPause.play()
    }
})

function alteraContexto(contexto) {
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
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

/* const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        alert('Tempo finalizado')
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log('Temporizador: ' + tempoDecorridoEmSegundos)
} */

startPauseBt.addEventListener('click', iniciar)

function iniciar() {
    intervaloId = setInterval(contagemRegressiva, 1000)
}