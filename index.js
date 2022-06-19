var data = {
  ponedjeljak: {
    p1: "Pizza",
    p2: "Hamburger",
  },
  utorak: {
    p1: "Janjetina",
    p2: "Vratina",
  },
  srijeda: {
    p1: "Zagrebački",
    p2: "Bečki",
  },
  cetvrtak: {
    p1: "Rižoto",
    p2: "Umak od gljiva",
  },
  petak: {
    p1: "Grah",
    p2: "Riba",
  },
};

var selectedButton = null;

var opts = document.querySelectorAll("#dropdownList p");

for (let p of opts) {
  p.addEventListener("click", updateContent);
}
// generic event handler for all the options
function updateContent() {
  const content = selectedButton.closest(".item").querySelector(".content");
  content.innerHTML = this.innerHTML;
  togglePopup();
}

document.querySelector("#xbutton").addEventListener("click", togglePopup);

// generic event handler for all buttons
function addButtonClicked() {
  selectedButton = this; // store selected for use when option selected
  var wantedData = data[selectedButton.id];
  for (let p of opts) {
    p.innerHTML = wantedData[p.id];
  }
  togglePopup();
}
for (let btn of document.getElementsByClassName("addbutton")) {
  btn.addEventListener("click", addButtonClicked);
}

function togglePopup() {
  var popStyle = document.getElementById("addPopUp").style;
  popStyle.display = popStyle.display === "block" ? "none" : "block";
}
