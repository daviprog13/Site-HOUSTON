import outsideClick from "./outsideClick.js";
export default function quemSomos() {
  const btn = document.querySelector('.list li:first-child')
 const quemSomos = document.querySelector('.qs')
function openQS() {
  this.classList.add('active')
  quemSomos.classList.add('active')
  outsideClick(this,()=>{
    this.classList.remove('active')
    quemSomos.classList.remove('active')
  }, quemSomos)
}

btn.addEventListener('click', openQS)

}






