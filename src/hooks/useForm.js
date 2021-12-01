import { useState } from 'react';

// useForm is a custom hook, all hook prefix with 'use'
// useForm is not a component: it does not return jsx. 
// all non-component functions should be camalCase
export const useForm = initialForm => {
  const [ form, setForm ] = useState(initialForm);

  const change = e => {
    // change the state and re-render the component
    setForm({
      // object spread operator(take the old colorForm and copy to the new created object)
      ...form,
      // computed property, use [] to indicate this is an property expression
      // [ e.target.name ]: e.target.value,
      [e.target.name]: e.target.type === 'number'
      ? parseInt(e.target.value,10) 
      : e.target.value,
      // [ e.target.name ]: e.target.type === 'number'? parseInt(e.target.value, 10) : e.target.value,
      // input is always string, we can convert to int
    });
  };

  const resetForm = () => setForm(initialForm);

  return [ form, change, resetForm ];
}