// import section

import './input.css'
import '../dist/output.css'
import { home } from './home'
import { menu } from './menu'
import { contact } from './contact'
import bg from './assets/bg.jpg'
// import Bu from './assets/kul.png' img çekmek için

/**
 const divImg = document.querySelector(".bg-img")
const bgImg = new Image()
bgImg.src = bg
divImg.appendChild(bgImg)
 */

// Get element

const content = document.getElementById("content")
const navs = document.querySelectorAll("nav")

// Modifie index with home section
home(content)

// Modifie DOM witch wich btn click

navs.forEach((e) => {
    e.addEventListener("click", () => {
        navs.forEach(e => {
            e.classList.remove("clicked")
        })
        if (e.id == "menu-btn") {
            menu(content)
        } else if (e.id == "home-btn") {
            home(content)
        } else {
            contact(content)
        }
        e.classList.add("clicked")
    })
})

