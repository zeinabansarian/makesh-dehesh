// VIDEO PLAY
let secs = document.querySelectorAll('.VideoBox')
let videos = document.querySelectorAll(' .Video')
console.log(videos);
videos.forEach(s=>{
s.setAttribute('data-IS',false)
})
videos.forEach(v=>{
v.addEventListener('click',function (event) {
  let Is = event.currentTarget.getAttribute('data-IS')
  console.log(Is);
  if(Is==='false'){
      $(event.currentTarget.parentElement).toggleClass('toggle');
      console.log(event.currentTarget.querySelector('video'));
      
      event.currentTarget.querySelector('video').play()
      event.currentTarget.setAttribute('data-IS',true)
  }
  else{
    console.log('umm');
      $(event.currentTarget.parentElement).toggleClass('toggle');
      event.currentTarget.querySelector('video').pause()
      event.currentTarget.setAttribute('data-IS',false)
  }
});
})


//DROPDOWN NAV
$(document).ready(function() {
    $('.DropDowns').slideUp();
  let navBtns = document.querySelectorAll('.history-Tab .tab-title')
  navBtns.forEach(nav=>{
      let IsOpen = false;
  nav.addEventListener('click',(e)=>{
      if(!IsOpen){
       console.log(e.target);
          e.target.classList.add('active')
          $(e.target.nextElementSibling).slideDown();
          e.target.querySelector('svg').style.transform=" rotate(180deg)"
          IsOpen =true;
      }
      else{
           e.target.classList.remove('active')
          $(e.target.nextElementSibling).slideUp();
          e.target.querySelector('svg').style.transform=" unset"
          IsOpen = false;
      } 
      })
  })
  
  })

//   PARTNER SLIDER
let PartnerSwiper = new Swiper('.swiper-partner',{
    speed: 1500,
    slidesPerView:4,
    spaceBetween: 40,
    centeredSlides: true,
    loop:true,
    grabCursor:true,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },
})

//  CERTIFICATE SLIDER
let swiperCertificate= new Swiper(".swiper-certificate", {
    slidesPerView:3,
    spaceBetween: 40
    ,  navigation: {
        nextEl: ".Certificate-Container .swiper-button-next",
        prevEl: ".Certificate-Container .swiper-button-prev",
      },
      speed:1000
  });  