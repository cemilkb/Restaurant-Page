// import section

import './input.css'
import '../dist/output.css'
import { home } from './home'
import { menu } from './menu'
import { contact } from './contact'

// Get element

const divImg = document.querySelector(".bg-img")
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
            divImg.style.opacity = 0
        } else if (e.id == "home-btn") {
            home(content)
            divImg.style.opacity = 1
        } else {
            contact(content)
            divImg.style.opacity = 0
        }
        e.classList.add("clicked")
    })
})

