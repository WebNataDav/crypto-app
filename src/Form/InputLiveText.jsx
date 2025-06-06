import {useState} from 'react';

const InputLiveText = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
  setText(e.target.value);
  }

  return (
    <form>
    <label htmlFor="text">Print the text</label>
    <input onChange={handleChange} id="text" value={text} name="text"/>
    <>
     <h2>Prinded text... {text}</h2>
    </>
    </form>
  )
};

export default InputLiveText;