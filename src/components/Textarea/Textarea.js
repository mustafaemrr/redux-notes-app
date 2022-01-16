import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addDescription } from '../../redux/slice/notesSlice';

import './Textarea.scss';

function Textarea() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addDescription(description))
  }, [description]);

  return (
    <div className='textarea'>
      <textarea name="textarea" placeholder='Notunuzu buraya girin...' onChange={(e) => setDescription(e.target.value)}/>
    </div>
  )
}

export default Textarea
