let bulb=document.querySelector(".bulb");
let button=document.querySelector("button");


button.addEventListener('click',()=>{
    if(bulb.classList.toggle("on")){
        button.textContent="off";
    }
    else{
    button.textContent="on";
    }
})