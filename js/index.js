// un tableau de depenses
depenses = [{"Titre":"electricité", "Montant":"2500"},{"Titre":"electricité", "Montant":"2500"},{"Titre":"electricité", "Montant":"2500"}

]

const table = document.querySelector('.table')
const tblBody = document.createElement('tbody')
function creaTable(){
    // nous parcours un index = taille du tableau 
    for(let index=0;index<3;index++){
        //  creation des tr 
        let row = document.createElement('tr') 
        for(let element =0; element<depenses.length;element++){
             const cell = document.createElement('td')
             const cellText = document.createTextNode('Test' +element )
             cell.appendChild(cellText)
             row.appendChild(cell)
        }
        tblBody.appendChild(row)
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
}
creaTable()
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

