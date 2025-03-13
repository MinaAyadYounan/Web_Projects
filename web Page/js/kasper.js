const right_angle = document.querySelector(".change-background-right");
const left_angle = document.querySelector(".change-background-left");
const landing = document.querySelector(".landing");
const ul_background = landing.querySelector("ul");
const barIcon = document.querySelector("#barIcon");
const icon_toggle = document.querySelector("nav").querySelector("ul");
console.log(barIcon);
let counter = 2;
right_angle.addEventListener("click", () => {
  counter = counter + 1;
  if (counter > 3) counter = 1;

  changeBackground(counter);
});
left_angle.addEventListener("click", () => {
  counter = counter - 1;
  if (counter < 1) counter = 3;

  changeBackground(counter);
});

function changeBackground(count) {
  if (count == 3) {
    landing.style.backgroundImage = `url("./images/owl.jpg")`;
    ul_background.querySelector(".active").removeAttribute("class");
    ul_background.children[2].setAttribute("class", "active");
  } else if (count == 2) {
    landing.style.backgroundImage = `url("./images/landing.jpg")`;
    ul_background.querySelector(".active").removeAttribute("class");
    ul_background.children[1].setAttribute("class", "active");
  } else if (count == 1) {
    landing.style.backgroundImage = `url("./images/owl one.jpg")`;
    ul_background.querySelector(".active").removeAttribute("class");
    ul_background.children[0].setAttribute("class", "active");
  }
}
barIcon.onclick = () => {
  icon_toggle.classList.toggle("icon_toggleJS");
};
