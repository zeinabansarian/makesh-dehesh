let svgPath = document.querySelectorAll('.hasBranch')
let btns =[...document.querySelectorAll('.rep-item')] 
svgPath.forEach(svg=>{
    svg.addEventListener('mouseenter',(e)=>{
        let id = e.currentTarget.getAttribute('id')
        console.log('id',id);
      let res = btns.filter((f)=>{
            return f.getAttribute('data-id') == id
        })
        
        console.log('result',res[0]);
        res[0].classList.add('active')
        
    })
    svg.addEventListener('mouseleave',(e)=>{
        let id = e.currentTarget.getAttribute('id')
        console.log('id',id);
      let res = btns.filter((f)=>{
            return f.getAttribute('data-id') == id
        })
        
        console.log('result',res[0]);
        res[0].classList.remove('active')
        
    })
})
let svgPaths = [...document.querySelectorAll('.hasBranch')]
let btnss =document.querySelectorAll('.rep-item')
btnss.forEach(b=>{
    b.addEventListener('mouseenter',(e)=>{
        let id = e.currentTarget.getAttribute('data-id')
        console.log('id',id);
      let res = svgPaths.filter((f)=>{
            return f.getAttribute('id') == id
        })
        
        console.log('result',res[0]);
        res[0].classList.add('active')
        
    })
    b.addEventListener('mouseleave',(e)=>{
        let id = e.currentTarget.getAttribute('data-id')
        console.log('id',id);
      let res = svgPaths.filter((f)=>{
            return f.getAttribute('id') == id
        })
        
        console.log('result',res[0]);
        res[0].classList.remove('active')
        
    })
})