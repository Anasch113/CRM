import React from 'react'
import '../Components/Contact/contact.css'
import { MdPlayArrow } from "react-icons/md";
const Contact = () => {
  return (
    <div className='contact-container'>


      <div className='contact-main-container'>



<div className='ai-chat-box'>
<h1 className='text-5xl text-white font-poppins font-bold self-start max-[550px]:text-2xl'>Want to find out more?</h1>
<div className="chatting">
  <h3>FyreWrap</h3>
  <h5>Hello and welcome to FyreWrap Assistance! I'm your dedicated FyreWrap Agent, ready to help with all your needs. please share your name and email. 
Whether it's about product details, installation guidance, compliance with fire safety codes, quote or any other inquiries regarding FyreWrap, I'm here to 
assist. How can I help you today?</h5>
</div>
</div>

<form className='contact-form' >

<div className='form-inputs'>
<div className="form-heads">
<p>Register/Login</p>
</div>
<div className="inputs">


  <label htmlFor=""> Name</label>
  <input type="text" name='name' />
 <label htmlFor="">Email</label>

  <input type="email" name='email'  />
</div>


</div>

<div className="form-button">
<button><MdPlayArrow className='text-6xl text-white'/></button>
</div>


</form>


      </div>
      

    </div>
  )
}

export default Contact
