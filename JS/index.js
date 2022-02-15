/* quem somos */
const btns = document.querySelectorAll('.list li')
const quemSomos = document.querySelector('.qs')
function openQS() {
  quemSomos.classList.add('active')
}
function closeQS(){
  quemSomos.classList.remove('active')
}
btns[0].addEventListener('mouseover', openQS)
btns[0].addEventListener('mouseout', closeQS)

/*nossas soluções */
const nossasS = document.querySelector('.ns')
function openNS() {  
  nossasS.classList.add('active')
}
function closeNS() {
  nossasS.classList.remove('active')
}
btns[1].addEventListener('mouseover', openNS)
btns[1].addEventListener('mouseout', closeNS)