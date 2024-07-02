import React, { useState } from 'react'

function Addcontact({addContact}) {

  const[contactData,setContactData] = useState({name:'', email:'', mbn:''})

  function handleChange(e)
  {
    const name = e.target.name
    const value = e.target.value 
    setContactData({...contactData,[name]:value})
  }

  const handleAdd = () =>
    {
      if(contactData.name === "" || contactData.email === "" ||contactData.mbn === "" )
        {
          alert("Please Enter All the Fields")
          return

        }
        addContact(contactData)
        setContactData({name:'',email:'', mbn:''})
    }

  return (
    <div className='formHeader'>
        <div className='add-contact'>Add Contact</div>
        <br></br>
        <table className="table table-"   style={{textAlign:'center', border:'3px ridge black', width:'30%'}} >
        <br></br>
         <tr>
          <th>Name:</th>
          <th><input type="text" placeholder='Enter Name' name='name' value={contactData.name}    onChange={handleChange}></input></th>
         </tr>

         <br></br>

         <tr>
          <th>Mobile Number:</th>
          <th><input type='tel' placeholder='Enter Mobile Number' name='mbn' value={contactData.mbn} onChange={handleChange}></input></th>
         </tr>
        
         <br></br>

         <tr>
          <th>Email:</th>
          <th><input type="email" placeholder='Enter Email' name='email' value={contactData.email} onChange={handleChange}></input></th>
         </tr>

         <br></br>

         <tr>
          <th></th>
           <th><button className='btn btn-success' onClick={handleAdd}>Add Contact</button></th>
         </tr>
        <br></br>
       </table>

    </div>
  )
}

export default Addcontact