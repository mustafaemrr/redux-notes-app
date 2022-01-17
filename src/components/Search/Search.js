import React, { useState, useEffect } from 'react'
import './Search.scss';
import { useDispatch } from 'react-redux';
import { filter } from '../../redux/slice/notesSlice';


function Search() {
  const [filterKey, setFilterKey] = useState('all');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFilterKey(e.target.value);
  }

  useEffect(() => {
    dispatch(filter(filterKey))
  }, [filterKey])


  return (
    <div className='search'>
      <input type='text' placeholder='Search ...' className='search__input' onChange={handleChange}/>
    </div>
  )
}

export default Search
