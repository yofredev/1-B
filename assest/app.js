const openMenu = document.querySelector(".menu-open"),
    navMenu = document.querySelector(".menu"),
    closeMenu = document.querySelector(".menu-close")

if(openMenu){
    openMenu.addEventListener('click',() =>{
        navMenu.classList.add("show")
    })
}
if(closeMenu){
    closeMenu.addEventListener('click', ()=>{
        navMenu.classList.remove("show")
    })

}

const toggle= document.getElementById("toggle"),
      root = document.querySelector(":root")
      toggle.addEventListener('change',(event)=>{
            let checked = event.target.checked; 
        if(checked == true){
           root.style.setProperty('--background-color-menu' , '#151515')
           root.style.setProperty('--menu-font-color' , '#f7f7f7')
           root.style.setProperty('--background-color','#151515')
           root.style.setProperty('--font-color','#F7f7f7')
        }
        else{
            root.style.setProperty('--background-color-menu' , '#f7f7f7')
            root.style.setProperty('--menu-font-color' , '#151515')
            root.style.setProperty('--background-color','#f7f7f7')
            root.style.setProperty('--font-color','#151515')
        }

    })


