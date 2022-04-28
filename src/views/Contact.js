import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import '../styles/Contact.css'

function Contact() {
  return (
    <main>
      <h3>Contact information:</h3>
      <div className='contentContainer'></div>
      <LinkRouter className="linkBackHome"to="*">
            <p>back home</p>
      </LinkRouter>
    </main>
  )
}

export default Contact