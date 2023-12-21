function getRevenus() {
    return JSON.parse(localStorage.getItem('revenu'))
  }

// un tableau de depenses : on recupere la fonction soit une chaine vide
let initialRevenu = getRevenus() || []

const table = document.querySelector('.table')
const tblBody = document.createElement('tbody')

// ajouter dans localstorage
function setRevenu(revenu) {
    localStorage.setItem('revenu', JSON.stringify(revenu)) 
  }



// function
// Recuperer depuis localstorage

setRevenu(initialRevenu)
let revenu = getRevenus()
// console.log(({depenses}));
creaTable()
//Creation du tableau avec les donnees aui persiste
function creaTable(){
    // nous parcours un index = taille du tableau 
    for(let index=0;index<revenu.length;index++){
        //  creation des tr 
        let row = document.createElement('tr') 
       // creer le button de supression
      let buttonCell = document.createElement('td')
      let deleteButton = document.createElement('button')
      let buttonText = document.createTextNode('Supprimer')
      deleteButton.setAttribute('class', 'delete-btn')
      deleteButton.appendChild(buttonText)
      for(let element = 0; element <Object.keys(revenu[0]).length; element++){
    //ajout td
    deleteButton.setAttribute("revenumontant",revenu[index].Montant)
             const cell = document.createElement('td')
             const cellText = document.createTextNode(Object.values(revenu[index])[element])
             buttonCell.appendChild(deleteButton)
             cell.appendChild(cellText)
             row.appendChild(cell)
             row.appendChild(buttonCell)
             row.setAttribute("id",revenu[index].Montant)
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
        const Montant = this.getAttribute('revenumontant')
        let row = document.getElementById(Montant)
        row.parentNode.removeChild(row)
        // enlever l'element supprimer
        let filteredRevenu= depenses.filter(
            (revenu) => revenu.Montant !== Montant
        )
        revenu = filteredRevenu
        // setCount(depenses.length)
        setRevenu(revenu)
    })
})
// console.log(depenses['Montant'])
var TotalRevenus =0
function update_revenu(){
     for(var i = 0; i<revenu.length;i++){
         TotalRevenus += parseInt(revenu[i]['Montant'])
        // localStorage.setItem('som',JSON.stringify(som))
        //  return JSON.parse(localStorage.getItem('som'))
     }
     return TotalRevenus

}

let Result = update_revenu()
console.log(Result)

// function getResult() {
//     return JSON.parse(localStorage.getItem('Result'))
//   }

function FetTotalRevenu(Result){
    localStorage.setItem("Result",JSON.stringify(Result))
}


let solde = document.getElementById("solde")
solde.style.padding ="20px"
solde.innerText = Result
// console.log(Result) 
FetTotalRevenu(Result)

// Result = getResult()
// update_depense()

// update_depense()
// ajouter un contact 
// 

// let somme = depenses[0]['Montant']
// console.log(somme)
let addContactButton = document.querySelector(".addContactButton")
addContactButton.onclick = function(event){
    event.preventDefault()
    const Titre = document.getElementById('Titre').value
    const Montant = document.getElementById('Montant').value
    if (!Titre || !Montant ) {
        alert('merci de tout remplir')
        return
      }
      const newRevenus = {Titre, Montant}
      revenu.push(newRevenus)
    setRevenu(revenu) 
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
        setRevenu(revenu)
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

setRevenu(revenu)

// console.log(Object.values(depenses[0]))
// console.log(depenses)
console