let countEl = document.getElementById("btn")
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
}
let saveEl = document.getElementById("save-el")
function save(){
    let countStr = count + " - "
    //saveEl.innerText += countStr
    saveEl.textContent += countStr // Alternative and better than innerText
    console.log(count)
}
