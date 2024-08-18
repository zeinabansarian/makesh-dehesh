document.querySelectorAll('.toggle-button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.target.parentElement.classList.toggle('share__wrapper--active');
      e.target.classList.toggle('toggle-button--active');
    });
  });





  const proGallery = new Swiper('.proGallery', {

    // Navigation arrows
    navigation: {
      nextEl: '.proGallerynext',
      prevEl: '.proGalleryprev',
    },
  
 
  });
  const popUpGallery = new Swiper('.popUpGallery', {

    // Navigation arrows
    navigation: {
      nextEl: '.Gnext',
      prevEl: '.Gprev',
    },
  
 
  });









  let popup = document.querySelector('.Gallerypopup')
  
  let popBTN = document.querySelectorAll('.OpenPopUP')
  popBTN.forEach((pop,index) => {
    
    pop.addEventListener('click',(e)=>{
      
      popup.classList.add('showPOPUP')
      popUpGallery.slideTo(index , 0)
      
    })
});




let closePop = document.querySelector('.closePop')
closePop.addEventListener('click',()=>{
    let popup = document.querySelector('.Gallerypopup')
popup.classList.remove('showPOPUP')
})

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

let productCat = new Swiper('.swiper-cat-proj',{
  speed: 1500,
  slidesPerView:2.5,
  spaceBetween: 50,
  loop:true,
  grabCursor:true,
})

let aboutNav = document.querySelectorAll("nav ul li")


  
  const lenis = new Lenis()
  
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  

  for (let i = 0; i < aboutNav.length; i++) {
      const element = aboutNav[i];
      element.addEventListener("click" , function (params) {

              lenis.scrollTo(`.scroll-${i+1}` , {
                  offset : -122,   
              })
          
      })
  }
