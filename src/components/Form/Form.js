import './Form.scss';
import Search from '../Search';
import Textarea from '../Textarea';
import CustomRadio from '../CustomRadio/';
import Card from '../Card';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/slice/notesSlice';

function Form() {
  const items = useSelector((state) => state.notes.items);
  const color = useSelector((state) => state.notes.color);
  const description = useSelector((state) => state.notes.description);

  const dispatch = useDispatch();

  const handleClick = () => {
    if( color && description ) {
      dispatch(addTodo());
    }
  }
  
  return (
    <div className='form'>
      <blockquote className="text-2xl font-semibold italic text-center text-gray-900">
        Redux 
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-amber-500 relative inline-block mx-2">
          <span className="relative text-white"> not </span>
        </span>
        uygulaması
      </blockquote>
      
      <div className="form__group">
        <Textarea />

        <div className="form__button-group">
          <div className="form__radio-group">
          <CustomRadio id='type-1' color='blue' />
          <CustomRadio id='type-2' color='pink' />
          <CustomRadio id='type-3' color='yellow' />
          <CustomRadio id='type-4' color='purple' />
          <CustomRadio id='type-5' color='green' />
          </div>
          <div className="">
            <button className='form__add-button' onClick={handleClick}>Ekle
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </button>
          </div>
        </div>
      </div>
      <Search />
      <div className="form__card-list">
        {
          items.map((item) => (
            <Card key={item.id} id={item.id} description={item.description} color={item.color} />
          ))
        }
      </div>
    </div>
  )
}

export default Form
