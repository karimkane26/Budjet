form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    Titre = document.getElementById("Titre").value
    Montant = document.getElementById("Montant").value
    console.log(Titre)
    console.log(Montant)
    // window.location = "Budjet.html"
}) 