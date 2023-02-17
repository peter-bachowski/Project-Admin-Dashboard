const nameElements = document.getElementsByClassName("userName"),
cardLinkElements = document.getElementsByClassName("cardContent");

window.onload = () => {

  createCardLinks();
  for (let i = 0; i < cardLinkElements.length; i++){
    cardLinkElements[i].appendChild(document.createElement("img"));
    cardLinkElements[i].appendChild(document.createElement("img"));
    cardLinkElements[i].appendChild(document.createElement("img"));
  }

  for (let i = 0; i < nameElements.length; i++) {
    nameElements[i].style.innerText = "Peter Bachowski";
  }
}

// function createCardLinks() {
//   const cardLinkDiv = document.createElement("div");
//   cardLinkDiv.style.display = "flex";

//   img1.src = "./icons/star-plus-outline.png";
//   img1.width = 50;
//   img1.height = 50;

//   img2.src = "./icons/eye-plus-outline.png";
//   img2.width = 50;
//   img2.height = 50;

//   img3.src = "./icons/share-variant-outline.png";
//   img3.width = 50;
//   img3.height = 50;
// }

