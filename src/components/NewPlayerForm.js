import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createPlayer, updatePlayer } from '../api/data/teamData';

const initialState = {
  name: '',
  playerNumber: 0,
  imageUrl: '',
  position: '',
  uid: '',
};

export default function NewPlayerForm({
  user,
  player,
  setPlayer,
  setTeam,
  editPlayer,
}) {
  const [formInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleNumberChange = (e) => {
  //   const { number, value } = e.target;
  //   setFormInput((prevState) => ({
  //     ...prevState,
  //     [number]: Number(value),
  //   }));
  // };

  useEffect(() => {
    let isMounted = true;
    const userObj = user;
    if (editPlayer.firebaseKey) {
      if (isMounted) {
        setFormInput({
          name: editPlayer.name,
          firebaseKey: editPlayer.firebaseKey,
          imageUrl: editPlayer.imageUrl,
          position: editPlayer.position,
          playerNumber: editPlayer.playerNumber,
          uid: userObj.uid,
        });
      }
    }
    return () => {
      isMounted = false;
    };
  }, [player]);

  const resetForm = () => {
    setFormInput({ ...initialState });
    setPlayer({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayer(formInput).then((team) => {
        setTeam(team);
        resetForm();
      });
    } else {
      createPlayer({ ...formInput }).then((team) => {
        setTeam(team);
        resetForm();
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            name="name"
            id="name"
            htmlFor="name"
            value={formInput.name || ''}
            onChange={handleChange}
            placeholder="Players Name"
            required
          />
          <input
            name="imageUrl"
            id="imageUrl"
            htmlFor="imageUrl"
            value={formInput.imageUrl || ''}
            onChange={handleChange}
            placeholder="Players Image"
          />
          <input
            name="position"
            id="position"
            htmlFor="position"
            value={formInput.position || ''}
            onChange={handleChange}
            placeholder="Players Position"
          />
          {/* <input
            name="playerNumber"
            id="playerNumber"
            type="number"
            htmlFor="playerNumber"
            value={formInput.playerNumber || ''}
            onChange={handleNumberChange}
            placeholder="Players Number"
          /> */}
        </label>
        <button type="submit" className="btn btn-success">
          {player.firebaseKey ? 'Update' : 'Submit'}
        </button>
      </form>
    </>
  );
}

NewPlayerForm.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
    playerNumber: PropTypes.number,
    uid: PropTypes.string,
  }),
  editPlayer: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
    playerNumber: PropTypes.number,
    uid: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setPlayer: PropTypes.func.isRequired,
  setTeam: PropTypes.func.isRequired,
};

NewPlayerForm.defaultProps = { player: {} };
