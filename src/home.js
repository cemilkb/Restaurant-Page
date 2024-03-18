import { home as data } from "./data";

function home(content) {
    content.innerHTML = ""
    data.forEach(e => {
        let div = document.createElement("div")
        div.setAttribute("id", `${e}`)
        div.style.border = "5px solid red"
        div.textContent = e
        content.appendChild(div)
    });

}

export { home }