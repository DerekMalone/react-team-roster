import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { deletePlayer } from '../api/data/teamData';

export default function Players({ player, setTeam, setEditPlayer }) {
  const history = useHistory();

  const handleClick = () => {
    deletePlayer(player.firebaseKey).then(setTeam);
  };

  const setPlayerEdit = (obj) => {
    setEditPlayer(obj);
    history.push('/player');
  };

  return (
    <>
      <i>{player.imageUrl}</i>
      <h3>{player.name}</h3>
      <hr />
      <h4>{player.position}</h4>
      <div>
        <button
          onClick={setPlayerEdit(player)}
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
  setEditPlayer: PropTypes.func,
};

Players.defaultProps = { setEditPlayer: {} };
