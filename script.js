const nameElements = document.getElementsByClassName("userName"),
  cardElements = document.getElementsByClassName("cardContent");

window.onload = () => {
  let cardLinkDivArray[];
  let cardLinkArray[];
  for (let i = 0; i < cardElements.length; i++) {
    cardLinkDivArray[i] = document.createElement("div");
    cardLinkArray[i] = document.createElement("img");
  }




  for (let i = 0; i < nameElements.length; i++) {
    nameElements[i].innerHTML = "Peter Bachowski";
  }
}



