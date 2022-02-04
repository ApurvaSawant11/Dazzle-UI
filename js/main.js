document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
      el.innerHTML = el.innerHTML
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
      hljs.highlightElement(el)
    })
})

const github = document.querySelector(".fa-github");

const hamburger = document.querySelector(".my-hamburger");
const scrollbar = document.querySelector('.scrollbar')
const main = document.querySelector('.main')
const closeSidebar = document.querySelector(".close-sidebar");

github.addEventListener("click", ()=>{
  hamburger.style.display="none";
})

hamburger.addEventListener("click", () => {
    scrollbar.style.display="block"
})

closeSidebar.addEventListener("click", () => {
  scrollbar.style.display="none"
})
