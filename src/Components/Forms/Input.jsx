import React from 'react';
import { InputSingle } from '../../Styled/styled';


const Input = (props)=> {

  return (
    <InputSingle>
        <input 
          className='inputText' 
          type={props.type} 
          name={props.name} 
          id={props.id} 
          value={props.value}
          onChange={props.handleChange}
          required />
        <label>{props.label}</label>
    </InputSingle>
  );
}

export default Input;