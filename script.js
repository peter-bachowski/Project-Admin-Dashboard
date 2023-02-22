const nameElements = document.getElementsByClassName("userName");
const cardElements = document.getElementsByClassName("cardContent");

// on page load

window.onload = () => { // when the page loads
  createCardLinks();

  for (let i = 0; i < nameElements.length; i++) { // fix this
    nameElements[i].innerText = "Peter Bachowski";
  }
};

// functions
function createCardLinks () {
  const iconDiv = document.createElement("div"); // creates a div container element for the card icons
  iconDiv.classList.add("iconContainer");// adds class to div

  const starPlusIcon = document.createElement("img"); // creates the icon elements
  const eyePlusIcon = document.createElement("img");
  const shareIcon = document.createElement("img");

  const linkWrapper = document.createElement("a"); // creates a link wrapper element
  linkWrapper.classList.add("linkWrapper");

  const link1 = linkWrapper.cloneNode(true); const link2 = linkWrapper.cloneNode(true); const link3 = linkWrapper.cloneNode(true);

  link1.appendChild(starPlusIcon); // adds the image elements to the links
  link2.appendChild(eyePlusIcon);
  link3.appendChild(shareIcon);

  link1.href = ""; // sets the link location of the icons **IMPORTANT!
  link2.href = "";
  link3.href = "";

  starPlusIcon.src = "./icons/star-plus-outline.png"; // adds the source location for the images of the icons
  shareIcon.src = "./icons/share-variant-outline.png";
  eyePlusIcon.src = "./icons/eye-plus-outline.png";

  starPlusIcon.classList.add("cardIcons");
  eyePlusIcon.classList.add("cardIcons");
  shareIcon.classList.add("cardIcons");

  iconDiv.appendChild(link1); // adds the icons to the div container
  iconDiv.appendChild(link2);
  iconDiv.appendChild(link3);

  for (let i = 0; i < cardElements.length; i++) { // for each card element, clone the icon div container and add it to the card content
    cardElements[i].appendChild(iconDiv.cloneNode(true));
  }
}
