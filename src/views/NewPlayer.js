import React from 'react';
import PropTypes from 'prop-types';
import NewPlayerForm from '../components/NewPlayerForm';

export default function NewPlayer({
  user, player, setPlayer, setTeam,
}) {
  return (
    <>
      <h1>New Player</h1>
      <NewPlayerForm
        user={user}
        player={player}
        setPlayer={setPlayer}
        setTeam={setTeam}
      />
    </>
  );
}

NewPlayer.propTypes = {
  setPlayer: PropTypes.func.isRequired,
  setTeam: PropTypes.func.isRequired,
  player: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
};
