document.querySelectorAll('a.js-scrollto[href^="#"]').forEach(anchor => {

  const stickyContacts = $('#sticky-contacts');
  const stickyVisible = 'sticky-contacts--visible';

  const contactSection = document.getElementById('section-contact');

  const toggleSticky = () => {
    const start = $(window).scrollTop() > 100;
    const finish = contactSection.getBoundingClientRect().top > $(window).height() * 0.75;

    if (start && finish) {
      if (!stickyContacts.hasClass(stickyVisible)) stickyContacts.addClass(stickyVisible);
    } else if (stickyContacts.hasClass(stickyVisible)) {
      stickyContacts.removeClass(stickyVisible)
    }
  }

  let scrollTimer, lastScrollFireTime = 0;

  window.addEventListener('scroll', () => {
    const minScrollTime = 150;
    const now = new Date().getTime();

    if (!scrollTimer) {
      if (now - lastScrollFireTime > (3 * minScrollTime)) {
        toggleSticky();
        lastScrollFireTime = now;
      }
      scrollTimer = setTimeout(function() {
        scrollTimer = null;
        lastScrollFireTime = new Date().getTime();
        toggleSticky();
      }, minScrollTime);
    }
  });

  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});