import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import './App.css'
import Addcontact from './components/Addcontact'
import ContactList from './components/ContactList'
import uuid4 from 'uuid4'

function App() {

  const localStorageKey = "contact"
  
  const[contact, setContact]=useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))
    ||[]})
 
  
  useEffect(()=>
  {
    localStorage.setItem(localStorageKey, JSON.stringify(contact))
  },[contact])

  const contactAdd = (data) =>
    {
      setContact([...contact,{id:uuid4(),data}])
    }

  const removeContact = (id) =>{
      const updatedList = contact.filter((val)=>
      {
        return val.id !== id;
      })
      setContact(updatedList)
  }

  return (
    <>
    <Header></Header>
    <Addcontact addContact={contactAdd}></Addcontact>
    <hr></hr>
    <ContactList contact={contact} removeContact={removeContact}></ContactList>
    </>
  )
}

export default App