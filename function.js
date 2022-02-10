const saveContact =  (db, contact ) => {
    db.setItem(contact.id,JSON.stringify(contact))
    window.location.href='/'
}

const loadContact = (db,  parentNode ) =>{
    let key = Object.keys(db)
    for(key of key){
    let contact = JSON.parse(db.getItem(key)) 
    createContact(parentNode,contact,db)
    }

}

const createContact = (parentNode, contact, db) => {
    
    let divContact = document.createElement('div') 
    let nameContact = document.createElement('h3')
    let numberContact = document.createElement('p')
    let adressContact = document.createElement('p')
    let deleteIcon = document.createElement('span')

    nameContact.innerHTML = contact.name
    numberContact.innerHTML = contact.number
    adressContact.innerHTML = contact.adress
    deleteIcon.innerHTML = 'delete_forever'

    divContact.classList.add('Contact')
    deleteIcon.classList.add('material-icons','icon')

    deleteIcon.onclick = () =>{
        db.removeItem(contact.id)
        window.location.href='/'


    }

    divContact.appendChild(nameContact)
    divContact.appendChild(numberContact)
    divContact.appendChild(adressContact)
    divContact.appendChild(deleteIcon)

    parentNode.appendChild(divContact)




}