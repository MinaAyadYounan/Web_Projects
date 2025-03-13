const accessKey = "yDKGE36Zvd5TVitPSHlPuwyrHFvpa6Bptyo_6B3sVJU";
const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");
let page = 0;
let inputData = "dogs";

formEl.addEventListener("submit", imagesearch);
showMore.addEventListener("click", getUrl);
// function that used on form submit and it call the url by function called geturl()
function imagesearch(event) {
  event.preventDefault();
  getUrl();
  const deletEL_results = document.querySelector(".search-results");
  deletEL_results.innerHTML = "";
}

async function getUrl() {
  inputData = inputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(response.status);
  if (response.status >= 200 && response.status < 300) {
    page = page + 1;
    for (const key in data) {
      if (typeof data[key] == "object") {
        for (let i = 0; i < data[key].length; i++) {
          let imgSrc = data[key][i].urls.thumb;
          let Hlink = data[key][i].links.html;
          let altDesc = data[key][i].alt_description;
          const newSearch_result = document.createElement("div");
          newSearch_result.setAttribute("class", "search-result");
          newSearch_result.innerHTML = `<img src=${imgSrc}
        " alt=${altDesc}><a href=${Hlink} target="_blank">${altDesc}</a>`;
          searchResults.appendChild(newSearch_result);

          showMore.style.display = "block";
          console.log("t", searchResults.children.length);
        }
      }
    }
  }
  if (searchResults.children.length > 3) {
    showMore.style.display = "block";
    console.log("t", searchResults.children.length);
  } else {
    console.log("f", searchResults.children.length);
    showMore.style.display = "none";
  }
}
searchResults.addEventListener("mouseover", look);
function look() {
  let resultsImg = document.querySelectorAll(".search-result");
  for (const el of resultsImg) {
    let a = el.innerHTML;
    el.addEventListener("mouseover", () => {
      el.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.8)";
      let img = el.children[0];
      link = el.children[1];
      link.innerHTML = "";
      link.style.height = "100%";
      link.style.padding = "0px";
      img.style.height = "100%";
      link.appendChild(img);
      el.innerHTML = "";
      el.appendChild(link);
      el.addEventListener("mouseout", () => {
        el.style.boxShadow = "0 0 6px rgba(0, 0, 0, 0.2)";
        el.innerHTML = a;
      });
    });
  }
}
