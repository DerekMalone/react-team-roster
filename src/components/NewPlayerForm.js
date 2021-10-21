import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  name: '',
  imageUrl: '',
  position: '',
};

export default function NewPlayerForm({ user, player, setPlayer }) {
  const [formInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (player.firebaseKey) {
      setFormInput({
        name: player.name,
        firebaseKey: player.firebaseKey,
        imageUrl: player.imageUrl,
        position: player.position,
        uid: [...user].uid,
      });
    }
  }, [player]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayer();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            name="name"
            id="name"
            value={formInput.name}
            onChange={handleChange}
            placeholder="Player Name"
            required
          />
        </label>
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
    uid: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({}).isRequired,
  setPlayer: PropTypes.func.isRequired,
};
