function apply_theme() {
  let theme_bg = document.querySelector("body");

  if (theme_bg.classList.contains("theme")) {
    theme_bg.classList.remove("theme");
  } else {
    theme_bg.classList.add("theme");
  }
}

//Buttons interactions!
function fantasy_bt() {
  alert("Enjoy the Fantasy Adventure!🌟");
}

function romance_bt() {
  alert("Enjoy the Romance Adventures!💕");
}

function horror_bt() {
  alert("Enjoy the Horror Adventures!👻");
}

function fiction_bt() {
  alert("Enjoy the Fiction Adventures!🪐");
}

let theme_bt = document.querySelector(".apply_th");
theme_bt.addEventListener("click", apply_theme);

//Header Buttons
let fan_bt = document.querySelector(".bt_fantasy");
fan_bt.addEventListener("click", fantasy_bt);

let rom_bt = document.querySelector(".bt_romance");
rom_bt.addEventListener("click", romance_bt);

let hor_bt = document.querySelector(".bt_horror");
hor_bt.addEventListener("click", horror_bt);

let fic_bt = document.querySelector(".bt_fiction");
fic_bt.addEventListener("click", fiction_bt);

//Contact Us
function connecting_with_worldofbooks() {
  alert("Welcome to the World of Books!👋");
  let name = prompt("What is your name?❓");
  let email = prompt("What is your email address?❔");

  alert(`Hello👋 ${name} Thank you for contacting us, we will be in touch.📧`);
}

let contact_our_agent = document.querySelector(".contact_us");
contact_our_agent.addEventListener("click", connecting_with_worldofbooks);
