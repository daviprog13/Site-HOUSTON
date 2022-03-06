import outsideClick from "./outsideClick.js";
export default function contato() {
  const btn = document.querySelector('.list li:nth-child(4)')
  const contact = document.querySelector('.contact')
  
  function handleClick() {
    this.classList.add('active')
    contact.classList.add('active')  
    outsideClick(this,()=>{
      this.classList.remove('active')
      contact.classList.remove('active')
    }, contact)  
  }
  btn.addEventListener('click', handleClick)
 
}