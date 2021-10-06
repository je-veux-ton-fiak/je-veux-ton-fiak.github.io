let boutons = document.getElementsByClassName("grand-titre");
let volets = document.getElementsByClassName("sous-item");
let fleches = document.getElementsByClassName("fleche");

function ouvreFermeVolet(element) {
  element.classList.toggle("open");
}

// Activation et programmation des clics
for (let i = 0; i < boutons.length; i++) {
  boutons[i].addEventListener("click", () => {
    ouvreFermeVolet(volets[i]);
    ouvreFermeVolet(fleches[i]);
  });
}
