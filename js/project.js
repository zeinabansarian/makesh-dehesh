gsap.registerPlugin(ScrollTrigger) 
// shareBox
let ShareB = document.querySelector('.ShareB')
let ShareBox = document.querySelector('.ShareBox')
ShareB.addEventListener('click',()=>{
    ShareBox.classList.toggle('show')
})

// RELATED PROJECT SLIDER
if(document.querySelector('.swiper-projects')){
    let swiperProject= new Swiper(".swiper-projects", {
        slidesPerView:2.5,
        spaceBetween: 70,
       speed:800
      }); 
}
 
if(document.querySelector('.swiper-products')){
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
}


// ANIMATIONS
let textF = document.querySelectorAll('.fade-in')
textF.forEach(p=>{
    gsap.to(p,{
        y:0,
        opacity:1,
    })
})