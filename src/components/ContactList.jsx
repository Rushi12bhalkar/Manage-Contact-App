import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function ContactList(props) {

    const {contact,  removeContact} = props
    console.log(contact)

    // const contactList = contact.map((val)=>
    // {
    //     return(
    //         <div className='contacts'>
    //             <div style={{marginLeft:'2px'}}>{val.data.name}</div>
    //             <div className='email'>{val.data.mbn}</div>
    //             <div className='email'>{val.data.email}</div>
    //             <span onClick={()=>removeContact(val.id)}><DeleteIcon/></span>
    //         </div>
    //     )
    // })
  return (
    <>
    <div className='ContactHeader'>Contact List</div>
    <table className='table table-bordered w-5 p-5'   style={{textAlign:'center', border:'3px ridge white', width:'100%'}} >
    <tr style={{backgroundColor:'black' , color:'white', fontSize:'20px'}}>
      <th>Name</th> 
      <br></br>
      <th>Mobile Number</th>
      <br></br>
      <th>Email</th>
    </tr>
   {
      contact.map((val)=>{
        return(
          <>
          <tr  className='contacts'>
          
            <td className='email' style={{backgroundColor:'orange', color:'white'}}>{val.data.name}</td>
            <br></br>
            <td className='email' style={{backgroundColor:'#b0306a', color:'white'}}>{val.data.mbn}</td>
            <br></br>
            <td className='email' style={{backgroundColor:'green', color:'white'}}>{val.data.email}</td>
            <br></br>
            <td><span onClick={()=>removeContact(val.id)}><DeleteIcon/></span></td>
            
          </tr>
          </>
        )
        
      })
   }
   </table>
    </>
  )
}

export default ContactList