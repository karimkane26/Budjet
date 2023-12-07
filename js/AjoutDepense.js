form = document.querySelector("form")
/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} Montant : le montant de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
let table = [] 
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let Titre = document.getElementById("Titre")
    let Montant = document.getElementById("Montant")
    localStorage.setItem("Titre",Titre.value)
    localStorage.setItem("Montant",Montant.value)
    table.push(Titre,Montant)
}) 