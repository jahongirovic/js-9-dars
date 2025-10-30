let button = document.querySelector('button')
let input = document.querySelector('input')
let select = document.querySelector('select')

let voices = []

button.addEventListener('click', () => {
    console.log("DEBUGGING")
    const speech = new SpeechSynthesisUtterance(input.value)
    speech.lang = 'uz-UZ'
    speech.voice = voices.find(voice => voice.name === select.value)
    speech.pitch = 1.2
    speech.rate = 1
    speech.volume = 1

    window.speechSynthesis.speak(speech)
})

function loadVoices() {
    voices = window.speechSynthesis.getVoices()
    console.log(voices)
    voices.forEach(voice => {
        let option = document.createElement('option')
        option.value = voice.name
        option.innerText = voice.name
        select.appendChild(option)
    })
}

window.speechSynthesis.onvoiceschanged = loadVoices;

loadVoices()