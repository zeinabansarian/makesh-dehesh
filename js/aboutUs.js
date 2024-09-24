gsap.registerPlugin(ScrollTrigger) 
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
  $(document.querySelector('.history-Tab .DropDowns')).slideDown();
document.querySelectorAll('.history-Tab .tab-title svg')[0].style.transform=" rotate(180deg)"
// let IsOpen = true;
let navBtns = document.querySelectorAll('.history-Tab .tab-title')
for(let i=0 ; i<navBtns.length ; i++){
  navBtns[i].setAttribute('IS-OP',false)
}
navBtns[0].setAttribute('IS-OP',true)
navBtns[0].classList.add('active')
navBtns.forEach(nav=>{
  let IsOpen = false;
nav.addEventListener('click',(e)=>{
  IsOpen =Boolean(`${e.currentTarget.getAttribute('IS-OP')}`) 
 console.log(e.currentTarget.getAttribute('IS-OP'));
if(e.currentTarget.getAttribute('IS-OP') == 'false'){
  console.log(e.currentTarget);
       e.currentTarget.classList.add('active')
        $(e.currentTarget.nextElementSibling).slideDown();
        e.currentTarget.querySelector('svg').style.transform=" rotate(180deg)"
  IsOpen =false;
  e.currentTarget.setAttribute('IS-OP',true)
}
else{
  console.log(e.currentTarget);
      e.currentTarget.classList.remove('active')
        $(e.currentTarget.nextElementSibling).slideUp();
        e.currentTarget.querySelector('svg').style.transform=" unset"
  e.currentTarget.setAttribute('IS-OP',false)
  IsOpen =true;
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
  // ANIMATIONS
  let sections = document.querySelectorAll('.sec')
  sections.forEach(s=>{
    gsap.to(s.querySelectorAll('.fade-in'),{
      y:0,
      opacity:1,
      stagger:.2,
      scrollTrigger:{
        trigger:s,
        start:"top 60%",
        end:"bottom bottom"
    }
  })
  })
  
let textF = document.querySelectorAll('.Section-4 .fade-in')
textF.forEach(p=>{
    gsap.to(p,{
        y:0,
        opacity:1,
        scrollTrigger:{
          trigger:'.Section-3',
          start:"top 60%",
          end:"bottom bottom",
      }
    })
})
// Scale in animation
let faders = document.querySelectorAll('.fadeIN')
faders.forEach(fade=>{
    gsap.to(fade.querySelectorAll('p'),{
        y:0,
        opacity:1,
        scale:1,
        stagger:.2,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('a'),{
        y:0,
        opacity:1,
        scale:1,
        stagger:.2,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('span'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h1'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h2'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h3'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h4'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
    gsap.to(fade.querySelectorAll('h5'),{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:fade,
            start:"top 60%",
            end:"bottom bottom"
        }
    })
})