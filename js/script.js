import Countdown from './countdown.js'

const tempoParaSabado = new Countdown('13 August 2022 18:15:00 GMT-0300')

const tempos = document.querySelectorAll('[data-time]')

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaSabado.total[index]
  })
}

mostrarTempo()
setInterval(mostrarTempo, 1000)
