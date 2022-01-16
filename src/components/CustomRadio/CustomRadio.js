import React, { useState } from 'react'
import './CustomRadio.scss';

function CustomRadio({color, id}) {
  const [noteColor, setNoteColor] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    
    setNoteColor({
        [name]: value
    })
  }

  return (
    <>
      <input id={id} type="radio" name="color" value={color} className="hidden" onChange={handleChange} />
      <label htmlFor={id} className="">
        <span className={color}></span>
      </label>
    </>
  )
}

export default CustomRadio
