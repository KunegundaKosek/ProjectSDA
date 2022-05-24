
const spnText = document.querySelector('.text')
const spnCursor = document.querySelector('.cursor')
const txt = 'Licytu lub wystaw na sprzedaż!'

let indexText = 0


const addLetter = ()  => {
    spnText.textContent += txt[indexText]
    indexText++
    if(indexText === txt.length) {
        clearInterval(indexTyping)
    }

}
const cursorAnimation = () => {
    // console.log('ok')
    spnCursor.classList.toggle('active')
}

const indexTyping = setInterval(addLetter, 100)
setInterval(cursorAnimation, 200)