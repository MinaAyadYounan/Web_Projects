const sidebarEl = document.querySelector(".Btnradio").querySelectorAll("div");
const next_step = document.querySelectorAll(".next-step");
const contentdiv = document.querySelector(".content").children;
const formel = document.querySelectorAll("form");
let radioValue;
let checkboxValue = [];
let swit = document.getElementById("switch");
let n = 0;
let year = {
  time: "Year",
  arcade: 90,
  advanced: 120,
  pro: 150,
  "Online Services": 10,
  "Larger storage": 20,
  "Customizable Profile": 20,
};

let Month = {
  time: "Month",
  arcade: 9,
  advanced: 12,
  pro: 12,
  "Online Services": 1,
  "Larger storage": 2,
  "Customizable Profile": 2,
};
function createHtmlFinalPage() {
  // let parent = document.querySelector(".finshing-parent");
  let fchild = document.querySelector(".S-plan");
  let sec_child = document.querySelector(".plan-info");
  // let total = document.querySelector(".total");
  sec_child.innerHTML = "";
  if (swit.checked) {
    selecteTime(year, "yr");
    console.log("call: ", true);
  } else {
    selecteTime(Month, "mo");
    console.log("call: ", false);
  }
  function selecteTime(obj, abb) {
    console.log(obj);
    fchild.innerHTML = `<h4>${radioValue}(${obj["time"]})</h4>
                      <p>change</p>
                     <span>$9/${abb}</span>`;
    for (let i = 0; i < checkboxValue.length; i++) {
      let pEl = document.createElement("p");
      pEl.innerHTML = `${checkboxValue[i]} <span>${
        obj[checkboxValue[i]]
      } /${abb}</span>`;
      sec_child.appendChild(pEl);
      console.log(`yup ${obj[checkboxValue[i]]}`);
    }
  }
}
function allthing() {
  formel.forEach((e, n) => {
    e.onsubmit = (event) => {
      event.preventDefault();
      let inputName = e.querySelector("input").getAttribute("name");
      let inputType = e.querySelector("input").getAttribute("type");
      let k;
      let flag = 0;
      sidebarEl.forEach((activeELment) => {
        if (activeELment.className == "active" && flag == 0) {
          n = activeELment.getAttribute("step-num");
          if (inputName !== "" && inputType !== "" && n > 1) {
            if (inputType == "radio") {
              k = e.querySelector(`input[name = ${inputName}]:checked`);
              radioValue = k.value;
              console.log(radioValue);
              console.log(swit.checked);
            } else if (inputType == "checkbox") {
              k = e.querySelectorAll(`input[name = ${inputName}]:checked`);
              k.forEach((val) => {
                checkboxValue.push(val.value);
                console.log(checkboxValue);
              });
            }
          }

          activeELment.removeAttribute("class");
          sidebarEl[n].setAttribute("class", "active");
          contentdiv[n - 1].style.display = "none";
          contentdiv[n].style.display = "block";
          flag = 1;
        }
      });
      if (n > 2) {
        createHtmlFinalPage();
      }
    };
  });
}

allthing();
