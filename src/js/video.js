const prevVideo = document.getElementById('video__arrow__left'),
  nextVideo = document.getElementById('video__arrow__right'),
  slidesVideo = document.querySelectorAll('.minor__block__elem'),
  dotsVideo = document.querySelectorAll('.video__slider__carousel__item'),
  mainVideo = document.querySelectorAll('.main__video')

let index = 0 // текущий активный слайд

const activeVideoSlide = (n) => {
  for (slide of slidesVideo) {
    slide.classList.remove('active')
    slide.classList.remove('main')
    slide.classList.remove('order1')
    slide.classList.remove('order2')
    slide.classList.remove('order3')
  }
  slidesVideo[n].classList.add('active')
  slidesVideo[n].classList.add('main')

  if (slidesVideo[n + 1] === undefined) {
    slidesVideo[n].classList.add('active')
    slidesVideo[n].classList.add('order1')
    slidesVideo[n - 4].classList.add('active')
    slidesVideo[n - 4].classList.add('order2')
    slidesVideo[n - 3].classList.add('active')
    slidesVideo[n - 3].classList.add('order3')
  } else {
    slidesVideo[n + 1].classList.add('active')
  }

  if (n === 3) {
    slidesVideo[n].classList.add('active')
    slidesVideo[n].classList.add('order1')
    slidesVideo[n + 1].classList.add('active')
    slidesVideo[n + 1].classList.add('order2')
    slidesVideo[n - 3].classList.add('active')
    slidesVideo[n - 3].classList.add('order3')
  } else if (n < 3) {
    slidesVideo[n + 2].classList.add('active')
  }
}
const activeVideoDot = (n) => {
  for (dot of dotsVideo) {
    dot.classList.remove('active')
  }
  dotsVideo[n].classList.add('active')
}
const activeMainVideo = (n) => {
  for (v of mainVideo) {
    v.classList.remove('active')
  }
  mainVideo[n].classList.add('active')
}

const prepareCurrentVideoSlide = (ind) => {
  activeVideoDot(ind)
  activeMainVideo(ind)
  activeVideoSlide(ind)
}
const nextVideoSlide = () => {
  if (index === slidesVideo.length - 1) {
    index = 0
    prepareCurrentVideoSlide(index)
  } else {
    index++
    prepareCurrentVideoSlide(index)
  }
}
const prevVideoSlide = () => {
  if (index === 0) {
    index = slidesVideo.length - 1
    prepareCurrentVideoSlide(index)
  } else {
    index--
    prepareCurrentVideoSlide(index)
  }
}

dotsVideo.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot
    prepareCurrentVideoSlide(index)
  })
})

nextVideo.addEventListener('click', nextVideoSlide)
prevVideo.addEventListener('click', prevVideoSlide)
// ---------------------------------------------------------------------------------------
const player = document.querySelector('.video__block__main__video')
let video = player.querySelector('.main__video.active')
const toggle = player.querySelector('.play__button')
const pause = player.querySelector('.pause__button')
const volume = player.querySelector('.volume__button')
const mute = player.querySelector('.mute__button')
const fullscreen = player.querySelector('.fullscreen__button')
const fsopen = player.querySelector('.fsopen__button')
const ranges = player.querySelectorAll('.progress')
const mainButton = player.querySelector('.main__video__button')
let videoProgress = document.querySelector('.video__progress')
const volumeProgress = document.querySelector('.volume__progress')

function changeStyleBarVideo() {
  videoProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${videoProgress.value}%, #c4c4c4 ${videoProgress.value}%, #c4c4c4 100%)`
}
function changeStyleBarVolume() {
  volumeProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volumeProgress.value}%, #c4c4c4 ${volumeProgress.value}%, #c4c4c4 100%)`
}
videoProgress.addEventListener('input', changeStyleBarVideo)
volumeProgress.addEventListener('input', changeStyleBarVolume)
// -------------------------------------------------------------
function togglePlay() {
  video = player.querySelector('.main__video.active')
  if (video.paused) {
    video = player.querySelector('.main__video.active')
    video.play()
    toggle.classList.remove('active')
    mainButton.classList.remove('active')
    pause.classList.add('active')
  } else {
    video = player.querySelector('.main__video.active')
    video.pause()
    pause.classList.remove('active')
    mainButton.classList.add('active')
    toggle.classList.add('active')
  }
}
function updateButton() {
  video = player.querySelector('.main__video.active')
  if (video.paused) {
    video = player.querySelector('.main__video.active')
    pause.classList.remove('active')
    mainButton.classList.add('active')
    toggle.classList.add('active')
  } else {
    video = player.querySelector('.main__video.active')
    toggle.classList.remove('active')
    mainButton.classList.remove('active')
    pause.classList.add('active')
  }
}

mainButton.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
toggle.addEventListener('click', togglePlay)
pause.addEventListener('click', togglePlay)
// --------------------------volume
function videoVolume() {
  let v = this.value
  video.volume = v / 100
  if (v === '0') {
    muteVideo()
  } else {
    volume.classList.add('active')
    mute.classList.remove('active')
  }
}
function muteVideo() {
  volume.classList.remove('active')
  mute.classList.add('active')
  volumeProgress.value = '0'
  video.volume = 0
  changeStyleBarVolume()
}
function unmuteVideo() {
  volume.classList.add('active')
  mute.classList.remove('active')
  volumeProgress.value = '10'
  video.volume = 0.1
  changeStyleBarVolume()
}
function volumeScrub(e) {
  let scrubVolume = e.offsetX / volumeProgress.offsetWidth
  if (scrubVolume < 0.02) {
    scrubVolume = 0
    muteVideo()
  } else if (scrubVolume > 0.99) {
    scrubVolume = 1
  } else {
    volume.classList.add('active')
    mute.classList.remove('active')
  }
  video.volume = scrubVolume
}
function volumeScrubTouch(e) {
  var rectV = e.target.getBoundingClientRect()
  var tV = e.targetTouches[0].pageX - rectV.left
  let scrubVolumeTouch = tV / volumeProgress.offsetWidth
  if (scrubVolumeTouch < 0.02) {
    scrubVolumeTouch = 0
    muteVideo()
  } else if (scrubVolumeTouch > 0.99) {
    scrubVolumeTouch = 1
  } else {
    volume.classList.add('active')
    mute.classList.remove('active')
  }
  video.volume = scrubVolumeTouch
}
let mousedownVolume = false
volumeProgress.addEventListener('mousemove', (e) => mousedownVolume && volumeScrub(e))
volumeProgress.addEventListener('mousedown', () => (mousedownVolume = true))
volumeProgress.addEventListener('mouseup', () => (mousedownVolume = false))
volume.addEventListener('click', muteVideo)
mute.addEventListener('click', unmuteVideo)
volumeProgress.addEventListener('change', videoVolume)
volumeProgress.addEventListener('touchstart', volumeScrubTouch)
volumeProgress.addEventListener('touchmove', volumeScrubTouch)
// ------------------------------------------------------
function handleProgress() {
  video = player.querySelector('.main__video.active')
  let percent = (video.currentTime / video.duration) * 100
  videoProgress.value = percent
  changeStyleBarVideo()
}
video = player.querySelector('.main__video.active')
timeUpdate()
function timeUpdate() {
  video = player.querySelector('.main__video.active')
  video.addEventListener('timeupdate', handleProgress)
}
function videoScrub(e) {
  video = player.querySelector('.main__video.active')
  let scrubTime = (e.offsetX / videoProgress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}
function videoScrubTouch(e) {
  video = player.querySelector('.main__video.active')
  var rect = e.target.getBoundingClientRect()
  var t = e.targetTouches[0].pageX - rect.left
  let scrubTouch = (t / videoProgress.offsetWidth) * video.duration
  video.currentTime = scrubTouch
}
let mousedown = false
videoProgress.addEventListener('click', videoScrub)
videoProgress.addEventListener('mousemove', (e) => mousedown && videoScrub(e))
videoProgress.addEventListener('mousedown', () => (mousedown = true))
videoProgress.addEventListener('mouseup', () => (mousedown = false))
videoProgress.addEventListener('touchstart', videoScrubTouch)
videoProgress.addEventListener('touchmove', videoScrubTouch)
// ------------------------------------------------------------------------
// fsopen
// fullscreen

function fullscreenToggle() {
  if (document.fullscreenElement === null) {
    player.requestFullscreen()
    fullscreenButtonOff()
  } else {
    if (document.fullscreenEnabled) {
      document.exitFullscreen()
      fullscreenButtonOn()
    }
  }
}
function fullscreenButtonOff() {
  fsopen.classList.add('active')
  fullscreen.classList.remove('active')
}
function fullscreenButtonOn() {
  fsopen.classList.remove('active')
  fullscreen.classList.add('active')
}
fullscreen.addEventListener('click', fullscreenToggle)
fsopen.addEventListener('click', fullscreenToggle)
// -----------------------------------------------------------------------
let flag = false
let flagFs = false
let flagSd = false
const playbackRateSpeed = document.querySelector('.playback__rate')

function slowdownVideo() {
  video.playbackRate -= 0.25
  if (video.playbackRate <= 0.25) {
    video.playbackRate = 0.25
  }
  playbackRateSpeed.innerHTML = `${video.playbackRate}`
  playbackRateSpeed.classList.add('active')
  setTimeout(() => {
    playbackRateSpeed.classList.remove('active')
  }, 1500)
}
function speedupVideo() {
  video.playbackRate += 0.25
  playbackRateSpeed.innerHTML = `${video.playbackRate}`
  playbackRateSpeed.classList.add('active')
  setTimeout(() => {
    playbackRateSpeed.classList.remove('active')
  }, 1500)
}

function slow_keyUp(e) {
  if ((e.shiftKey && e.key === '>') || e.key === 'Ю') {
    slowdownVideo()
  }
}
function speed_keyUp(e) {
  if ((e.shiftKey && e.key === '<') || e.key === 'Б') {
    speedupVideo()
  }
}
function fullscreenOnF(event) {
  if (event.code === 'KeyF' && flagFs === false) {
    fullscreenToggle()
    flagFs = true
  } else if (event.code === 'KeyF' && flagFs === true) {
    fullscreenToggle()
    flagFs = false
  }
}
function muteVideoOnM(event) {
  if (event.code === 'KeyM' && flag === false) {
    muteVideo()
    flag = true
  } else if (event.code === 'KeyM' && flag === true) {
    unmuteVideo()
    flag = false
  }
}
function playOnSpace(event) {
  if (event.code === 'Space') {
    event.preventDefault()
    togglePlay()
    updateButton()
  }
}
function addEvList() {
  document.addEventListener('keydown', muteVideoOnM)
  document.addEventListener('keydown', playOnSpace)
  document.addEventListener('keydown', fullscreenOnF)
  document.addEventListener('keyup', slow_keyUp, false)
  document.addEventListener('keyup', speed_keyUp, false)
}
addEvList()

function removeEvList() {
  document.removeEventListener('keydown', muteVideoOnM)
  document.removeEventListener('keydown', playOnSpace)
  document.removeEventListener('keydown', fullscreenOnF)
  document.removeEventListener('keyup', slow_keyUp, false)
  document.removeEventListener('keyup', speed_keyUp, false)
}
// --------------------------------------------------------------
function moveMainVideoOnStart() {
  video.currentTime = 0
  video.pause()
  updateButton()
  timeUpdate()
  video.addEventListener('click', togglePlay)
}
nextVideo.addEventListener('click', moveMainVideoOnStart)
prevVideo.addEventListener('click', moveMainVideoOnStart)
