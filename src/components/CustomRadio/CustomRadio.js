import React from 'react'
import './CustomRadio.scss';

function CustomRadio() {
  return (
    <>
    <input id="radio1" type="radio" name="radio" className="hidden" />
    <label htmlFor='radio1' className="flex items-center cursor-pointer text-xl">
     <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
      Text
     </label>
    </>
  )
}

export default CustomRadio
