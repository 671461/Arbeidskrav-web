const mineBtn = document.getElementById("mineBtn");
const woodBtn = document.getElementById("woodsBtn");

let gold = 0;
let metal = 0;
let wood = 0;

function saveResources() {
  const resources = {
    gold: gold,
    metal: metal,
    wood: wood,
  };

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

function updateResources() {
  document.getElementById("goldCount").innerText = `Gold: ${gold}`;
  document.getElementById("metalCount").innerText = `Metal: ${metal}`;
  document.getElementById("woodCount").innerText = `Wood: ${wood}`;
  saveResources();
}

loadResources();
updateResources();

mineBtn.addEventListener("click", () => {
  const random = Math.random();
  if (random < 0.25) {
    gold += Math.floor(Math.random() * 10) + 1;
  } else {
    metal += Math.floor(Math.random() * 10) + 1;
  }
  updateResources();
});

woodBtn.addEventListener("click", () => {
  wood += Math.floor(Math.random() * 7) + 1;
  updateResources();
});

updateResources();
