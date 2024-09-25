const mineBtn = document.getElementById("mineBtn");
const woodBtn = document.getElementById("woodsBtn");

//separate variabler for og fortelle at den starter på 0
let gold = 0;
let metal = 0;
let wood = 0;

//lagrer ressusrs verider til local (Her inne holder vediene 0 til og starte med og blir oppdatert)
function saveResources() {
  const resources = {
    gold: gold,
    metal: metal,
    wood: wood,
  };
  //konverterer objektene til JSON streng og lagrer den på KEYen resources på nettleseren og kan hentes igjen
  localStorage.setItem("resources", JSON.stringify(resources));
}

function loadResources() {
  const resources = JSON.parse(localStorage.getItem("resources"));
  if (resources) {
    gold = resources.gold || 0;
    metal = resources.metal || 0;
    wood = resources.wood || 0;
  }
}

// Function to update resources in the DOM
function updateResources() {
  document.getElementById("goldCount").innerText = `Gold: ${gold}`;
  document.getElementById("metalCount").innerText = `Metal: ${metal}`;
  document.getElementById("woodCount").innerText = `Wood: ${wood}`;
  saveResources();
}

// Load resources from local storage and update DOM
loadResources();
updateResources();

//Endre litt så det lagres til local storage
// Add event listener for mining resources
mineBtn.addEventListener("click", () => {
  const random = Math.random();
  if (random < 0.25) {
    //Sier at hvis den er under 25 generer den gull hvis over generer den metall
    gold += Math.floor(Math.random() * 5) + 1; //Generer tilfeldig menge mellom 5 og 1
  } else {
    metal += Math.floor(Math.random() * 10) + 1; //Gennererer tilfeldig mengde mellom 10 og 1
  }
  updateResources();
});

//Endre litt så det lagres til local storage
// Add event listener for gathering wood
woodBtn.addEventListener("click", () => {
  wood += Math.floor(Math.random() * 7) + 1;
  updateResources();
});

// Initial call to update resources when the page loads
updateResources();
