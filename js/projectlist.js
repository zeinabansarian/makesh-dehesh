gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let projects = document.querySelectorAll('.Project')
projects.forEach(p=>{
    gsap.to(p,{
        y:0,
        opacity:1,
        scale:1,
        scrollTrigger:{
            trigger:p,
            start:"top 80%",
            end:"bottom bottom"
        }
    })
})