import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';

export default function Navigation() {
  const history = useHistory();
  return (
    <div className="text-center mb-3">
      <ButtonGroup>
        <button
          onClick={() => history.push('/')}
          type="button"
          className="btn btn-light border border-dark"
        >
          Home
        </button>
      </ButtonGroup>
    </div>
  );
}
