const productsList = new Swiper('.productsList', {
    slidesPerView : 3.8,
    spaceBetween : 55
  });

  let schTitle = document.querySelectorAll(".schTitle")
  schTitle.forEach(element => {
    element.addEventListener("click" , function (params) {
        element.nextElementSibling.classList.toggle("activeSchema")
        
    })
  });