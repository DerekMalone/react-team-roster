import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deletePlayer } from '../api/data/teamData';
import NewPlayerForm from './NewPlayerForm';

export default function Players({ player, setTeam, user }) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = (method) => {
    if (method === 'delete') {
      deletePlayer(player.firebaseKey).then(setTeam);
    } else if (method === 'update') {
      setShowForm(true);
    }
  };

  return (
    <>
      {/* Need to attempt to put the NewPlayerForm here on button click and use a new Promise to get sinlge player then call the form. */}
      <hr />
      <i>{player.imageUrl}</i>
      <h3>{player.name}</h3>
      <h4>{player.position}</h4>
      <div>
        <button
          onClick={() => handleClick('update')}
          type="button"
          className="btn btn-info"
        >
          Edit Player
        </button>
        <button
          onClick={() => handleClick('delete')}
          type="button"
          className="btn btn-info"
        >
          Delete Player
        </button>
        <hr />
      </div>
      {showForm && (
        <NewPlayerForm player={player} setTeam={setTeam} user={user} />
      )}
    </>
  );
}

Players.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
    playerNumber: PropTypes.number,
    uid: PropTypes.string,
  }).isRequired,
  setTeam: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  // setPlayer: PropTypes.func.isRequired,
};
