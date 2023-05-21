// Input of the bill and the number of people
const price = document.querySelector('#totalCount')
const people = document.querySelector('#totalPeople')

// Tip button
const tips = document.querySelectorAll('.tip')

// Where the data will be seen
const pricePerson = document.querySelector('.amountPrice')
const tipPerson = document.querySelector('.singleTip')

// Reset button
const resetButton = document.querySelector('.resetButton')
resetButton.disabled = true
resetButton.style.backgroundColor = '#0D686D'

// Error message
const errorMessage = document.querySelector('.error__message')


let amount = 0
let person = 1
let tip = 0

const pricePersonCalculator = (amount, tip, person) => {
    return ((amount + (amount * tip)) / person).toFixed(2)
}

const tipPersonCalculator = (amount, tip, person) => {
    return ((amount * tip) / person).toFixed(2)
}


price.addEventListener('keyup', () => {
    amount = price.value === '' ? 0 : parseInt(price.value)

    pricePerson.innerHTML = `$${pricePersonCalculator(amount, tip, person).toString()}`
    tipPerson.innerHTML = `$${tipPersonCalculator(amount, tip, person).toString()}`

    if (price.value !== '' && people.value !== '') {
        resetButton.disabled = false
        resetButton.style.backgroundColor = '#26C0ABFF'
    }

})

people.addEventListener('keyup', () => {
    person = people.value === '' ? 0 : parseInt(people.value)
    console.log(parseInt(person) )
    if (parseInt(person) === 0) {
        errorMessage.style.display = 'block'
    } else {
        errorMessage.style.display = 'none'
        pricePerson.innerHTML = `$${pricePersonCalculator(amount, tip, person).toString()}`
        tipPerson.innerHTML = `$${tipPersonCalculator(amount, tip, person).toString()}`
    }

    if (price.value !== '' && people.value !== '') {
        resetButton.disabled = false
        resetButton.style.backgroundColor = '#26C0ABFF'
    }
})


let activeElement = document.querySelector('#cinque')

tips.forEach((element) => {

    if (element.tagName === 'BUTTON') {
        element.addEventListener('click', (e) => {
            activeElement.className = 'tip'
            activeElement = element
            element.className += ' onclick__tip'

            tip = parseFloat(element.value)

            pricePerson.innerHTML = `$${pricePersonCalculator(amount, tip, person).toString()}`
            tipPerson.innerHTML = `$${tipPersonCalculator(amount, tip, person).toString()}`
        })
    } else {
        element.addEventListener('keyup', () => {
            activeElement.className = 'tip'
            tip = parseFloat((element.value / 100).toFixed(2))
            pricePerson.innerHTML = `$${pricePersonCalculator(amount, tip, person).toString()}`
            tipPerson.innerHTML = `$${tipPersonCalculator(amount, tip, person).toString()}`
        })
    }


})




