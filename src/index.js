// import section

import './input.css'
import '../dist/output.css'
import { home } from './home'
import { menu } from './menu'
import { contact } from './contact'
import deneme from '../dist/assets/bg.jpg'

// Get element

const divImg = document.querySelector(".bg-img")
const content = document.getElementById("content")
const downUp = document.getElementById("down-up")
const navs = document.querySelectorAll("nav")
const header = document.getElementById("header")

// Reactive navbar

let show = false

downUp.addEventListener("click", () => {

    if (show == true) {
        downUp.innerHTML = "  ▽"
        header.style.height = "0px"
        show = false
    } else {
        downUp.innerHTML = "  △"
        header.style.height = "50px"
        show = true
    }
})

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

    e.addEventListener("mouseover", () => {

        if (e.id == "menu-btn") {
            navs.forEach(e => {
                e.style.color = "rgb(56 189 248)"
            })
        } else if (e.id == "home-btn") {
            navs.forEach(e => {
                e.style.color = "rgb(192 132 252)"
            })
        } else {
            navs.forEach(e => {
                e.style.color = "rgb(248 113 113)"
            })
        }


    })

    e.addEventListener("mouseout", () => {
        header.style.borderColor = ""
        header.style.backgroundColor = ""
        navs.forEach(e => {
            e.style.color = "white"
        })
    })
})

