let quoteSpan = document.querySelector(".quote span");
let spanLength = document.querySelector(".area-top .count");
let submitBtn = document.querySelector(".submit");

const advice = () => {
  submitBtn.classList.add("rotated");
  fetch("https://api.quotable.io/random")
    .then((res) => {
      let data = res.json();
      return data;
    })
    .then((advice) => {
      spanLength.innerHTML = advice.length;
      quoteSpan.innerHTML = `${advice.content}`;
      submitBtn.classList.remove("rotated");
    });
};

advice();

submitBtn.addEventListener("click", advice);
