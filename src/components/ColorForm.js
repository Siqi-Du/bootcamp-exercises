// purpose of colorForm is to collect color data

import { useState } from 'react';

export const ColorForm = props => {

  const [colorForm, setColorForm ] = useState({
    name: '',
    hexcode: '',
  });

  const change = e => {
    // change the state and re-render the component
    setColorForm({
      // object spread operator(take the old colorForm and copy to the new created object)
      ...colorForm,
      // computed property, use [] to indicate this is an property expression
      [ e.target.name ]: e.target.value,
    });
  };

  // we want to pass from child component -> parent ==> callback
  const submitColor = () => {
    props.onSubmitColor({ ...colorForm });
    // clear colorForm
    setColorForm({
      name:'', hexcode:''
    });
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>
      <label>
        HexCode:
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor} >{props.buttonText}</button>
    </form>
  );
};