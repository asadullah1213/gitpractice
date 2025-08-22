import React from 'react'
import './login.css';
import ExistingUser from './login/existed';
function login() {
  return (
   <>
   <main className='login_main'>
      <div className="login_form">
        <div className="menu_btn">
          <button>LOGIN</button>
          <button>SIGNUP</button>
        </div>

        <div className="existed">
          <ExistingUser/>
        </div>




      </div>

   </main>
   
   
   
   
   
   
   </>

  )
}

export default login