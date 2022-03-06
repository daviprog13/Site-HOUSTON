export default function AccordionList(){
  const title = document.querySelectorAll('[data-acordion] dt')
  function handleClick() {    
    this.nextElementSibling.classList.toggle('active')      
  }
  
  title.forEach(i =>{
    i.addEventListener('click', handleClick)
  })
}



