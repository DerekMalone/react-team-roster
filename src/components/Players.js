import React from 'react';
import PropTypes from 'prop-types';
import { deletePlayer } from '../api/data/teamData';

export default function Players({ player, setTeam }) {
  const handleClick = () => {
    deletePlayer(player.firebaseKey).then(setTeam);
  };

  return (
    <>
      <i>{player.imageUrl}</i>
      <h3>{player.name}</h3>
      <hr />
      <h4>{player.position}</h4>
      <div>
        <button
          onClick={() => handleClick(player)} //  **NEED TO TRY AND USE HISTORY TO ROUTE TO NEWPLAYER?**
          type="button"
          className="btn btn-info"
        >
          Edit Player
        </button>
        <button
          onClick={() => handleClick(player)}
          type="button"
          className="btn btn-info"
        >
          Delete Player
        </button>
      </div>
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
};
