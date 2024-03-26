import { menu as data } from "./data";
import { colorChange, borderChange } from "./home";

function menu(content) {
    content.innerHTML = ""
    data.forEach(e => {
        if (e.id == "Title") {
            const h1 = document.createElement("h1")
            h1.innerHTML = e.Content
            //styling
            h1.classList.add("text-5xl")
            h1.classList.add("text-center")
            h1.classList.add("transition-all")
            h1.classList.add("duration-1000")
            h1.style.color = "gold"
            h1.style.animation = "vanish 2s"
            colorChange(h1)
            content.appendChild(h1)
        } else if (e.id == "Cards") {
            const cards = document.createElement("div")
            e.Content.forEach(e => {
                const card = document.createElement("div")
                const h2 = document.createElement("h2")
                const img = document.createElement("img")
                const p = document.createElement("p")
                //innetHTML
                h2.innerHTML = e.id.toUpperCase()
                img.setAttribute("src", e.img)
                p.innerHTML = e.Content
                //styling
                img.classList.add("w-40")
                img.classList.add("m-auto")
                h2.classList.add("text-center")
                h2.classList.add("transition-all")
                h2.classList.add("duration-1000")
                h2.style.color = "gold"
                p.classList.add("text-center")
                p.classList.add("m-auto")
                p.classList.add("overflow-y-auto")
                p.classList.add("h-[120px]")
                p.classList.add("pr-2")
                p.classList.add("p-2")
                p.classList.add("w-[50%]")
                card.style.background = `url(${e.bg})`
                card.style.backgroundSize = `cover`
                card.style.backgroundPosition = `center`
                card.classList.add("border")
                card.style.borderColor = "gold"
                card.style.borderRadius = "5px"
                card.classList.add("flex")
                card.classList.add("flex-col")
                card.classList.add("gap-2")
                card.classList.add("pt-3")
                card.classList.add("w-11/12")
                card.classList.add("md:w-3/12")
                card.classList.add("h-[300px]")
                card.classList.add("transition-all")
                card.classList.add("duration-1000")
                borderChange(card)
                colorChange(h2)
                //append
                card.appendChild(h2)
                card.appendChild(img)
                card.appendChild(p)
                cards.appendChild(card)
            })

            cards.classList.add("mt-5")
            cards.classList.add("flex")
            cards.classList.add("flex-wrap")
            cards.classList.add("items-center")
            cards.classList.add("justify-center")
            cards.classList.add("gap-10")
            cards.style.animation ="vanish 2s"

            content.appendChild(cards)
        }
    });

}

export { menu }