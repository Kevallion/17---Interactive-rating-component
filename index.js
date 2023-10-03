let choice;
const ratings = document.querySelectorAll(".rate");
const labels = document.querySelectorAll("label");
const form = document.querySelector("form");
const selectedRating = document.getElementById("selected-rating");
const componentRating = document.getElementById("component-rating");
const componentThanks = document.getElementById("component-thanks");

function resetRating() {
  //reset all
  labels.forEach((label) => {
    label.classList.remove("choice");
  });
  ratings.forEach((checkbox) => {
    checkbox.checked = false;
  });
  choice = null;
}

ratings.forEach((rate) => {
  const label = document.querySelector(`label[for="${rate.id}"]`);

  rate.addEventListener("click", (e) => {
    if (!choice && !label.classList.contains("choice")) {
      choice = label.textContent;
      label.classList.add("choice");
    } else if (choice && !label.classList.contains("choice")) {
      resetRating(labels);
      // New value
      choice = label.textContent;
      rate.checked = true;
      label.classList.add("choice");
    } else {
      resetRating();
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (choice) {
    selectedRating.textContent += ` ${choice} ouf of 5`;
    componentRating.style.display = "none";
    componentThanks.style.display = "block";
  } else {
    alert("Please select a number");
  }
});

window.addEventListener("load", resetRating());
