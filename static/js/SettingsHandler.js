document.addEventListener("DOMContentLoaded", function() {

const themebtn = document.getElementById("theme-toggle");
let theme = localStorage.getItem("theme") || "1";

if (theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

themebtn.addEventListener("click", function() {

  if (theme === "1") {
    theme = "2";
  } else {
    theme = "1";
  }

  console.log("Changed to:", theme);

  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);

}); // Theme Button Click

}); // DOMContentLoaded