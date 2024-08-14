document.querySelectorAll('.toggle-button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.target.parentElement.classList.toggle('share__wrapper--active');
      e.target.classList.toggle('toggle-button--active');
    });
  });

  const relatedPro = new Swiper('.relatedPro', {
    // Optional parameters
    loop: true,
    spaceBetween : 52,
    slidesPerView : 3,
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextProBtn',
      prevEl: '.prevProBtn',
    },
  

  });