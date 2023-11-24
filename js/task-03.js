const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', (event) => {
    let inputText = input.value
    inputText = inputText.trim()
    if (inputText) {
        output.textContent = inputText
    }
    else {
        output.textContent = "Anonymous"
    }
})