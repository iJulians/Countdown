import Countdown from './countdown.js'

const tempoParaSabado = new Countdown('01 May 2023 00:00:00 GMT-0300')

const tempos = document.querySelectorAll('[data-time]')

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaSabado.total[index]
  })
}

mostrarTempo()
setInterval(mostrarTempo, 1000)
