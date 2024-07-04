'use strict'

let container = document.querySelector('.container')

const interval = 500
let count = 1
const max = 5
let transitionDuration = getComputedStyle(container).getPropertyValue('--transition-duration')
transitionDuration = parseFloat(transitionDuration) * 1000
let transitionDelay = 100

function addNewBlockImpl() {
    let block = document.createElement('div')
    let text = document.createElement('p')
    text.textContent = `${count}`
    block.appendChild(text)

    block.classList.add('block')
    block.classList.add('hidden')
    container.appendChild(block)
    setTimeout(
        () => {
            block.classList.add('show')
        }
    , transitionDelay)
    setTimeout(
        () => {
            block.classList.add('front')
        }
    , transitionDuration)
    ++count
}

addNewBlockImpl()

let addNewBlock = setInterval(() => {
    addNewBlockImpl()
    if( count === 6) {
        clearInterval(addNewBlock)
    }
}, transitionDelay + transitionDuration);