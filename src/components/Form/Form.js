import './Form.scss';
import Search from '../Search';
import Textarea from '../Textarea';
import CustomRadio from '../CustomRadio/';

function Form() {
  return (
    <div className='form'>
      <blockquote className="text-2xl font-semibold italic text-center text-gray-900">
        Redux 
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-amber-500 relative inline-block mx-2">
          <span className="relative text-white"> not </span>
        </span>
        uygulaması
      </blockquote>
      <Search />
      
      <div className="form__group">
        <Textarea />

        <div className="form__button-group">
          <div className="form__radio-group">
          <CustomRadio />
          </div>
          <div className="">
            <button>Ekle</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
