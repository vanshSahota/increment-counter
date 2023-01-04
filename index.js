let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
  console.log("Increment chal gya");
  count += 1
  countEl.innerText = count
}

function save() {
  console.log("save ho gya");
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}
