const hamburgermenu = document.getElementById("hamburgermenu");
const mobileNavbarDropDown = document.querySelector(".mobile__navbar__items");

window.addEventListener("click", () => {
    if (mobileNavbarDropDown.classList.contains("hamburger__menu__close"))
         return mobileNavbarDropDown.classList.remove("hamburger__menu__close");
     return mobileNavbarDropDown.classList.add("hamburger__menu__close");         

}
);