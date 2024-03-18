import { menu as data } from "./data";

function menu(content) {
    content.innerHTML = ""
    data.forEach(e => {
        let div = document.createElement("div")
        div.setAttribute("id", `${e}`)
        div.style.border = "5px solid red"
        div.textContent = e
        div.style.animation = "vanish 2s"
        content.appendChild(div)
    });    

}

export { menu }