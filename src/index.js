import './input.css'
import '../dist/output.css'
// import Bu from './assets/kul.png' img çekmek için

const div = document.getElementById("content")
const navs = document.querySelectorAll("nav")

navs.forEach((e) => {
    e.addEventListener("click", () => {
        navs.forEach(e => {
            e.classList.remove("clicked")
        })
        e.classList.add("clicked")
    })
})

div.textContent = "ANANZA"