let listSlider = document.querySelectorAll(".listSlider");


var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  watchSlidesProgress: true,
});

let productCat = new Swiper(".swiper-cat-proj", {
  speed: 1500,
  slidesPerView: 2.5,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
});

const relatedPro = new Swiper(".relatedPro", {
  // Optional parameters
  // loop: true,
  spaceBetween: 52,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: ".nextProBtn",
    prevEl: ".prevProBtn",
  },
});

const thumbSlider = new Swiper(".thumbSlider", {
  slidesPerView: 3,
  // Navigation arrows
});
const rSlider = new Swiper(".rSlider", {
  slidesPerView: 1,
  speed: 1000,
  // Navigation arrows
  navigation: {
    nextEl: ".serPrebtn",
    prevEl: ".serNextBtn",
  },
  on:{

    slideChange: function(){
      $(".listSlider").removeClass("activeList");
      listSlider[this.activeIndex].classList.add("activeList");
      
    },
  },
  thumbs: {
    swiper: thumbSlider,
  },
 
});
const newsSlider = new Swiper(".newsSlider", {
  spaceBetween: 12,
  slidesPerView: 3,

  speed: 1000,
  // Navigation arrows
  navigation: {
    nextEl: ".nextNewsBtn",
    prevEl: ".prevNewsBtn",
  },
});

listSlider[0].classList.add("activeList");
listSlider.forEach((element, index) => {
  element.addEventListener("click", function (params) {
    rSlider.slideTo(index, 1000);
    $(".listSlider").removeClass("activeList");
    element.classList.add("activeList");
  });
});



const aboutSlider = new Swiper(".aboutSlider", {
  // If we need pagination
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiperPlay = document.querySelector(".swiperPlay");
let swiperPause = document.querySelector(".swiperPause");

swiperPause.addEventListener("click", function (params) {
  aboutSlider.autoplay.stop();
});
swiperPlay.addEventListener("click", function (params) {
  aboutSlider.autoplay.start();
});











var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$(".callBtn").on("mouseenter", function() {
    cursor.addClass("activeCursor");
    follower.addClass("activeCursor");
});
$(".callBtn").on("mouseleave", function() {
    cursor.removeClass("activeCursor");
    follower.removeClass("activeCursor");
});