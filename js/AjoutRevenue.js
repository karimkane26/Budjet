// recuper le revenu sous forme de liste 
function getRevenu(){
    return JSON.parse(localStorage.getItem('Revenue'))
}
let initialRevenu = getRevenu() || []
const TableRevenu = document.querySelector('.tableRevenu')
const bodyRevenu = document.createElement('Tbody')
const divRevenu = document.createElement('div')
 // ajouter dans localstorage
function SetRevenu(Revenue){
    localStorage.setItem('Revenue',JSON.stringify(Revenue))
}
SetRevenu(initialRevenu)
let Revenue = getRevenu()
// console.log(Revenue)

const beforeRevenu = document.querySelectorAll('before-tableRevenu')
divRevenu.setAttribute('id','Revenu')

let h1 = document.createElement('h1')
h1.textContent = "Liste des Revenues "
divRevenu.appendChild(h1)
creaTableRevenu()

function creaTableRevenu(){
    for(let index=0;index<Revenue.length;index++){

        let ligne = document.createElement('tr') 
        // Button de Supression
        let buttonCellule = document.createElement('td')
        let deleteButtonRev = document.createElement('button')
        let buttonTextRev = document.createTextNode('supprimer')
        deleteButtonRev.setAttribute('class','delete-btn')
        deleteButtonRev.appendChild(buttonTextRev)
        for(let element =0;element<Object.keys(Revenue[0]).length;element++ ){
        // Ajout des TD
            const cellulle = document.createElement('td')
            const cellulleText = document.createTextNode(Object.values(Revenue[index])[element])
            deleteButtonRev.setAttribute('revenumontant',Revenue[index].MontantRevenu)
            buttonCellule.appendChild(deleteButtonRev)
            cellulle.appendChild(cellulleText)
            ligne.appendChild(cellulle)
            ligne.appendChild(buttonCellule)
            ligne.setAttribute("id",Revenue[index].MontantRevenu)
        }
        bodyRevenu.appendChild(ligne)
           // creer le button de supression
    }
    TableRevenu.appendChild(bodyRevenu)
    divRevenu.appendChild(TableRevenu)
    document.body.appendChild(divRevenu)
}

let plusbtntd = document.createElement('td')
let ButtonPlus = document.createElement('button')
ButtonPlus.setAttribute("id","addbtnmodalRevenu")
let ButtonPluscontent = document.createTextNode('+')
ButtonPlus.appendChild(ButtonPluscontent)
plusbtntd.appendChild(ButtonPlus)
bodyRevenu.appendChild(plusbtntd)


// le model
let modalRevenu = document.getElementById('ModalRevenu')
let modalButtonRevenu = document.getElementById('addbtnmodalRevenu')
let closeRevenu = document.querySelector('.closeRevenu')
// console.log(modalRevenu)
modalButtonRevenu.onclick = function () {
    modalRevenu.style.display = 'block'
}
closeRevenu.onclick = function(){
    modalRevenu.style.display='none'
}
window.onclick = function(event){
    if(event.target == modalRevenu){
        modalRevenu.style.display = 'none'
    }
}
// Suppression
let deleteButtonRev = document.querySelectorAll('.delete-btn')
deleteButtonRev.forEach(function(buttonRevenu){
    buttonRevenu.addEventListener('click',function(){
        const Revmont = this.getAttribute("revenumontant")
        let ligne = document.getElementById(Revmont)
        ligne.parentNode.removeChild(ligne)
        // enlever l'élement à supprimer
        let Revenua_supprimer = Revenue.filter((Revenu) => Revenu.MontantRevenu !== Revmont)
        Revenue = Revenua_supprimer
        SetRevenu(Revenue)
        SoldeRevenue-=parseInt(MontantRevenu)
                budjet.innerText =SoldeRevenue
                localStorage.setItem("SoldeRevenue",SoldeRevenue) 

    })
})

var TotalRevenu =0;
function update_revenue(){
     for(var i = 0; i<Revenue.length;i++){
        TotalRevenu += parseInt(Revenue[i]['MontantRevenu'])
        // localStorage.setItem('som',JSON.stringify(som))
        //  return JSON.parse(localStorage.getItem('som'))
     }
     return TotalRevenu
}
let SoldeRevenue = update_revenue()
localStorage.setItem("SoldeRevenue",JSON.stringify(SoldeRevenue))
// Ajout de données
function getSoldeRevenu(){
    return (JSON.parse(localStorage.getItem('SoldeRevenue')))
} 
let addRevenuButton = document.querySelector(".addRevenuButton")
addRevenuButton.onclick=function(event){
    event.preventDefault()
    const TitreRevenu = document.getElementById('TitreRevenu').value
    const MontantRevenu = document.getElementById('MontantRevenu').value
    if(!TitreRevenu || !MontantRevenu){
        alert('merci de tout remplir')
        return
    }
    if(MontantRevenu<0){
        return(alert("le revenu ne peut  etre négatif "))
    }
    const newRevenu = {TitreRevenu, MontantRevenu}
    Revenue.push(newRevenu)
    SetRevenu(Revenue)
    SoldeRevenue+=parseInt(MontantRevenu)
    budjet.innerText =SoldeRevenue
    localStorage.setItem("SoldeRevenue",SoldeRevenue)
    // console.log(SoldeRevenue)
    // getRevenu()
    let ligne = document.createElement('tr')
    let cellule0 = ligne.insertCell(0)
    const cellule0Text = document.createTextNode(TitreRevenu)
    cellule0.appendChild(cellule0Text)
    ligne.appendChild(cellule0)

    let cellule1 = ligne.insertCell(0)
    const cellule1Text = document.createTextNode(MontantRevenu)
    cellule1.appendChild(cellule1Text)
    ligne.appendChild(cellule1)
    // boutton de suppression
        let buttonCellule = document.createElement('td')
        let deleteButtonRev = document.createElement('button')
        let buttonTextRev = document.createTextNode('supprimer')
        deleteButtonRev.setAttribute('class','delete-btn')
        deleteButtonRev.setAttribute('revenumontant',MontantRevenu)
        deleteButtonRev.appendChild(buttonTextRev)
        // evenement de suppression
        deleteButtonRev.addEventListener('click',function(){
                const Revmont = this.getAttribute("revenumontant")
                console.log("Revmont"+Revmont)
                let ligne = document.getElementById(Revmont)
                ligne.parentNode.removeChild(ligne)
        
                // enlever l'élement à supprimer
                let Revenuasupprimer = Revenue.filter((revenu)=>revenu.MontantRevenu !== Revmont)
                Revenue = Revenuasupprimer
                SetRevenu(Revenue)
                SoldeRevenue-=parseInt(MontantRevenu)
                budjet.innerText =SoldeRevenue
                localStorage.setItem("SoldeRevenue",SoldeRevenue)

            })  
            buttonCellule.appendChild(deleteButtonRev)
            ligne.appendChild(buttonCellule)
            ligne.setAttribute('id',MontantRevenu)
            bodyRevenu.appendChild(ligne)
            bodyRevenu.appendChild(plusbtntd)
            TableRevenu.appendChild(bodyRevenu)
            divRevenu.appendChild(TableRevenu)
            document.body.appendChild(divRevenu)
            // vider les input
            document.getElementById('TitreRevenu').value =''
            document.getElementById('MontantRevenu').value =''

}

// SetRevenu(Revenue)
TableRevenu.appendChild(bodyRevenu)
divRevenu.appendChild(TableRevenu)
document.body.appendChild(divRevenu)