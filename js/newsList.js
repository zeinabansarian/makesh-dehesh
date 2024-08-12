let sideBarLi = document.querySelectorAll(".sidebar li")

sideBarLi[0].classList.add("activeList")

sideBarLi.forEach(element => {
    element.addEventListener("click" , function(params) {
        
        $(".sidebar li").removeClass("activeList")
        element.classList.add("activeList")
    })
});