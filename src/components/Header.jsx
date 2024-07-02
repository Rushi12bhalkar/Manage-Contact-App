import React from 'react'


function Header() {

  const d = new Date().toLocaleDateString();
  const t = new Date().toLocaleTimeString();

  return (
    <>
   <div className='header'>Manage Contacts</div>

   <div style={{backgroundColor:'black'}}>
             <h2 style={{backgroundColor:'yellowgreen'}}>Today's Date & Time : <span style={{'color':'white','fontWeight':'bold', 'paddingRight':'7px'}}>{d} <span>{t}</span></span> </h2>
  </div>
   </>
  )
}

export default Header