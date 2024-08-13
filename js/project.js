// shareBox
let ShareB = document.querySelector('.ShareB')
let ShareBox = document.querySelector('.ShareBox')
ShareB.addEventListener('click',()=>{
    ShareBox.classList.toggle('show')
})

// PROJECT SLIDER
let swiperProject= new Swiper(".swiper-projects", {
    slidesPerView:2.5,
    spaceBetween: 40

  });  