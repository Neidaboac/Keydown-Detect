const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const eKey = $('.card.key p:last-child')
const eLocation = $('.card.location p:last-child')
const eKeycode = $('.card.keycode p:last-child')
const eCode = $('.card.code p:last-child')
const alert = $('.alert')
const box = $('.box')
const result = $('.result')

document.addEventListener('keydown', e => {

    if (e.keyCode === 32) {
        eKey.innerText = 'Space'
    } else {
        eKey.innerText = e.key
    }
    // eKey.innerText = e.keyCode === 32 ? 'Space' : e.key // cách khác ngắn hơn
    // eKey.innerText = e.key // cách này bị lỗi phím space
    eLocation.innerText = e.location
    eKeycode.innerText = e.keyCode
    eCode.innerText = e.code
    result.innerText = e.keyCode

    alert.classList.add('hide')
    box.classList.remove('hide')
})