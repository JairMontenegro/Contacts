

const name = document.querySelector('.name')
const number = document.querySelector('.number')
const adress = document.querySelector('.adress')
const btnAddContact = document.querySelector('.btn-add-contact')

const contactList = document.querySelector('.contactlist')

const db = window.localStorage


btnAddContact.onclick = () =>{
    let contact ={
        id: Math.random(1,100),
        name: name.value,
        number: number.value,
        adress: adress.value,

    }
    saveContact(db, contact)

}
loadContact (db, contactList)

