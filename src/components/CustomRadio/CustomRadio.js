import React, { useState, useEffect } from 'react'
import './CustomRadio.scss';
import { useDispatch } from 'react-redux';
import { addColor } from '../../redux/slice/notesSlice';

function CustomRadio({color, id}) {
  const [noteColor, setNoteColor] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addColor(noteColor))
  }, [noteColor]);

  const handleChange = e => {
    const { value } = e.target;
    
    setNoteColor(value)
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
