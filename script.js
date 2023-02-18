const nameElements = document.getElementsByClassName("userName"),
  cardElements = document.getElementsByClassName("cardContent");

window.onload = () => {//when the page loads

  const iconDiv = document.createElement("div"); //creates a div container element for the card icons
  iconDiv.classList.add("iconContainer");//adds class to div

  const starPlusIcon = document.createElement("img"); //creates the icon elements
  const shareIcon = document.createElement("img");
  const eyePlusIcon = document.createElement("img");

  starPlusIcon.src = "./icons/star-plus-outline.png"; //adds the source location for the images of the icons
  shareIcon.src = "./icons/eye-plus-outline.png";
  eyePlusIcon.src = "./icons/share-variant-outline.png";

  starPlusIcon.classList.add("cardIcons");
  eyePlusIcon.classList.add("cardIcons");
  shareIcon.classList.add("cardIcons");

  iconDiv.appendChild(starPlusIcon); //adds the icons to the div container
  iconDiv.appendChild(eyePlusIcon);
  iconDiv.appendChild(shareIcon);

  for (let i = 0; i < cardElements.length; i++) { //for each card element, clone the icon div container and add it to the card content
    cardElements[i].appendChild(iconDiv.cloneNode(true));
  }

  for (let i = 0; i < nameElements.length; i++) {//fix this
    nameElements[i].innerHTML = "Peter Bachowski";
  }
}



