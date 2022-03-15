$(function () {
  // при нажатии на кнопку scrollup
  $('.scrollup').click(function () {
    // переместиться в верхнюю часть страницы
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      100
    )
  })
})
// при прокрутке окна (window)
$(window).scroll(function () {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 400) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn()
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut()
  }
})

//-------------------------------------------------------------------------------------------

$(document).ready(function () {
  $('.ticket__image').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  })
})
