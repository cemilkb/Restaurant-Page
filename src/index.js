import './input.css'
import '../dist/output.css'
import menu from './menu'
// import Bu from './assets/kul.png' img çekmek için

const content = document.getElementById("content")
const navs = document.querySelectorAll("nav")

navs.forEach((e) => {
    e.addEventListener("click", () => {
        navs.forEach(e => {
            e.classList.remove("clicked")
        })
        if (e.id == "menu-btn") {
            menu(content)
        } else if (e.id == "home-btn") {
            console.log("home")
        } else {
            console.log("contact")
        }
        e.classList.add("clicked")
    })
})

