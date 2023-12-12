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
// Recuperer depuis localstorage

setDepenses(initialDepense)
let depenses = getDepenses()
console.log(({depenses}));
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
let deleteButton  = document.querySelectorAll('.delete-btn')
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
    })
})



// ajouter un contact 
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

    })
      buttonCell.appendChild(deleteButton)
      row.appendChild(buttonCell)
      row.setAttribute('id',Montant)
      tblBody.appendChild(row)
      table.appendChild(tblBody)
      document.body.appendChild(table)
        // vider les inputs
    document.getElementById('Titre').value = ''
    document.getElementById('Montant').value = ''
}
setDepenses(depenses)