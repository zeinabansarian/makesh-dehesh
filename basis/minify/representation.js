let svgPath=document.querySelectorAll(".hasBranch"),btns=[...document.querySelectorAll(".rep-item")];svgPath.forEach((e=>{e.addEventListener("mouseenter",(e=>{let t=e.currentTarget.getAttribute("id");console.log("id",t);let l=btns.filter((e=>e.getAttribute("data-id")==t));console.log("result",l[0]),l[0].classList.add("active")})),e.addEventListener("mouseleave",(e=>{let t=e.currentTarget.getAttribute("id");console.log("id",t);let l=btns.filter((e=>e.getAttribute("data-id")==t));console.log("result",l[0]),l[0].classList.remove("active")}))}));let svgPaths=[...document.querySelectorAll(".hasBranch")],btnss=document.querySelectorAll(".rep-item");btnss.forEach((e=>{e.addEventListener("mouseenter",(e=>{let t=e.currentTarget.getAttribute("data-id");console.log("id",t);let l=svgPaths.filter((e=>e.getAttribute("id")==t));console.log("result",l[0]),l[0].classList.add("active")})),e.addEventListener("mouseleave",(e=>{let t=e.currentTarget.getAttribute("data-id");console.log("id",t);let l=svgPaths.filter((e=>e.getAttribute("id")==t));console.log("result",l[0]),l[0].classList.remove("active")}))}));