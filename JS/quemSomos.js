export default function quemSomos(params) {
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
}






