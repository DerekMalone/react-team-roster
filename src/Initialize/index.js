import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Container } from 'reactstrap';
import Navigation from '../components/Navigation';
import Routes from '../routes/index';
import SignIn from '../views/SignIn';

function Initialize() {
  const [user, setUser] = useState(null);
  const [player, setPlayer] = useState({});
  const [team, setTeam] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          name: authed.displayName,
          photo: authed.photoUrl,
          uid: authed.uid,
        };
        setUser(userInfoObj);
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
              player={player}
              setPlayer={setPlayer}
              team={team}
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
