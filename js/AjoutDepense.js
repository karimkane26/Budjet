function getDepenses() {
    return JSON.parse(localStorage.getItem('depenses'))
  }

// un tableau de depenses : on recupere la fonction soit une chaine vide
let initialDepense = getDepenses() || []

const table = document.querySelector('.table')
const tblBody = document.createElement('tbody')
function setCount(count) {
    countElement.innerHTML = count
  }
// ajouter dans localstorage
function setDepenses(depenses) {
    localStorage.setItem('depenses', JSON.stringify(depenses)) 
  }
// function
// Recuperer depuis localstorage

setDepenses(initialDepense)
let depenses = getDepenses()
// console.log(({depenses}));
creaTable()
//Creation du tableau avec les donnees aui persiste
function creaTable(){
    // nous parcours un index = taille du tableau 
    for(let index=0;index<depenses.length;index++){
        //  creation des tr 
        let row = document.createElement('tr') 
       // creer le button de supression
      let buttonCell = document.createElement('td')
      let deleteButton = document.createElement('button')
      let buttonText = document.createTextNode('Supprimer')
      deleteButton.setAttribute('class', 'delete-btn')
      deleteButton.appendChild(buttonText)
      for(let element = 0; element <Object.keys(depenses[0]).length; element++){
    //ajout td
    deleteButton.setAttribute("depensesmontant",depenses[index].Montant)
             const cell = document.createElement('td')
             const cellText = document.createTextNode(Object.values(depenses[index])[element])
             buttonCell.appendChild(deleteButton)
             cell.appendChild(cellText)
             row.appendChild(cell)
             row.appendChild(buttonCell)
             row.setAttribute("id",depenses[index].Montant)
        }
        tblBody.appendChild(row)
    }
        
}
let plus = document.createElement('td')
let plusbtn = document.createElement('button')
plusbtn.setAttribute("id","addbtnmodal")
let pluscontent = document.createTextNode('+')
plusbtn.appendChild(pluscontent)
plus.appendChild(plusbtn)
tblBody.appendChild(plus)
table.appendChild(tblBody)
document.body.appendChild(table)
//le model
let modal = document.getElementById('contactModal')
let modalButton = document.getElementById('addbtnmodal')
let close = document.querySelector('.close')

modalButton.onclick = function () {
    modal.style.display = 'block'
}
close.onclick = function(){
    modal.style.display='none'
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none'
    }
}
// Suppression
let deleteButton = document.querySelectorAll('.delete-btn')
deleteButton.forEach(function(button){
    button.addEventListener('click',function(){
        const Montant = this.getAttribute('depensesmontant')
        let row = document.getElementById(Montant)
        row.parentNode.removeChild(row)
        // enlever l'element supprimer
        let filteredDepenses = depenses.filter(
            (depense) => depense.Montant !== Montant
        )
        depenses = filteredDepenses
        // setCount(depenses.length)
        setDepenses(depenses)
        let subdepense  =  lastRestul- parseInt(Montant)
      console.log(subdepense)
   
    })
})
// recuperons last result en fonction 


// console.log(depenses['Montant'])
var TotalDepenses =0
function update_depense(){
     for(var i = 0; i<depenses.length;i++){
         TotalDepenses += parseInt(depenses[i]['Montant'])
        // localStorage.setItem('som',JSON.stringify(som))
        //  return JSON.parse(localStorage.getItem('som'))
     }
     return TotalDepenses
}
let Result = update_depense()
// console.log(Result)
// console.log(AfficherDepense(Result))  

// function getResult() {
//     return JSON.parse(localStorage.getItem('Result'))
//   }
// Demande du Budjet

let budjet = document.getElementById("budjet")
// console.log(Object.values(depenses))
function setbudjet(invitebudjet)
{
    localStorage.setItem("invitebudjet",JSON.stringify(invitebudjet))
}
// test de voir si le tableau est vide sinon on demande le budjet
if(Object.values(depenses)==""){
 var  invitebudjet = prompt("Entrez votre budjet")
// localStorage.getItem(JSON.parse(invitebudjet))
    setbudjet(invitebudjet) 
} 
function getBudjet(){
    return(JSON.parse(localStorage.getItem('invitebudjet')))
}
// budjet= getBudjet()
budjet.style.padding = "20px"
budjet.innerText= getBudjet()
let soldebudjet= budjet.innerText
// console.log(TotalDepenses)
console.log(budjet.textContent)

localStorage.setItem("Result",JSON.stringify(Result))

// Result = getDepenses
// Affichage dépenses
let depense = document.getElementById("depense")

// depense.style.padding ="20px"
// depense.innerText = Result
function AfficherDepense(depense){
    depense.style.padding = "20px"
    depense.innerText = Result
}
AfficherDepense(depense)
// calcule de solde 
let solde = document.getElementById("solde")
let soldeamount = parseInt(soldebudjet - TotalDepenses)
console.log(soldeamount)
localStorage.setItem('soldeamount',JSON.stringify(soldeamount))
function getSolde(){
    return localStorage.getItem(JSON.parse(soldeamount))
}
// Affichage du solde 
solde.innerHTML = soldeamount
solde.style.padding = "20px"



let addContactButton = document.querySelector(".addContactButton")
addContactButton.onclick = function(event){
    event.preventDefault()
    const Titre = document.getElementById('Titre').value
    const Montant = document.getElementById('Montant').value
    if (!Titre || !Montant ) {
        alert('merci de tout remplir')
        return
      }
      const newDepenses = {Titre, Montant}
      depenses.push(newDepenses)
    setDepenses(depenses) 
      getDepenses()
      let lastRestul =  Result+ parseInt(Montant)
      console.log(lastRestul)
      depense.innerText = lastRestul
      lastRestul = localStorage.setItem("lastRestul",JSON.stringify(lastRestul))

      
    
    
    // ajouter un tr
    let row = document.createElement('tr')

    let cell0 = row.insertCell(0)
    const cell0Text = document.createTextNode(Titre)
    cell0.appendChild(cell0Text)
    row.appendChild(cell0)

    let cell1 = row.insertCell(1)
    const cell1Text = document.createTextNode(Montant)
    cell1.appendChild(cell1Text)
    row.appendChild(cell1)

      // creer le button de supression
      let buttonCell = document.createElement('td')
      let deleteButton = document.createElement('button')
      let buttonText = document.createTextNode('Supprimer')
      deleteButton.setAttribute('class', 'delete-btn')
      deleteButton.setAttribute('depensesmontant', Montant)
      deleteButton.appendChild(buttonText)

    //   ajout d'un evenement
    deleteButton.addEventListener('click',function(){
            const Montant = this.getAttribute('depensesmontant')
            let row = document.getElementById(Montant)
            row.parentNode.removeChild(row)
            // enlever l'element supprimer
        let filteredDepenses = depenses.filter(
            (depense) => depense.Montant !== Montant
            
        )
        depenses = filteredDepenses
        setDepenses(depenses)
    //     let subdepense  =  lastRestul- parseInt(Montant)
    //   console.log(lastRestul)
    //   depense.innerText = subdepense
    //   subdepense = localStorage.setItem("subdepense",JSON.stringify(subdepense))
    })
    
    // document.body.appendChild(table)
      buttonCell.appendChild(deleteButton)
      row.appendChild(buttonCell)
      row.setAttribute('id',Montant)
      tblBody.appendChild(row)
      tblBody.appendChild(plus)
    // table.appendChild(tblBody)
      table.appendChild(tblBody)
      document.body.appendChild(table)
        // vider les inputs

       
    document.getElementById('Titre').value = ''
    document.getElementById('Montant').value = ''
}


setDepenses(depenses)

// console.log(Object.values(depenses[0]))
// console.log(depenses)
console