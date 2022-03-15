let items = document.querySelectorAll('.welcome__slider .slide')
let currentItem = 0
let isEnabled = true

const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.carousel__item')
const textSlider = document.querySelector('.slider__text__first__param')

function showText(x) {
  textSlider.innerHTML = `0${x + 1}`
}

const activeSlide = (n) => {
  for (let slide of slides) {
    slide.classList.remove('active')
  }
  slides[n].classList.add('active')
}
const activeDot = (n) => {
  for (let dot of dots) {
    dot.classList.remove('active')
  }
  dots[n].classList.add('active')
}
const prepareCurrentSlide = (ind) => {
  activeSlide(ind)
  activeDot(ind)
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    currentItem = indexDot
    prepareCurrentSlide(currentItem)
    showText(currentItem)
  })
})

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length
}

function hideItem(direction) {
  isEnabled = false
  items[currentItem].classList.add(direction)
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('active', direction)
  })
}

function showItem(direction) {
  items[currentItem].classList.add('next', direction)
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction)
    this.classList.add('active')
    isEnabled = true
  })
}

function nextItem(n) {
  hideItem('to-left')
  changeCurrentItem(n + 1)
  showItem('from-right')
}

function previousItem(n) {
  hideItem('to-right')
  changeCurrentItem(n - 1)
  showItem('from-left')
}

document
  .querySelector('.slider__arrow__left')
  .addEventListener('click', function () {
    if (isEnabled) {
      previousItem(currentItem)
      activeDot(currentItem)
      showText(currentItem)
    }
  })

document
  .querySelector('.slider__arrow__right')
  .addEventListener('click', function () {
    if (isEnabled) {
      nextItem(currentItem)
      activeDot(currentItem)
      showText(currentItem)
    }
  })
// ---------------------------------------------------swiper
const swipedetect = (el) => {
  let surface = el
  let startX = 0
  let startY = 0
  let distX = 0
  let distY = 0
  let startTime = 0
  let elapsedTime = 0

  let threshold = 150
  let restraint = 100
  let allowedTime = 300

  surface.addEventListener(
    'mousedown',
    function (e) {
      startX = e.pageX
      startY = e.pageY
      startTime = new Date().getTime()
      e.preventDefault()
    },
    false
  )

  surface.addEventListener(
    'mouseup',
    function (e) {
      distX = e.pageX - startX
      distY = e.pageY - startY
      elapsedTime = new Date().getTime() - startTime
      if (elapsedTime <= allowedTime) {
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          if (distX > 0) {
            if (isEnabled) {
              previousItem(currentItem)
              activeDot(currentItem)
              showText(currentItem)
            }
          } else {
            if (isEnabled) {
              nextItem(currentItem)
              activeDot(currentItem)
              showText(currentItem)
            }
          }
        }
      }
      e.preventDefault()
    },
    false
  )

  surface.addEventListener(
    'touchstart',
    function (e) {
      if (e.target.classList.contains('slider__arrows')) {
        if (e.target.classList.contains('left')) {
          if (isEnabled) {
            previousItem(currentItem)
            activeDot(currentItem)
            showText(currentItem)
          }
        } else {
          if (isEnabled) {
            nextItem(currentItem)
            activeDot(currentItem)
            showText(currentItem)
          }
        }
      }
      var touchobj = e.changedTouches[0]
      startX = touchobj.pageX
      startY = touchobj.pageY
      startTime = new Date().getTime()
      e.preventDefault()
    },
    false
  )

  surface.addEventListener(
    'touchmove',
    function (e) {
      e.preventDefault()
    },
    false
  )

  surface.addEventListener(
    'touchend',
    function (e) {
      var touchobj = e.changedTouches[0]
      distX = touchobj.pageX - startX
      distY = touchobj.pageY - startY
      elapsedTime = new Date().getTime() - startTime
      if (elapsedTime <= allowedTime) {
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          if (distX > 0) {
            if (isEnabled) {
              previousItem(currentItem)
              activeDot(currentItem)
              showText(currentItem)
            }
          } else {
            if (isEnabled) {
              nextItem(currentItem)
              activeDot(currentItem)
              showText(currentItem)
            }
          }
        }
      }
      e.preventDefault()
    },
    false
  )
}

var el = document.querySelector('.slide__container')
swipedetect(el)
