let gallerys=document.querySelectorAll(".Galerys img"),h=0,Is=!0,popBTN=document.querySelector(".OpenPopUP");popBTN.addEventListener("click",(e=>{gallerys.forEach((e=>{let l;e.setAttribute("data",h),0==h&&(l=Number(e.getAttribute("data"))),h++})),document.querySelector(".Gallerypopup").classList.add("showPOPUP");let l=gallerys[0].getAttribute("src");console.log(l);let t=document.querySelector("img.Main");t.setAttribute("src",l),t.classList.add("active");let o=document.querySelector(" img.Main"),c=0;function s(){let e=gallerys[c];console.log("clickk",e),console.log("sel",gallerys[0],0),console.log("indec",c),o.classList.remove("active"),setTimeout((()=>{o.setAttribute("src",e.getAttribute("src")),o.classList.add("active")}),200)}let r=document.querySelector(".Gnext"),n=document.querySelector(".Gprev");r.onclick=()=>{c++,console.log("glen",gallerys.length),console.log("in",c),c==gallerys.length?(c=0,s()):s()},n.onclick=()=>{console.log("in",c),c--,c<0?(c=gallerys.length-1,s()):s()}}));let close=document.querySelector(".close");close.addEventListener("click",(()=>{document.querySelector(".Gallerypopup").classList.remove("showPOPUP")}));