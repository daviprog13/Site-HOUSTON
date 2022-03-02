export default function outsideClick(element,callback, element2) {
  const html = document.documentElement;
  const contact = document.querySelector('.contact')
  function handleOutsideClick(event) {
   if(!element.contains(event.target) && !element2.contains(event.target))
    callback()
  }
  html.addEventListener('click', handleOutsideClick)
}

