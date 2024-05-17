const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')
const navLinks = document.querySelectorAll(" div ul li a ")
const currentpage = window.location.href
if(bar){
bar.addEventListener('click', ()=>{
    nav.classList.add('active')
    close.style.display='flex'

})}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
        close.style.display='none'
    })
}

navLinks.forEach(link => {
  if(link.href == currentpage)
  {
    link.classList.add('active')
  }  
});