import './CustomRadio.scss';

function CustomRadio({color, id}) {
  return (
    <>
      <input id={id} type="radio" name="color" value={color} className="hidden" />
      <label htmlFor={id} className="">
        <span className={color}></span>
      </label>
    </>
  )
}

export default CustomRadio
