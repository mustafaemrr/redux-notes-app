import './Form.scss';
import React from 'react'
import Search from '../Search';
import Textarea from '../Textarea';

function Form() {
  return (
      <div className='form'>
        <blockquote class="text-2xl font-semibold italic text-center text-gray-900">
          Redux 
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-amber-500 relative inline-block mx-2">
            <span class="relative text-white"> not </span>
          </span>
          uygulaması
      </blockquote>
      <Search />
      <Textarea />
    </div>
  )
}

export default Form
