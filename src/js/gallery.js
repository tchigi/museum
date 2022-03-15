function galleryShuffle() {
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5)
  }

  const pictureInnerContainer1 = document.querySelector(
    '.gallery__block__first__column'
  )
  const pictureInnerContainer2 = document.querySelector(
    '.gallery__block__second__column'
  )
  const pictureInnerContainer3 = document.querySelector(
    '.gallery__block__third__column'
  )
  const array1 = [
    `<img class="gallery-img slide-in" src="assets/img/galery/galery2.jpg" alt="galery2">`,
    `<img class="gallery-img slide-in" src="assets/img/galery/galery9.jpg" alt="galery9">`,
    `<img class="gallery-img slide-in" src="assets/img/galery/galery4.jpg" alt="galery4">`,
    `<img class="gallery-img slide-in" src="assets/img/galery/galery6.jpg" alt="galery6">`,
  ]
  shuffle(array1).map(function (x) {
    pictureInnerContainer1.innerHTML += x
  })

  const array2 = [
    `<img class="gallery-img slide-in" src="assets/img/galery/galery1.jpg" alt="galery1">`,
    `<img class="gallery-img slide-in" src="assets/img/galery/galery8.jpg" alt="galery8">`,
    `<img class="gallery-img slide-in" src="assets/img/galery/galery3.jpg" alt="galery3">`,
    `<img class="gallery-img slide-in" src="assets/img/galery/galery5.jpg" alt="galery5">`,
  ]
  shuffle(array2).map(function (x) {
    pictureInnerContainer2.innerHTML += x
  })
  const array3 = [
    `<img class="gallery-img slide-in" src="assets/img/galery/galery7.jpg" alt="galery7">`,
    `<img class="gallery-img slide-in" src="assets/img/galery/galery10.jpg" alt="galery10">`,
    `<img class="gallery-img slide-in" src="assets/img/galery/galery15.jpg" alt="galery15">`,
    `<img class="gallery-img slide-in" src="assets/img/galery/galery12.jpg" alt="galery12">`,
  ]
  shuffle(array3).map(function (x) {
    pictureInnerContainer3.innerHTML += x
  })
}
galleryShuffle()

// -----------------------------------------------slide-in
const animItems = document.querySelectorAll('.slide-in')

if (true) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index]
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top
      const animStart = 4

      let animItemPoint = window.innerHeight - animItemHeight / animStart
      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('active')
      } else {
        animItem.classList.remove('active')
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}
