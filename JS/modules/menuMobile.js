export default function menuMobile() {
  const btn = document.querySelector('[data-menu]')
  const menu = document.querySelector('.menu-mobile')
  const close = document.querySelector('[data-close]')
  function activeMobile() {
    menu.classList.add('active')
  }
  function removeMobile() {
    menu.classList.remove('active')
  }
  close.addEventListener('click', removeMobile)
  btn.addEventListener('click', activeMobile)
}