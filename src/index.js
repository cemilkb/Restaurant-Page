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
const navs = document.querySelectorAll("nav")
const header = document.getElementById("header")


// Modifie index with home section

//home(content)

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

    e.addEventListener("mouseover", () => {

        if (e.id == "menu-btn") {
            header.style.borderColor = "#ffd9003d"
            header.style.backgroundColor = "#ffd9003d"
            navs.forEach(e => {
                e.style.color = "gold"
            })
        } else if (e.id == "home-btn") {
            header.style.borderColor = "#0000ff4d"
            header.style.backgroundColor = "#0000ff37"
            navs.forEach(e => {
                e.style.color = "blue"
            })
        } else {
            navs.forEach(e => {
                header.style.borderColor = "red"
                header.style.backgroundColor = "#ff000033"
                e.style.color = "red"
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

