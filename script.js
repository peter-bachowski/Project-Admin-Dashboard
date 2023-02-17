const nameElements = document.getElementsByClassName("userName"), cardLinkElements = document.getElementsByClassName("cardContent");

const img1 = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");

window.onload = () => {

  createCardLinks();
  for (let i = 0; i < cardLinkElements.length; i++){
    cardLinkElements[i].appendChild(img1);
    cardLinkElements[i].appendChild(img2);
    cardLinkElements[i].appendChild(img3);
  }

  for (let i = 0; i < nameElements.length; i++) {
    nameElements[i].style.innerText = "Peter Bachowski";
  }
}

function createCardLinks() {
  const cardLinkDiv = document.createElement("div");
  cardLinkDiv.style.display = "flex";


  img1.src = "./icons/star-plus-outline.png";
  img2.src = "./icons/eye-plus-outline.png";
  img3.src = "./icons/share-variant-outline.png";

}

