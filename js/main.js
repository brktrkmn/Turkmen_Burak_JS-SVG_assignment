let productsSVG = document.querySelector('.productsSVG')
let productsDesc = document.querySelector('.productsDesc')
let historySVG = document.querySelector('.historySVG')
let historyDesc = document.querySelector('.historyDesc')
let respSVG = document.querySelector('.respSVG')
let respDesc = document.querySelector('.respDesc')
let contactSVG = document.querySelector('.contactSVG')
let contactDesc = document.querySelector('.contactDesc')
let header1 = document.querySelector('.header1')
let header2 = document.querySelector('.header2')
let header3 = document.querySelector('.header3')
let header4 = document.querySelector('.header4')
let click = document.querySelector('#clickBtn')
let header = document.querySelector('.header')
let click1 = document.querySelector('.header1')
let click2 = document.querySelector('.header2')
let click3 = document.querySelector('.header3')
let click4 = document.querySelector('.header4')
const buttons = document.querySelectorAll('.right')

header.classList.add('hidden')

function clickMore() {
    productsSVG.classList.remove('hidden');
    historySVG.classList.remove('hidden');
    respSVG.classList.remove('hidden');
    contactSVG.classList.remove('hidden');
    header.classList.remove('hidden')
    header1.classList.remove('hidden');
    header2.classList.remove('hidden');
    header3.classList.remove('hidden');
    header4.classList.remove('hidden');
    click.classList.add('hidden');
}

function clickProd() {
    productsDesc.classList.remove('hidden');
    historySVG.classList.add('hidden');
    respSVG.classList.add('hidden');
    contactSVG.classList.add('hidden');
    header2.classList.add('hidden');
    header3.classList.add('hidden');
    header4.classList.add('hidden');
}

function clickHist() {
    productsSVG.classList.add('hidden');
    productsDesc.classList.add('hidden');
    historySVG.classList.remove('hidden');
    historyDesc.classList.remove('hidden');
    respSVG.classList.add('hidden');
    contactSVG.classList.add('hidden');
    header1.classList.add('hidden');
    header2.classList.remove('hidden');
    header3.classList.add('hidden');
    header4.classList.add('hidden');
}

function clickResp() {
    productsSVG.classList.add('hidden');
    productsDesc.classList.add('hidden');
    historySVG.classList.add('hidden');
    historyDesc.classList.add('hidden');
    respSVG.classList.remove('hidden');
    respDesc.classList.remove('hidden');
    contactSVG.classList.add('hidden');
    header1.classList.add('hidden');
    header2.classList.add('hidden');
    header3.classList.remove('hidden');
    header4.classList.add('hidden');
}

function clickContact() {
    productsSVG.classList.add('hidden');
    productsDesc.classList.add('hidden');
    historySVG.classList.add('hidden');
    historyDesc.classList.add('hidden');
    respSVG.classList.add('hidden');
    respDesc.classList.add('hidden');
    contactDesc.classList.remove('hidden');
    header1.classList.add('hidden');
    header2.classList.add('hidden');
    header3.classList.add('hidden');
    header4.classList.remove('hidden');
}

function backBtn () {
    productsSVG.classList.remove('hidden');
    productsDesc.classList.add('hidden');
    historySVG.classList.remove('hidden');
    historyDesc.classList.add('hidden');
    respSVG.classList.remove('hidden');
    respDesc.classList.add('hidden');
    contactSVG.classList.remove('hidden');
    contactDesc.classList.add('hidden');
    header1.classList.remove('hidden');
    header2.classList.remove('hidden');
    header3.classList.remove('hidden');
    header4.classList.remove('hidden');
}

click.addEventListener("click", clickMore, false)
click1.addEventListener("click", clickProd, false)
click2.addEventListener("click", clickHist, false)
click3.addEventListener("click", clickResp, false)
click4.addEventListener("click", clickContact, false)
for (let right of buttons) {
    right.addEventListener("click", backBtn, false)
}

