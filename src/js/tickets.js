function showTotalPrice() {
  const rad1 = document.getElementById('radio1')
  const rad2 = document.getElementById('radio2')
  const rad3 = document.getElementById('radio3')
  const sel1 = document.getElementById('select1')
  const sel2 = document.getElementById('select2')
  const sel3 = document.getElementById('select3')

  const minus1 = document.getElementById('minus1')
  const minus2 = document.getElementById('minus2')
  const plus1 = document.getElementById('plus1')
  const plus2 = document.getElementById('plus2')

  const minus1form = document.getElementById('minus1form')
  const minus2form = document.getElementById('minus2form')
  const plus1form = document.getElementById('plus1form')
  const plus2form = document.getElementById('plus2form')

  const but = document.getElementById('form__button')
  const close = document.getElementById('close')

  const formTicketsBasic = Array.from(document.getElementsByClassName('form__basic__price'))
  const formTicketsSenior = Array.from(document.getElementsByClassName('form__senior__price'))
  const formTotalPriceBasic = document.querySelector('.form__total__basic__price')
  const formTotalPriceSenior = document.querySelector('.form__total__senior__price')
  const formTotalPrice = document.querySelector('.form__total__price')
  const formSelect = document.querySelector('.select__long__field')

  const ticketType = document.querySelector('.ticket__text')
  const amountTicketsBasic = document.querySelector('.basic__price')
  const amountTicketsSenior = document.querySelector('.senior__price')
  const formNumber1 = document.getElementById('numberForm1')
  const formNumber2 = document.getElementById('numberForm2')
  const formNumber3 = document.getElementById('numberForm3')
  const formNumber4 = document.getElementById('numberForm4')

  let result = 0
  let currentDot = 0
  const totalPrice = document.querySelector('.tickets_price')

  function activeRadio() {
    rad1.addEventListener('click', (event) => {
      calcOverallPrice()
      const { rad2, rad3, ticketsPrice } = getLinkFromElements()
      setLocalStorage('rad1', event.target.checked)
      setLocalStorage('rad2', rad2.checked)
      setLocalStorage('rad3', rad3.checked)
      setLocalStorage('ticketsPrice', ticketsPrice.innerHTML)
    })
    rad2.addEventListener('click', (event) => {
      calcOverallPrice()
      const { rad1, rad3, ticketsPrice } = getLinkFromElements()
      setLocalStorage('rad1', rad1.checked)
      setLocalStorage('rad2', event.target.checked)
      setLocalStorage('rad3', rad3.checked)
      setLocalStorage('ticketsPrice', ticketsPrice.innerHTML)
    })
    rad3.addEventListener('click', (event) => {
      calcOverallPrice()
      const { rad1, rad2, ticketsPrice } = getLinkFromElements()
      setLocalStorage('rad1', rad1.checked)
      setLocalStorage('rad2', rad2.checked)
      setLocalStorage('rad3', event.target.checked)
      setLocalStorage('ticketsPrice', ticketsPrice.innerHTML)
    })
  }
  activeRadio()

  function calcNumber() {
    minus1.addEventListener('click', () => {
      const { amountTicketsBasic, ticketsPrice } = getLinkFromElements()
      setLocalStorage('amountTicketsBasic', amountTicketsBasic.value)
      setLocalStorage('ticketsPrice', ticketsPrice.innerHTML)
      formNumber1.value = amountTicketsBasic.value
      formNumber3.value = amountTicketsBasic.value
      calcOverallPrice()
    })
    minus2.addEventListener('click', () => {
      const { amountTicketsSenior, ticketsPrice } = getLinkFromElements()
      setLocalStorage('amountTicketsSenior', amountTicketsSenior.value)
      setLocalStorage('ticketsPrice', ticketsPrice.innerHTML)
      formNumber2.value = amountTicketsSenior.value
      formNumber4.value = amountTicketsSenior.value
      calcOverallPrice()
    })
    plus1.addEventListener('click', () => {
      const { amountTicketsBasic, ticketsPrice } = getLinkFromElements()
      setLocalStorage('amountTicketsBasic', amountTicketsBasic.value)
      setLocalStorage('ticketsPrice', ticketsPrice.innerHTML)
      formNumber1.value = amountTicketsBasic.value
      formNumber3.value = amountTicketsBasic.value
      calcOverallPrice()
    })
    plus2.addEventListener('click', () => {
      const { amountTicketsSenior, ticketsPrice } = getLinkFromElements()
      setLocalStorage('amountTicketsSenior', amountTicketsSenior.value)
      setLocalStorage('ticketsPrice', ticketsPrice.innerHTML)
      formNumber2.value = amountTicketsSenior.value
      formNumber4.value = amountTicketsSenior.value
      calcOverallPrice()
    })
  }
  calcNumber()
  function calcNumberForBut() {
    formNumber1.value = amountTicketsBasic.value
    formNumber3.value = amountTicketsBasic.value
    formNumber2.value = amountTicketsSenior.value
    formNumber4.value = amountTicketsSenior.value
  }

  function calcFormNumber() {
    minus1form.addEventListener('click', () => {
      amountTicketsBasic.value = formNumber1.value
      formNumber3.value = formNumber1.value
      calcOverallPrice()
    })
    minus2form.addEventListener('click', () => {
      amountTicketsSenior.value = formNumber2.value
      formNumber4.value = formNumber2.value
      calcOverallPrice()
    })
    plus1form.addEventListener('click', () => {
      amountTicketsBasic.value = formNumber1.value
      formNumber3.value = formNumber1.value
      calcOverallPrice()
    })
    plus2form.addEventListener('click', () => {
      amountTicketsSenior.value = formNumber2.value
      formNumber4.value = formNumber2.value
      calcOverallPrice()
    })
  }
  calcFormNumber()
  function calcNumberForClose() {
    amountTicketsBasic.value = formNumber1.value
    formNumber3.value = formNumber1.value
    amountTicketsSenior.value = formNumber2.value
    formNumber4.value = formNumber2.value
  }
  function calcTotalPrice() {
    totalPrice.innerHTML =
      isChecked().value * amountTicketsBasic.value + amountTicketsSenior.value * (isChecked().value / 2)
  }
  function calcTotalBasicPrice() {
    formTotalPriceBasic.innerHTML = formNumber1.value * formSelect.value
  }
  function calcTotalSeniorPrice() {
    formTotalPriceSenior.innerHTML = (formNumber2.value * formSelect.value) / 2
  }
  function calcFormTotal() {
    formTotalPrice.innerHTML = formNumber1.value * formSelect.value + (formNumber2.value * formSelect.value) / 2
  }
  function calcFormTotalPrice() {
    formTicketsBasic.forEach((x) => {
      x.innerHTML = formSelect.value
    })
    formTicketsSenior.forEach((x) => {
      x.innerHTML = formSelect.value / 2
    })
  }
  function calcOverallPrice() {
    calcTotalPrice()
    calcTotalBasicPrice()
    calcTotalSeniorPrice()
    calcFormTotal()
    calcFormTotalPrice()
    calcNumberForBut()
    calcNumberForClose()
  }

  const isChecked = () => {
    if (rad1.checked === true) {
      sel1.selected = true
      ticketType.innerHTML = 'Permanent exhibition'
      return rad1
    }
    if (rad2.checked === true) {
      ticketType.innerHTML = 'Temporary exhibition'
      sel2.selected = true
      return rad2
    }
    if (rad3.checked === true) {
      ticketType.innerHTML = 'Combined Admission'
      sel3.selected = true
      return rad3
    }
  }

  const isSelected = () => {
    if (sel1.selected === true) {
      ticketType.innerHTML = 'Permanent exhibition'
      rad1.checked = true
      return sel1
    }
    if (sel2.selected === true) {
      ticketType.innerHTML = 'Temporary exhibition'
      rad2.checked = true
      return sel2
    }
    if (sel3.selected === true) {
      ticketType.innerHTML = 'Combined Admission'
      rad3.checked = true
      return sel3
    }
  }

  but.addEventListener('click', () => {
    isChecked()
    calcOverallPrice()
    removeEvList()
  })
  close.addEventListener('click', () => {
    isSelected()
    calcOverallPrice()
    addEvList()
  })
  formSelect.addEventListener('click', () => {
    isSelected()
    calcOverallPrice()
  })
}
showTotalPrice()

window.addEventListener('load', () => {
  init()
})

function init() {
  const { rad1, rad2, rad3, amountTicketsBasic, amountTicketsSenior, ticketsPrice } = getLinkFromElements()
  if (getLocalStorage('rad1')) {
    rad1.checked = getLocalStorage('rad1')
  }
  if (getLocalStorage('rad2')) {
    rad2.checked = getLocalStorage('rad2')
  }
  if (getLocalStorage('rad3')) {
    rad3.checked = getLocalStorage('rad3')
  }
  if (getLocalStorage('amountTicketsBasic')) {
    amountTicketsBasic.value = getLocalStorage('amountTicketsBasic')
  }
  if (getLocalStorage('amountTicketsSenior')) {
    amountTicketsSenior.value = getLocalStorage('amountTicketsSenior')
  }
  if (getLocalStorage('ticketsPrice')) {
    ticketsPrice.innerHTML = getLocalStorage('ticketsPrice')
  }
}

function getLocalStorage(key) {
  const data = localStorage.getItem(key)
  if (data === null || data === 'false') {
    return false
  }
  return data
}
function setLocalStorage(key, value) {
  localStorage.setItem(key, value)
}
function getLinkFromElements() {
  const rad1 = document.getElementById('radio1')
  const rad2 = document.getElementById('radio2')
  const rad3 = document.getElementById('radio3')
  const sel1 = document.getElementById('select1')
  const sel2 = document.getElementById('select2')
  const sel3 = document.getElementById('select3')

  const formTicketsBasic = Array.from(document.getElementsByClassName('form__basic__price'))
  const formTicketsSenior = Array.from(document.getElementsByClassName('form__senior__price'))
  const formTotalPriceBasic = document.querySelector('.form__total__basic__price')
  const formTotalPriceSenior = document.querySelector('.form__total__senior__price')
  const formTotalPrice = document.querySelector('.form__total__price')
  const formSelect = document.querySelector('.select__long__field')
  const ticketsPrice = document.querySelector('.tickets_price')

  const ticketType = document.querySelector('.ticket__text')
  const amountTicketsBasic = document.querySelector('.basic__price')
  const amountTicketsSenior = document.querySelector('.senior__price')
  const formNumber1 = document.getElementById('numberForm1')
  const formNumber2 = document.getElementById('numberForm2')
  const formNumber3 = document.getElementById('numberForm3')
  const formNumber4 = document.getElementById('numberForm4')

  return {
    rad1,
    rad2,
    rad3,
    sel1,
    sel2,
    sel3,
    formTicketsBasic,
    formTicketsSenior,
    formTotalPriceBasic,
    formTotalPriceSenior,
    formTotalPrice,
    formSelect,
    ticketsPrice,
    ticketType,
    amountTicketsBasic,
    amountTicketsSenior,
    formNumber1,
    formNumber2,
    formNumber3,
    formNumber4,
  }
}
// -----------------------------------------------------------------------------------------------

var dateControl = document.querySelector('input[type="date"]')
const getValueAndMinDate = () => {
  const date = new Date()
  let zero = '0'
  let zeroMonth = '0'
  if (date.getDate() > 9) {
    zero = ''
  }
  if (date.getMonth() >= 9) {
    zeroMonth = ''
  }
  dateControl.value = `${date.getFullYear()}-${zeroMonth + (date.getMonth() + 1)}-${zero + date.getDate()}`
  dateControl.min = `${date.getFullYear()}-${zeroMonth + (date.getMonth() + 1)}-${zero + date.getDate()}`
}
getValueAndMinDate()

function showDateText() {
  function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay()
    return isNaN(dayOfWeek)
      ? null
      : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek]
  }
  function getMonth(date) {
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const month = new Date(date).getMonth()
    return isNaN(month) ? null : months[month + 1]
  }

  const dateText = document.querySelector('.date__text')

  dateText.innerHTML = `${getDayOfWeek(dateControl.value)}, ${getMonth(dateControl.value)} ${new Date(
    dateControl.value
  ).getDate()}`
}
showDateText()
function changeDate() {
  dateControl.addEventListener('change', showDateText)
}
changeDate()
// --------------------------------------------------------------------------------------------------------------
const time = document.querySelector('.timepicker')

time.addEventListener('change', () => {
  document.querySelector('.time__text').innerHTML = `${time.value.slice(0, 2)} : ${time.value.slice(3)}`
})
// --------------------------------------------------------------------------------------
const NAME_INPUT = document.querySelector('.name_input')
NAME_INPUT.addEventListener('change', () => {
  const NAME_INPUT_VALUE = NAME_INPUT.value
  const hasRussianLetters = /[А-Яа-я]/.test(NAME_INPUT_VALUE)
  const hasEnglishLetters = /[A-Za-z]/.test(NAME_INPUT_VALUE)
  const hasSpace = /\s/.test(NAME_INPUT_VALUE)
  const hasDigit = /\d/.test(NAME_INPUT_VALUE)
  const hasSym = /[().^+]/.test(NAME_INPUT_VALUE)

  if (
    NAME_INPUT.value.length >= 3 &&
    NAME_INPUT.value.length <= 15 &&
    (hasEnglishLetters || hasRussianLetters) &&
    !hasDigit &&
    !hasSym
  ) {
    document.querySelector('.input__field__name').classList.remove('invalid')
    document.querySelector('.invalid__text__name').classList.add('invalid__text__none')
  } else {
    document.querySelector('.input__field__name').classList.add('invalid')
    document.querySelector('.invalid__text__name').classList.remove('invalid__text__none')
  }
})

const EMAIL_INPUT = document.querySelector('.email_input')

EMAIL_INPUT.addEventListener('change', () => {
  const regForEmail = /^(\w|-){3,15}\@[a-zA-z]{4,}\.[a-zA-Z]{2,}$/g.test(EMAIL_INPUT.value)

  if (regForEmail) {
    document.querySelector('.input__field__email').classList.remove('invalid')
    document.querySelector('.invalid__text__email').classList.add('invalid__text__none')
  } else {
    document.querySelector('.input__field__email').classList.add('invalid')
    document.querySelector('.invalid__text__email').classList.remove('invalid__text__none')
  }
})

const PHONE_INPUT = document.querySelector('.phone_input')

PHONE_INPUT.addEventListener('change', () => {
  const regForPhoneWoSep = /^\+|\d$/.test(PHONE_INPUT.value)
  const regForPhoneWithSep = /^\+|[\d\-\ ]$/.test(PHONE_INPUT.value)
  const hasRussianLetters = /[А-Яа-я]/.test(PHONE_INPUT.value)
  const hasEnglishLetters = /[A-Za-z]/.test(PHONE_INPUT.value)
  const hasDigit = /\d/.test(PHONE_INPUT.value)
  const hasSym = /[().^_*\/&\?%\$#@!`]/.test(PHONE_INPUT.value)

  let digitsResult

  function calcDigitValue(x) {
    digitsResult = 0
    for (let i = 0; i < x.length; i++) {
      if (Number(x[i]) >= 1) {
        digitsResult++
      }
    }
    return digitsResult
  }
  if (
    (regForPhoneWoSep &&
      !hasSym &&
      !hasRussianLetters &&
      !hasEnglishLetters &&
      hasDigit &&
      calcDigitValue(PHONE_INPUT.value) <= 10) ||
    (regForPhoneWithSep &&
      !hasSym &&
      !hasRussianLetters &&
      !hasEnglishLetters &&
      calcDigitValue(PHONE_INPUT.value) <= 10 &&
      hasDigit)
  ) {
    document.querySelector('.input__field__phone').classList.remove('invalid')
    document.querySelector('.invalid__text__phone').classList.add('invalid__text__none')
  } else {
    document.querySelector('.input__field__phone').classList.add('invalid')
    document.querySelector('.invalid__text__phone').classList.remove('invalid__text__none')
  }
})
