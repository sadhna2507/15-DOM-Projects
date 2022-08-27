const btn=document.querySelector(".btn");
const popUp=document.querySelector(".popup_modal");
const  closeBtn=document.querySelector("close_btn");

btn.addEventListener("click",function(){
    popUp.classList.add("btn1");
});

closeBtn.addEventListener("click",function(){
    popUp.classList.remove("popUp");
});

