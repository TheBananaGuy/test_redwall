$(() => {
  const sectionSliders = $('.js-slider')

  const slideOut = () => {
    sectionSliders.each((i) => {
      const element = sectionSliders[i];
      
      if (element.getBoundingClientRect().top < $(window).height() * 0.75) {
        element.classList.remove('section__slider--hidden');
        element.classList.remove('section__slider--right');
      }
    })
  }

  slideOut();

  let scrollTimer, lastScrollFireTime = 0;

  window.addEventListener('scroll', () => {
    const minScrollTime = 100;
    const now = new Date().getTime();

    if (!scrollTimer) {
      if (now - lastScrollFireTime > (3 * minScrollTime)) {
        slideOut();
        lastScrollFireTime = now;
      }
      scrollTimer = setTimeout(function() {
        scrollTimer = null;
        lastScrollFireTime = new Date().getTime();
        slideOut();
      }, minScrollTime);
    }
  })
})  