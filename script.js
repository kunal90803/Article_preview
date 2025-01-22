let buttons = document.querySelectorAll("button");
let users = document.querySelector(".user");
let bottomdark = document.querySelector(".bottomdark");
let userdark = document.querySelector(".userdark");
let show = true;

if (window.innerWidth < 800) {
  document.querySelector(".triangle").style.display = "none";
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (show) {
        users.style.display = "none";
        userdark.style.display = "flex";
        document.querySelector(".content").style.paddingBottom = "0px";
        show = false;
      } else {
        users.style.display = "flex";
        userdark.style.display = "none";
        document.querySelector(".content").style.paddingBottom = "20px";
        show = true;
      }
    });
  });
} else {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (show) {
        document.querySelector(".sharedark").classList.add("hide");
        userdark.style.display = "flex";
        bottomdark.style.justifyContent = "space-around";
        userdark.classList.add("respo");
        show = false;
      } else {
        document.querySelector(".sharedark").classList.add("hide");
        userdark.style.display = "none";
        bottomdark.style.justifyContent = "space-around";

        userdark.classList.remove("respo");
        show = true;
      }
    });
  });
}

let lastWidth = window.innerWidth;

window.addEventListener("resize", () => {
  let currentWidth = window.innerWidth;

  if (
    (lastWidth >= 800 && currentWidth < 800) ||
    (lastWidth < 800 && currentWidth >= 800)
  ) {
    location.reload();
  }

  lastWidth = currentWidth;
});
