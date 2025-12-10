"use strict";

//scrolled
window.onscroll = () =>
document.getElementById("navbar").classList.toggle("scrolled", scrollY > 50);

//our-classes-buttons
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("btn-active"));
      this.classList.add("btn-active");

      // Determine which content to show
      const targetId = this.getAttribute("data-target");

      // Hide all content sections
      document.querySelectorAll(".content").forEach((content) => {
        content.style.display = "none";
      });

      // Show the targeted content section
      document.getElementById(targetId).style.display = "flex";
    });
  });
});

// bmi calculate start
const form = document.querySelector("form");
const results = document.querySelector("#results");
const pointer = document.querySelector("#pointer");


function positionPointer(bmi) {
    const scaleWidth = document.querySelector('.bmi-scale-wrapper').offsetWidth;
    
    const minBmi = 16; 
    const maxBmi = 40; 
    
    let normalizedBmi;

    if (bmi <= minBmi) {
        normalizedBmi = 0; 
    } else if (bmi >= maxBmi) {
        normalizedBmi = 1; 
    } else {
        normalizedBmi = (bmi - minBmi) / (maxBmi - minBmi);
    }

    const position = scaleWidth * normalizedBmi;

    pointer.style.left = `${position}px`;
    pointer.style.display = 'block'; 
}


form.addEventListener("submit", function(e){
e.preventDefault();

const height =parseInt(document.querySelector("#height").value);
const weight =parseInt(document.querySelector("#weight").value);

pointer.style.display = 'none';

if(!height || height <= 0 || isNaN(height)){
    results.textContent="Please provide a valid height"

} else if(!weight || weight <= 0 || isNaN(weight)){
    results.textContent="Please provide a valid weight"

} else {
  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

results.innerHTML =`<span> : ${bmi} </span>`;
positionPointer(parseFloat(bmi));

}
})
// bmi calculate end

//hamburger menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-menu");
  navLinks.classList.toggle("show");
}
