console.log('%c Crafted by Insight Creative, Inc. Designed and Developed by Justin Parsons', 'background: #1d1d1d; color: white; padding: 5px 10px;')

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const mobileMenu = document.querySelector('.site-header__mobile-nav')
const hamburger = document.querySelector('.hamburger')
const siteHeader = document.querySelector('.site-header')
const siteHeaderHeight = siteHeader.getBoundingClientRect().height

var imageSwiper = new Swiper(".image-swiper", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
});

var testimonialsSwiper = new Swiper(".testimonials-swiper", {
  grabCursor: true,
  centeredSlides: true,
  setWrapperSize: true, 
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    600: {
      slidesPerView: "auto",
      spaceBetween: 90
    },
  },
  pagination: {
    el: ".testimonials-pagination",
    type: 'bullets',
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
});

const mobileMenuHeight = mobileMenu.getBoundingClientRect().height

mobileMenu.style.height = 0

// alternate option to shrink logo on scroll versus the entire nav collapse
window.addEventListener('scroll', event => {
  const currentScroll = window.scrollY
  if(currentScroll > siteHeaderHeight) {
    siteHeader.classList.add('user-scrolling')
  } else {
    siteHeader.classList.remove('user-scrolling')
  }
})

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

// function fadeAnimations() {
//     const fadeUp = document.querySelectorAll('.fade-up')

//     gsap.utils.toArray(fadeUp).forEach((fade) => {
//         gsap.to(fade, {
//             opacity: 1,
//             y: 0,
//             duration: .5,
//             ease: 'Power2.in',
//             scrollTrigger: {
//                 trigger: fade,
//                 toggleActions: 'play none none none',
//                 start: 'top bottom-=50'
//             }
//         })
//     })

//     gsap.set('.fade-staggered', {y: 50, autoAlpha: 0})

//     ScrollTrigger.batch('.fade-staggered', {
//         onEnter: batch => gsap.to(batch, {y: 0, autoAlpha: 1, stagger: 0.2}),
//       })
// }

gsap.utils.toArray(".parallax").forEach((layer) => {
  gsap.to(layer, {
      y: 350,
      filter: 'brightness(0)',
      ease: 'none',
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true, 
      }
  })
})

// fadeAnimations()

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