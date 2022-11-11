import React from 'react';
import { SubmitSingle } from '../../Styled/styled';

// import { Container } from './styles';

function Submit(props) {
  return (
    <SubmitSingle>
        <button type='submit'>{props.valor}</button>
    </SubmitSingle>
  );
}

export default Submit;