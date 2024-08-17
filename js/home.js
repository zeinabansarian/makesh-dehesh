var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
    speed:1000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
      },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	autoplay: {
    delay: 2000,
		disableOnInteraction: false
  },
	loop: true,
	watchSlidesProgress: true
});





const relatedPro = new Swiper('.relatedPro', {
    // Optional parameters
    // loop: true,
    spaceBetween : 52,
    slidesPerView : 3,
  
    // Navigation arrows
    navigation: {
      nextEl: '.nextProBtn',
      prevEl: '.prevProBtn',
    },
  

  });


  const thumbSlider = new Swiper('.thumbSlider', {

    slidesPerView :3,
    // Navigation arrows
  


  });
const rSlider = new Swiper('.rSlider', {

    slidesPerView : 1,
    speed:1000,
    // Navigation arrows
    navigation: {
      nextEl: '.serNextBtn',
      prevEl: '.serPrebtn',
    },
  
    thumbs: {
      swiper: thumbSlider
    }

  });
const newsSlider = new Swiper('.newsSlider', {
  spaceBetween : 12,
  slidesPerView : 3,

    speed:1000,
    // Navigation arrows
  navigation: {
    nextEl: '.nextNewsBtn',
    prevEl: '.prevNewsBtn',
  },


  });


let listSlider = document.querySelectorAll(".listSlider")
listSlider[0].classList.add("activeList")
listSlider.forEach((element , index) => {
    element.addEventListener("click" , function (params) {
      rSlider.slideTo(index,1000);
      $(".listSlider").removeClass("activeList")
      element.classList.add("activeList")
    })
});

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
  
//   // Whenever the user explicitly chooses light mode
// //   localStorage.theme = 'light'
  
//   // Whenever the user explicitly chooses dark mode
//   localStorage.theme = 'dark'
  
//   // Whenever the user explicitly chooses to respect the OS preference
// //   localStorage.removeItem('theme')