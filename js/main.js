'use strict'

let container = document.querySelector('.container')

let count = 1
const max = 5
let transitionDuration = getComputedStyle(container).getPropertyValue('--transition-duration')
transitionDuration = parseFloat(transitionDuration) * 1000
let transitionDelay = 50

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

let addNewBlock = setInterval(() => {
    addNewBlockImpl()
    if( count === max + 1) {
        clearInterval(addNewBlock)
    }
}, transitionDelay + transitionDuration);
