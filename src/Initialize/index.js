import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Container } from 'reactstrap';
import Navigation from '../components/Navigation';
import Routes from '../routes/index';
import SignIn from '../views/SignIn';
import { getAllPlayers } from '../api/data/teamData';

function Initialize() {
  const [team, setTeam] = useState([]);
  const [player, setPlayer] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          name: authed.displayName,
          uid: authed.uid,
        };
        setUser(userInfoObj);
        getAllPlayers().then(setTeam);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Container>
        {user ? (
          <>
            <Navigation />

            <Routes
              user={user}
              player={player} // same as using obj in you-do
              team={team}
              setPlayer={setPlayer}
              setTeam={setTeam}
            />
          </>
        ) : (
          <SignIn />
        )}
      </Container>
    </div>
  );
}

export default Initialize;
