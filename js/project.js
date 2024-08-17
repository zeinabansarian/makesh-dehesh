// shareBox
let ShareB = document.querySelector('.ShareB')
let ShareBox = document.querySelector('.ShareBox')
ShareB.addEventListener('click',()=>{
    ShareBox.classList.toggle('show')
})

// RELATED PROJECT SLIDER
let swiperProject= new Swiper(".swiper-projects", {
    slidesPerView:2.5,
    spaceBetween: 70,
   speed:800
  });  

// RELATED PRODUCT SLIDER
let swiperProduct= new Swiper(".swiper-products", {
    slidesPerView:3,
    spaceBetween: 40
    ,  navigation: {
        nextEl: ".products-Related .swiper-button-next",
        prevEl: ".products-Related .swiper-button-prev",
      },
      speed:1000
  });  