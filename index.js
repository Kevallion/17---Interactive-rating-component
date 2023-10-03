let choice = [];
const ratings = document.querySelectorAll(".rate");
const labels = document.querySelectorAll("label");
const form = document.querySelector("form");
const rangeRating = document.getElementById("selected-rating");
const componentRating = document.getElementById("component-rating");
const componentThanks = document.getElementById("component-thanks");

function minMax(array) {
  if (array && array.length > 1) {
    let min = Math.min(...array);
    let max = Math.max(...array);
    return ` ${min} out of ${max}`;
  }
}

function resetRating() {
  //reset all
  labels.forEach((label) => {
    label.classList.remove("choice");
  });
  ratings.forEach((checkbox) => {
    checkbox.checked = false;
  });
  choice = [];
}

ratings.forEach((rate) => {
  const label = document.querySelector(`label[for="${rate.id}"]`);

  rate.addEventListener("click", (e) => {
    if (choice.length < 2 && !label.classList.contains("choice")) {
      console.log(e.target.checked);
      choice.push(label.textContent);
      label.classList.add("choice");
    } else if (choice.length > 1 && !label.classList.contains("choice")) {
      resetRating(labels);

      // New value
      choice.push(label.textContent);
      rate.checked = true;
      label.classList.add("choice");
    } else {
      resetRating();
    }

    console.log(choice);
    minMax(choice);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (choice.length > 1) {
    rangeRating.textContent += minMax(choice);
    componentRating.style.display = "none";
    componentThanks.style.display = "block";
  } else {
    alert("Please select two numbers");
  }
});

window.addEventListener("load", resetRating());
