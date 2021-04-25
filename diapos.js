function handleClick(event) {
  if (event.target.parentNode.className == "vignettes") {
    // rendre inactif toutes les vignettes
    const vignettes = Array.from(event.target.parentNode.children)
    vignettes.forEach(vignette => vignette.className = "")
    // rendre actif la vignette en cours
    event.target.className = "active"
    // affichage de la bonne image
    const nbDiapo = event.target.name.split("-")[0]
    const nbImage = event.target.name.split("-")[1]
    const diapo = document.getElementById("diapo-"+nbDiapo)
    diapo.style.left = (1-nbImage)*528+"px"
  }
}

document.addEventListener("click", handleClick)