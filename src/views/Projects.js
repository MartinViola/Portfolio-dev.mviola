import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import '../styles/Projects.css'

function Projects() {
  return (
    <main>
      <h3>Latest projects:</h3>
      <div className='contentContainer'></div>
      <LinkRouter className="linkBackHome"to="*">
            <p>back home</p>
      </LinkRouter>
    </main>
  )
}

export default Projects