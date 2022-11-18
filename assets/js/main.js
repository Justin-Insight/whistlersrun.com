console.log('%c Crafted by Insight Creative, Inc. Designed and Developed by Justin Parsons', 'background: #1d1d1d; color: white; padding: 5px 10px;')

const mobileMenu = document.querySelector('.site-header__mobile-nav')
const hamburger = document.querySelector('.hamburger')
const siteHeader = document.querySelector('.site-header')
const siteHeaderHeight = siteHeader.getBoundingClientRect().height

const mobileMenuHeight = mobileMenu.getBoundingClientRect().height

mobileMenu.style.height = 0

hamburger.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    const mobileMenuWrapper = document.querySelector('.site-header__mobile-nav-inner')
    const mobileMenuWrapperHeight = mobileMenuWrapper.getBoundingClientRect().height

    mobileMenu.style.height = 0

    if(mobileMenu.classList.contains('nav-open')) {
        this.setAttribute('aria-expanded', 'false')
        this.setAttribute('aria-label', 'open mobile menu')
        mobileMenu.classList.remove('nav-open')
        mobileMenu.style.height = 0
        hamburger.classList.remove('is-active')
    } else {
        mobileMenu.classList.add('nav-open')
        mobileMenu.style.height = mobileMenuWrapperHeight + 'px'
        hamburger.classList.add('is-active')
        this.setAttribute('aria-expanded','true')
        this.setAttribute('aria-label', 'close mobile menu')
    }
}

let scrollState = 0

var scrollTop = function() {
  return window.scrollY
}

var scrollDetect = function(collapse, expand) {
  var currentScroll = scrollTop()
  if (currentScroll > scrollState) {
    collapse()
  } else {
    expand()
  }
  scrollState = scrollTop()
}

function collapseNav() {
  siteHeader.classList.remove("expand")
  siteHeader.classList.add("collapse")
}

function expandNav() {
  siteHeader.classList.remove("collapse")
  siteHeader.classList.add("expand")
}

window.addEventListener("scroll", function() {
  scrollDetect(collapseNav, expandNav)
})

const heroVideo = document.querySelector('.hero__video')
const videoControls = document.querySelector('.hero__controls')
const playVideo = document.querySelector('.play-icon')
const pauseVideo = document.querySelector('.pause-icon')

if(document.body.contains(heroVideo)) {
  videoControls.addEventListener('click', () => {
    if(videoControls.classList.contains('video-playing')) {
      videoControls.classList.remove('video-playing')
      videoControls.classList.add('video-paused')
      videoControls.setAttribute('aria-label', 'play the video')
      videoControls.setAttribute('title', 'play the video')
      heroVideo.pause()
    } else {
      videoControls.classList.remove('video-paused')
      videoControls.classList.add('video-playing')
      videoControls.setAttribute('aria-label', 'pause the video')
      videoControls.setAttribute('title', 'pause the video')
      heroVideo.play()
    }
  })
}