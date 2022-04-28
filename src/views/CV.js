import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import '../styles/CV.css'

function CV() {
  return (
    <main>
      <h3>Curriculum Vitae:</h3>
      <div className='contentContainer'></div>
      <LinkRouter className="linkBackHome"to="*">
            <p>back home</p>
      </LinkRouter>
    </main>
  )
}

export default CV