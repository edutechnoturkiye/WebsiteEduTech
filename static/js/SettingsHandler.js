document.addEventListener("DOMContentLoaded", function() {

const themebtn = document.getElementById("theme-toggle");
let theme = localStorage.getItem("theme") || "1";

const debugbtn = document.getElementById("debug-toggle");
let debug = localStorage.getItem("debug") || "0";

// Update Button States

if (theme === "1") {
  themebtn.classList.remove("theme-2");
  themebtn.classList.add("theme-1");
  themebtn.innerHTML = "İlkbahar";
} else {
  themebtn.classList.remove("theme-1");
  themebtn.classList.add("theme-2");
  themebtn.innerHTML = "Sonbahar";
}

if (debug === "0") {
  debugbtn.innerHTML = "Non-Debug";
  debugbtn.classList.remove("debug-open");
} else {
  debugbtn.innerHTML = "Debugging";
  debugbtn.classList.add("debug-open");
}
(debug === "1") ? document.documentElement.classList.add('debug-mode') : document.documentElement.classList.remove('debug-mode');

// Theme Handler

if (theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

themebtn.addEventListener("click", function() { // Theme Button Click Start

  if (theme === "1") {
    theme = "2";
    themebtn.classList.remove("theme-1");
    themebtn.classList.add("theme-2");
    themebtn.innerHTML = "Sonbahar";
  } else {
    theme = "1";
    themebtn.classList.remove("theme-2");
    themebtn.classList.add("theme-1");
    themebtn.innerHTML = "İlkbahar";
  }

  console.log("T Changed to:", theme);

  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);

}); // Theme Button Click End

// Debug Handler

if (debug) {
  document.documentElement.setAttribute("data-debug", debug);
}

debugbtn.addEventListener("click", function() { // Debug Button Click Start

  if (debug === "0") {
    debug = "1";
    debugbtn.classList.add('debug-open');
    debugbtn.innerHTML = "Debugging";
  } else {
    debug = "0";
    debugbtn.classList.remove('debug-open');
    debugbtn.innerHTML = "Non-Debug";
  }

  console.log("D Changed to:", debug);
  (debug === "1") ? document.documentElement.classList.add('debug-mode') : document.documentElement.classList.remove('debug-mode');
  localStorage.setItem("debug", debug);
  document.documentElement.setAttribute("data-debug", debug);

}); // Debug Button Click End

}); // DOMContentLoaded