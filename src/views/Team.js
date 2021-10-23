import React from 'react';
import PropTypes from 'prop-types';
import Players from '../components/Players';

export default function Team({
  team, setTeam, setPlayer, user,
}) {
  return (
    <>
      <h1>Creased Lightning</h1>
      <div className="mt-5">
        {team.length ? (
          team.map((player) => (
            <Players
              key={player.firebaseKey}
              user={user}
              player={player}
              setTeam={setTeam}
              setPlayer={setPlayer}
            />
          ))
        ) : (
          <h3>Go add a Player</h3>
        )}
      </div>
    </>
  );
}

Team.propTypes = {
  team: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTeam: PropTypes.func.isRequired,
  setPlayer: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
};
