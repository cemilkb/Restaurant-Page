import { home as data, menu } from "./data";

const menuBtn = document.getElementById("menu-btn")
const homeBtn = document.getElementById("home-btn")
const contactBtn = document.getElementById("contact-btn")

function bu (gelen){
    menuBtn.addEventListener("mouseover", ()=>{
        gelen.style.color = "rgb(56 189 248)"
    })

    menuBtn.addEventListener("mouseout", ()=>{
        gelen.style.color = "rgb(74 222 128)"
    })
    homeBtn.addEventListener("mouseover", ()=>{
        gelen.style.color = "rgb(192 132 252)"
    })

    homeBtn.addEventListener("mouseout", ()=>{
        gelen.style.color = "rgb(74 222 128)"
    })
    contactBtn.addEventListener("mouseover", ()=>{
        gelen.style.color = "rgb(248 113 113)"
    })

    contactBtn.addEventListener("mouseout", ()=>{
        gelen.style.color = "rgb(74 222 128)"
    })
}

function home(content) {
    content.innerHTML = ""
    data.forEach(e => {
        if (e.id == "Brand Name") {
            let h1 = document.createElement("h1")
            h1.innerHTML = e.Content
            h1.classList.add("text-5xl")
            h1.classList.add("text-center")
            h1.classList.add("transition-all")
            h1.classList.add("duration-1000")
            h1.style.color = "rgb(74 222 128)"
            bu(h1)
            content.appendChild(h1)
        }

    });

}

export { home }