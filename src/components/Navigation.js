import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';
import { signOutUser } from '../api/auth';

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
          Team
        </button>
        <button
          onClick={() => history.push('/player')}
          type="button"
          className="btn btn-light border border-dark"
        >
          New Player
        </button>
        <button
          onClick={signOutUser}
          type="button"
          className="btn btn-danger border border-dark"
        >
          Log Out
        </button>
      </ButtonGroup>
    </div>
  );
}
