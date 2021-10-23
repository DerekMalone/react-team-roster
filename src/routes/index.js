import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Team from '../views/Team';
import NewPlayer from '../views/NewPlayer';

export default function Routes({
  user,
  player,
  team,
  setPlayer,
  setTeam,
  editPlayer,
  setEditPlayer,
}) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Team
              team={team}
              setTeam={setTeam}
              setPlayer={setPlayer}
              setEditPlayer={setEditPlayer}
            />
          )}
        />
        <Route
          exact
          path="/player"
          component={() => (
            <NewPlayer
              user={user}
              player={player}
              setPlayer={setPlayer}
              setTeam={setTeam}
              editPlayer={editPlayer}
            />
          )}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  team: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayer: PropTypes.func.isRequired,
  setTeam: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
  editPlayer: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
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
