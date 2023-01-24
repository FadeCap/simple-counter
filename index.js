const incrementButton = document.getElementById('add-btn')
const decrementButton = document.getElementById('minus-btn')
const HTMLcount = document.getElementById('count')

let count = 0;
HTMLcount.innerHTML = `${count}`

const add = () => {
  count++
  HTMLcount.innerHTML = `${count}`

}

incrementButton.addEventListener('click', add)

const minus = () => {
  count--
  HTMLcount.innerHTML = `${count}`

}

decrementButton.addEventListener('click', minus)
