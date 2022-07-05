const btns = document.querySelectorAll(".btn")
const display = document.querySelector(".calc-display")
const result = document.querySelector(".btn-result")
const eraser = document.querySelector(".btn-eraser")
const clearAll = document.querySelector(".btn-clear")

btns.forEach(btn => btn.addEventListener("click", e => display.value += e.target.value.trim()))

result.addEventListener("click", () => {
    if (display.value !== "") {
        try {
            let res = display.value
            display.value = eval(res)
        } catch (error) {
            display.value = "Operação invalida!"
            setTimeout(() => {
                display.value = ""
            }, 1000);
        }
    }
})
eraser.addEventListener("click", () => {
    display.value = display.value.substring(0, display.value.length -1)
})
clearAll.addEventListener("click", () => {
    display.value = ""
})