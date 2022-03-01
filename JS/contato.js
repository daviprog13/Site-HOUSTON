export default function contato() {
  const btn = document.querySelector('.list li:nth-child(4)')
  const contact = document.querySelector('.contact')
  const quemSomos = document.querySelector('.qs')
  function handleClick(event) {
    this.classList.add('active')    
  }
  function addContact(event) {
    contact.classList.add('active')
  }
  btn.addEventListener('click', handleClick)
  btn.addEventListener('click', addContact)
}

/* colocar se quem somos estver com active desativa do comntato */