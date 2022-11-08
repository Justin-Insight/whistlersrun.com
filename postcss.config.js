const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './layouts/**/*.svg',
        './content/**/*.md',
      ],
      safelist: [
        'is-active',
        'nav-open',
        'swiper-pagination-bullet',
        'swiper-pagination-bullet-active',
        'video-paused',
        'video-playing',
        'expand',
        'collapse',
        'home',
        'bg-gray',
        'footprints--left',
        'footprints--right',
        'home-hero',
        'page-home',
        'page-boarding',
        'page-about',
        'page-life-on-the-farm',
        'page-contact',
        'page-schedule-a-tour',
      ],
    }),
  ],
}