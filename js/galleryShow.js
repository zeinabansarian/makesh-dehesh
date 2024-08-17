let sideBarLi = document.querySelectorAll(".sidebar li")

sideBarLi[0].classList.add("activeList")

sideBarLi.forEach(element => {
    element.addEventListener("click" , function(params) {
        
        $(".sidebar li").removeClass("activeList")
        element.classList.add("activeList")
    })
});

// VIDEO POPUP
let gallerys = document.querySelectorAll('.VideoBox')
let h =0
let Is = true
gallerys.forEach(g=>{
    g.setAttribute(`data`,h)
    h++
    let clickedIMG =''
    g.addEventListener('click',(e)=>{
         clickedIMG =Number(e.currentTarget.getAttribute('data'))
         console.log('clicked',clickedIMG);
        let popup = document.querySelector('.Gallerypopup')
        popup.classList.add('showPOPUP')
        let MimgSCR = e.currentTarget.querySelector('video').getAttribute('src')
        console.log(MimgSCR);
        let Mposter = e.currentTarget.querySelector('video').getAttribute('poster')
        let mainIMG = document.querySelector('video.Main')
        console.log(Mposter);
        mainIMG.setAttribute('src',MimgSCR)
        mainIMG.setAttribute('poster',Mposter)
        mainIMG.classList.add('active')
        let  Others=[]
        let secs = document.querySelectorAll('.VideoMain .Video')
        let videos = document.querySelectorAll(' video.Main')
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
              
              event.currentTarget.play()
              event.currentTarget.setAttribute('data-IS',true)
          }
          else{
            console.log('umm');
              $(event.currentTarget.parentElement).toggleClass('toggle');
              event.currentTarget.pause()
              event.currentTarget.setAttribute('data-IS',false)
          }
      });
      })
        for(let i = 0 ; i< gallerys.length; i++){
         if(gallerys[i].getAttribute('data') != clickedIMG ){
            clickActive = gallerys[i]
         }       
         Others.push(gallerys[i])
        }
        let previewIMG = document.querySelector(' video.Main')
        let newIndex = clickedIMG 
        function preview(){
            let i = clickedIMG
            let selectedIMGurl = gallerys[newIndex].querySelector('video') //get user clicked img url
            console.log('sel',gallerys[i],i);
            console.log('indec',newIndex);
            let selectedMposter = gallerys[newIndex].querySelector('video').getAttribute('poster')
            console.log(selectedMposter);
            previewIMG.setAttribute('poster',selectedMposter)
            previewIMG.classList.remove('active')
            setTimeout(()=>{
                previewIMG.setAttribute('src',selectedIMGurl.getAttribute('src'))
                previewIMG.classList.add('active')
            },200)

            }
      // previos next btn
      let nextBtn = document.querySelector('.Gnext')
      let prevBtn =document.querySelector('.Gprev')
      nextBtn.onclick=()=>{
      newIndex++
      console.log('glen',gallerys.length);
      console.log('in',newIndex);
      if(newIndex == gallerys.length){

      newIndex = 0
      preview()
      }
      else{
      preview() //call aboce function to update image
      }
      }
      prevBtn.onclick=()=>{
        console.log('in',newIndex);
      newIndex--
      if(newIndex < 0){
        newIndex = gallerys.length-1
        preview()
      }
      else{
      preview() //call aboce function to update image
      }
      }
         Is = false
        let close = document.querySelector('.close')
        close.addEventListener('click',()=>{
        let popup = document.querySelector('.Gallerypopup')
        popup.classList.remove('showPOPUP')
        })
    })
})
