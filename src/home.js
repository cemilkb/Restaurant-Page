import { home as data, menu } from "./data";

const menuBtn = document.getElementById("menu-btn")
const homeBtn = document.getElementById("home-btn")
const contactBtn = document.getElementById("contact-btn")

function colorChange(wich) {
    menuBtn.addEventListener("mouseover", () => {
        wich.style.color = "rgb(56 189 248)"
    })

    menuBtn.addEventListener("mouseout", () => {
        wich.style.color = "gold"
    })
    homeBtn.addEventListener("mouseover", () => {
        wich.style.color = "rgb(192 132 252)"
    })

    homeBtn.addEventListener("mouseout", () => {
        wich.style.color = "gold"
    })
    contactBtn.addEventListener("mouseover", () => {
        wich.style.color = "rgb(248 113 113)"
    })

    contactBtn.addEventListener("mouseout", () => {
        wich.style.color = "gold"
    })
}

function borderChange(wich) {
    menuBtn.addEventListener("mouseover", () => {
        wich.style.borderColor = "rgb(56 189 248)"
    })

    menuBtn.addEventListener("mouseout", () => {
        wich.style.borderColor = "gold"
    })
    homeBtn.addEventListener("mouseover", () => {
        wich.style.borderColor = "rgb(192 132 252)"
    })

    homeBtn.addEventListener("mouseout", () => {
        wich.style.borderColor = "gold"
    })
    contactBtn.addEventListener("mouseover", () => {
        wich.style.borderColor = "rgb(248 113 113)"
    })

    contactBtn.addEventListener("mouseout", () => {
        wich.style.borderColor = "gold"
    })
}

function home(content) {
    content.innerHTML = ""
    data.forEach(e => {
        if (e.id == "Brand Name") {
            const h1 = document.createElement("h1")
            h1.innerHTML = e.Content
            h1.classList.add("text-5xl")
            h1.classList.add("text-center")
            h1.classList.add("transition-all")
            h1.classList.add("duration-1000")
            h1.style.color = "gold"
            h1.style.animation = "vanish 2s"
            colorChange(h1)
            content.appendChild(h1)
        }
        else if (e.id == "Title") {
            const h2 = document.createElement("h2")
            h2.innerHTML = e.Content
            h2.classList.add("text-3xl")
            h2.classList.add("text-center")
            h2.classList.add("transition-all")
            h2.classList.add("duration-1000")
            h2.classList.add("mt-2")
            h2.style.color = "gold"
            h2.style.animation = "vanish 2s"
            colorChange(h2)
            content.appendChild(h2)
        }
        else if (e.id == "explanation") {
            const p = document.createElement("h1")
            p.innerHTML = e.Content
            p.classList.add("text-center")
            p.classList.add("text-xl")
            p.classList.add("w-11/12")
            p.classList.add("mx-auto")
            p.classList.add("my-2")
            p.style.animation = "vanish 2s"
            content.appendChild(p)
        }
        else if (e.id == "Exp") {
            const div = document.createElement("div")
            div.classList.add("exp")
            e.Content.forEach(e => {
                //create
                const innerDiv = document.createElement("div")
                const h2 = document.createElement("h2")
                const img = document.createElement("img")
                const p = document.createElement("p")
                //add atribute
                h2.innerHTML = e.id
                h2.classList.add("text-2xl")
                h2.classList.add("transition-all")
                h2.classList.add("duration-1000")
                h2.style.color = "gold"
                img.setAttribute("src", e.img)
                p.innerHTML = e.Content
                borderChange(innerDiv)
                colorChange(h2)
                //append
                innerDiv.appendChild(h2)
                innerDiv.appendChild(img)
                innerDiv.appendChild(p)
                div.appendChild(innerDiv)
            })
            div.style.animation = "vanish 2s"
            content.appendChild(div)
        }
    });

}

export { home }