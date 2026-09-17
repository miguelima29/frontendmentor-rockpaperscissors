import { useState } from 'react'


import './rules.css'
import rulesImage from '../../assets/image-rules.svg'
import closeIcon from '../../assets/icon-close.svg'

function Rules() {

  const[isOpen, setIsOpen] = useState(false);

  return (
    <section className="rules">

      <div className="rules-button">
        <button className="rules-title" onClick={() => setIsOpen(true)}> RULES </button>
      </div>


      {isOpen && (
        <div className="rules-content-overlay">
          <div className="rules-content">
            <div className="rules-content-header">
              <h1 className="rules-content-title">RULES</h1>
              <img className="rules-content-close" src={closeIcon} alt="Close" onClick={() => setIsOpen(false)} />
          </div>
        
          <div className="rules-content-image">
            <img src={rulesImage} alt="Rules" />
          </div>

      </div>

        </div>

      )}


    </section>
  )
}

export default Rules
