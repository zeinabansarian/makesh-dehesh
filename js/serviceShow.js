document.querySelectorAll('.toggle-button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.target.parentElement.classList.toggle('share__wrapper--active');
      e.target.classList.toggle('toggle-button--active');
    });
  });



  const serviceSlider = new Swiper('.serviceSlider', {

    // Navigation arrows
    navigation: {
      nextEl: '.serNext',
      prevEl: '.serPrev',
    },
  
  });