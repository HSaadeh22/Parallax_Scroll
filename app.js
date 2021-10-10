let p1div = document.querySelector("#p1div");
let p3div = document.querySelector("#p3div");

window.addEventListener("scroll", ()=> {
    let offset = window.scrollY;

    p1div.style.backgroundPositionY = offset * -0.6 + "px";
    p3div.style.backgroundPositionY = offset * -0.6 + "px";
} )