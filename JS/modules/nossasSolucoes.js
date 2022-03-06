import outsideClick from "./outsideClick.js";
export default function nossasSolucoes(){
  const btn = document.querySelector('.list li:nth-child(2)')
const nossasS = document.querySelector('.ns')
 function openNS() { 
  this.classList.add('active')
  nossasS.classList.add('active')
  outsideClick(this, ()=>{
    this.classList.remove('active')
  nossasS.classList.remove('active')
  }, nossasS)
 }
btn.addEventListener('click', openNS)
}