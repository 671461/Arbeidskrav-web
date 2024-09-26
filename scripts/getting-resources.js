const mineBtn = document.getElementById("mineBtn");
const woodBtn = document.getElementById("woodsBtn");

// Initialize resource values
let gold = 0;
let metal = 0;
let wood = 0;

// Saves resource variables to local storage
function saveResources() {
  const resources = {
    gold: gold,
    metal: metal,
    wood: wood,
  };
  // Converts object to JSON string
  localStorage.setItem("resources", JSON.stringify(resources));
}

// gets resources from local storage
function loadResources() {
  const resources = JSON.parse(localStorage.getItem("resources"));
  if (resources) {
    gold = resources.gold || 0;
    metal = resources.metal || 0;
    wood = resources.wood || 0;
  }
}

// Updates resource amounts displayed on the page
function updateResources() {
  document.getElementById("goldCount").innerText = `Gold: ${gold}`;
  document.getElementById("metalCount").innerText = `Metal: ${metal}`;
  document.getElementById("woodCount").innerText = `Wood: ${wood}`;
  saveResources();
}

// Loads resources from local storage and updates the display
loadResources();
updateResources();

// Makes the mine picture clickable
mineBtn.addEventListener("click", () => {
  const random = Math.random();
  if (random < 0.25) {
    // If the random number is 25% or lower, you get gold
    gold += Math.floor(Math.random() * 10) + 1;
  } else {
    // Otherwise, you get metal
    metal += Math.floor(Math.random() * 10) + 1;
  }
  updateResources();
});

// Makes the woods picture clickable
woodBtn.addEventListener("click", () => {
  wood += Math.floor(Math.random() * 7) + 1; // You get an amount of wood between 1 and 7
  updateResources();
});

updateResources();
