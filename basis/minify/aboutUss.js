gsap.registerPlugin(ScrollTrigger);let secs=document.querySelectorAll(".VideoBox"),videos=document.querySelectorAll(" .Video");console.log(videos),videos.forEach((e=>{e.setAttribute("data-IS",!1)})),videos.forEach((e=>{e.addEventListener("click",(function(e){let t=e.currentTarget.getAttribute("data-IS");console.log(t),"false"===t?($(e.currentTarget.parentElement).toggleClass("toggle"),console.log(e.currentTarget.querySelector("video")),e.currentTarget.querySelector("video").play(),e.currentTarget.setAttribute("data-IS",!0)):(console.log("umm"),$(e.currentTarget.parentElement).toggleClass("toggle"),e.currentTarget.querySelector("video").pause(),e.currentTarget.setAttribute("data-IS",!1))}))})),$(document).ready((function(){$(".DropDowns").slideUp(),$(document.querySelector(".history-Tab .DropDowns")).slideDown(),document.querySelectorAll(".history-Tab .tab-title svg")[0].style.transform=" rotate(180deg)";let e=document.querySelectorAll(".history-Tab .tab-title");for(let t=0;t<e.length;t++)e[t].setAttribute("IS-OP",!1);e[0].setAttribute("IS-OP",!0),e[0].classList.add("active"),e.forEach((e=>{let t=!1;e.addEventListener("click",(e=>{t=Boolean(`${e.currentTarget.getAttribute("IS-OP")}`),console.log(e.currentTarget.getAttribute("IS-OP")),"false"==e.currentTarget.getAttribute("IS-OP")?(console.log(e.currentTarget),e.currentTarget.classList.add("active"),$(e.currentTarget.nextElementSibling).slideDown(),e.currentTarget.querySelector("svg").style.transform=" rotate(180deg)",t=!1,e.currentTarget.setAttribute("IS-OP",!0)):(console.log(e.currentTarget),e.currentTarget.classList.remove("active"),$(e.currentTarget.nextElementSibling).slideUp(),e.currentTarget.querySelector("svg").style.transform=" unset",e.currentTarget.setAttribute("IS-OP",!1),t=!0)}))}))}));let PartnerSwiper=new Swiper(".swiper-partner",{speed:1500,slidesPerView:4,spaceBetween:40,centeredSlides:!0,loop:!0,grabCursor:!0,autoplay:{delay:500,disableOnInteraction:!1}}),swiperCertificate=new Swiper(".swiper-certificate",{slidesPerView:3,spaceBetween:40,navigation:{nextEl:".Certificate-Container .swiper-button-next",prevEl:".Certificate-Container .swiper-button-prev"},speed:1e3}),sections=document.querySelectorAll(".sec");sections.forEach((e=>{gsap.to(e.querySelectorAll(".fade-in"),{y:0,opacity:1,stagger:.2,scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}})}));let textF=document.querySelectorAll(".Section-4 .fade-in");textF.forEach((e=>{gsap.to(e,{y:0,opacity:1,scrollTrigger:{trigger:".Section-3",start:"top 60%",end:"bottom bottom"}})}));let faders=document.querySelectorAll(".fadeIN");faders.forEach((e=>{gsap.to(e.querySelectorAll("p"),{y:0,opacity:1,scale:1,stagger:.2,scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}}),gsap.to(e.querySelectorAll("a"),{y:0,opacity:1,scale:1,stagger:.2,scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}}),gsap.to(e.querySelectorAll("span"),{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}}),gsap.to(e.querySelectorAll("h1"),{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}}),gsap.to(e.querySelectorAll("h2"),{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}}),gsap.to(e.querySelectorAll("h3"),{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}}),gsap.to(e.querySelectorAll("h4"),{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}}),gsap.to(e.querySelectorAll("h5"),{y:0,opacity:1,scale:1,scrollTrigger:{trigger:e,start:"top 60%",end:"bottom bottom"}})}));