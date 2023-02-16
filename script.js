const nameElements = document.getElementsByClassName("userName");

window.onload = () => {
  for (let i = 0; i < nameElements.length; i++) {
    nameElements[i].style.innerText = "Peter Bachowski";
  }
}

