let canalDoze = document.getElementById('canal')
let canalDez = document.getElementById('band')
let canalSete = document.getElementById('tve')
let canalCinco = document.getElementById('sbt')
let canalQuatro = document.getElementById('record')
let canalGame = document.getElementById('game')
let canalAv = document.getElementById('rbs')
let ligar = document.getElementById('lig')
let desligar = document.getElementById('des')

function canal12(){
    canalDoze.src = 'https://i.pinimg.com/originals/15/e7/e3/15e7e300166c962d3b8a22f60b5cac9e.gif'
}
function canal10(){
    canalDoze.src = 'https://media.tenor.com/E7QxmVz22ugAAAAd/estudar-computador.gif'
}
function canal07(){
    canalDoze.src = 'https://images.squarespace-cdn.com/content/v1/58c958cde6f2e1f7914d5d62/1492896036926-VPW8Y1R48D897B3YC4HJ/Halloween-giphy-2.gif'
}
function canal05(){
    canalDoze.src = 'https://gifs.eco.br/wp-content/uploads/2022/10/gifs-jogando-video-game-1.gif'
}
function canal04(){
    canalDoze.src = 'https://i.pinimg.com/originals/2b/a6/95/2ba695fd5ecada4d9b337b35e3b7ffbe.gif'
}
function canal03(){
    canalDoze.src = 'https://media.tenor.com/9eXjRJxrgxkAAAAd/super-mario-world-mario.gif'
}
function botaoLigar(){
    canalDoze.src = 'https://www.blogderocha.com.br/wp-content/uploads/2017/02/fora-do-ar.gif'
}
function botaoDesligar(){
    canalDoze.src = ''
}
canalAv.addEventListener('click', canal12);
canalDez.addEventListener('click', canal10);
canalSete.addEventListener('click', canal07);
canalCinco.addEventListener('click', canal05)
canalQuatro.addEventListener('click', canal04)
canalGame.addEventListener('click', canal03)
ligar.addEventListener('click', botaoLigar)
desligar.addEventListener('click', botaoDesligar)