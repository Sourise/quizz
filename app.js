const responses = ["b", "c", "b", "a", "c"]
const emoji = ["", "", "", "", ""]

const form = document.querySelector('.quizz-form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    const results = []

    const radioButtons = document.querySelectorAll("input[type='radio']:checked")

    console.log(radioButtons)
}