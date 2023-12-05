console.log("Hello World")
// script.js
document.getElementById("pageTitle").innerHTML = "Hello, Universe!";
document.getElementById("introText").innerHTML = "This is my awesome webpage!";
// script.js
const currentYear = new Date().getFullYear();
document.getElementById("2023").innerText = 2023;
// script.js
document.getElementById("btn-alert").onclick = () => {
    alert("Hello world!");
};
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}