import { contact as data } from "./data";

function contact(content) {
    content.innerHTML = ""
    data.forEach(e => {
        let div = document.createElement("div")
        div.setAttribute("id", `${e}`)
        div.style.border = "5px solid red"
        div.textContent = e
        content.appendChild(div)
    });

}

export { contact }