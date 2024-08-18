let backBrand = document.querySelectorAll(".backBrand .imgS img")

let brandBox = document.querySelectorAll(".brandBox")
backBrand[0].setAttribute("active" , "true")



brandBox.forEach((element,index) => {
    element.addEventListener("mouseenter",function (params) {
        console.log("enter" , index);
        $(".backBrand .imgS img").removeAttr("active")
        backBrand[index].setAttribute("active" , "true")
    })
});