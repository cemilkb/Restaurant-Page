import { contact as data } from "./data";
import { colorChange, borderChange } from "./home";

function contact(content) {
    content.innerHTML = ""
    data.forEach(e => {
        if (e.id == "Title") {
            const h1 = document.createElement("h1")
            h1.innerHTML = e.Content
            h1.style.color = "gold"
            h1.classList.add("text-5xl")
            h1.classList.add("text-center")
            h1.classList.add("transition-all")
            h1.classList.add("duration-1000")
            colorChange(h1)
            content.appendChild(h1)
        }
        else if (e.id == "Welcome") {
            const p = document.createElement("p")
            p.innerHTML = e.Content
            p.classList.add("text-xl")
            p.classList.add("text-center")
            p.classList.add("w-[90%]")
            p.classList.add("mx-auto")
            p.classList.add("mt-2")
            content.appendChild(p)
        }
        else if (e.id == "Adress") {
            const div = document.createElement("div")
            e.Content.forEach(e => {
                const anch = document.createElement("a")
                anch.innerHTML = e.Content
                anch.setAttribute("href", e.Src)
                anch.setAttribute("target", "blank")
                anch.classList.add("w-[100%]")
                anch.classList.add("text-center")
                anch.classList.add("text-4xl")
                anch.classList.add("md:w-[40%]")
                anch.classList.add("transition-all")
                anch.classList.add("duration-1000")
                anch.style.color = "gold"
                colorChange(anch)
                div.appendChild(anch)
            })
            div.classList.add("flex")
            div.classList.add("flex-wrap")
            div.classList.add("gap-4")
            div.classList.add("justify-center")
            content.appendChild(div)
        }
    });
    content.classList.add("flex")
    content.classList.add("flex-col")
    content.classList.add("justify-around")
}



export { contact }