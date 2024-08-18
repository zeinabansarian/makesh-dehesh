// ANIMATION

gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let services = document.querySelectorAll('.Service-c')
services.forEach(s=>{
        gsap.to(s.querySelectorAll('.enter-y'),{
            y:0,
            opacity:1,
            scale:1,
            scrollTrigger:{
                trigger:s,
                start:"top 60%",
                end:"bottom bottom"
            }
        })
 
})
