import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Team from '../views/Team';
import NewPlayer from '../views/NewPlayer';

export default function Routes({
  player, setPlayer, team, setTeam,
}) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Team team={team} setTeam={setTeam} />}
        />
        <Route
          exact
          path="/player"
          component={() => <NewPlayer player={player} setPlayer={setPlayer} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  player: PropTypes.arrayOf(PropTypes.object).isRequired,
  team: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayer: PropTypes.func.isRequired,
  setTeam: PropTypes.func.isRequired,
};
