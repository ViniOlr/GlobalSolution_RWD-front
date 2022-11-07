import React from 'react';
import { SubmitSingle } from '../../Styled/styled';

// import { Container } from './styles';

function Submit(props) {
  return (
    <SubmitSingle>
        <input type="submit" value={props.valor} />
    </SubmitSingle>
  );
}

export default Submit;