gsap.registerPlugin(ScrollTrigger);let ShareB=document.querySelector(".ShareB"),ShareBox=document.querySelector(".ShareBox");if(ShareB.addEventListener("click",(()=>{ShareBox.classList.toggle("show")})),document.querySelector(".swiper-projects")){new Swiper(".swiper-projects",{slidesPerView:2.5,spaceBetween:70,speed:800})}if(document.querySelector(".swiper-products")){new Swiper(".swiper-products",{slidesPerView:3,spaceBetween:40,navigation:{nextEl:".products-Related .swiper-button-next",prevEl:".products-Related .swiper-button-prev"},speed:1e3})}let textF=document.querySelectorAll(".fade-in");textF.forEach((e=>{gsap.to(e,{y:0,opacity:1})}));