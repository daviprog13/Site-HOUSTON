export default function nossasSolucoes(){
  const btns = document.querySelectorAll('.list li')
const nossasS = document.querySelector('.ns')
 function openNS() {  
   nossasS.classList.add('active')
 }
function closeNS() {
  nossasS.classList.remove('active')
}
btns[1].addEventListener('mouseover', openNS)
btns[1].addEventListener('mouseout', closeNS)
}