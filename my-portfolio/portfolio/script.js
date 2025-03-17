let z = document.getElementById("NAVBAR");
let menubtn = document.querySelector(".menu-btn");
let closebtn = document.querySelector(".close-btn");
function openmenu() {
  z.style.display = "block";
  menubtn.style.display = "none";
  closebtn.style.display = "block";
}
function closemenu() {
  z.style.display = "none";
  menubtn.style.display = "block";
  closebtn.style.display = "none";
}

const text = document.querySelector(".sec-text");
const textload = () =>{
    setTimeout(() =>{
        text.textContent = "Freelancer";
    },0);
    setTimeout(() =>{
        text.textContent = "web Developer";
    }, 4000);
    setTimeout (() =>{
        text.textContent = "front end developer";
    }, 8000);
};
textload();
setInterval(textload,12000);
const scrollbtn = document.getElementById("top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    scrollbtn.style.display = "block";
  } else {
    scrollbtn.style.display = "none";
  }
});
scrollbtn.addEventListener('click',() => {
  window.scrollTo({
      top:0,
      behavior :"smooth"
  });

});