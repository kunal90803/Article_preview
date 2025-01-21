let buttons=document.querySelectorAll("button");
let users=document.querySelector(".user");
let userdark=document.querySelector(".userdark");
let show=true;
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(show){
            users.style.display="none";
            userdark.style.display="flex";
            document.querySelector(".content").style.paddingBottom="0px";
            show=false;
        }
        else{
            users.style.display="flex";
            userdark.style.display="none";
            document.querySelector(".content").style.paddingBottom="20px";
            show=true;
        }
    })
})