import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  name: '',
  imageUrl: '',
  position: '',
};

export default function NewPlayerForm({ player, setPlayer }) {
  const [formInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    // if (obj.firebaseKey) {
    setFormInput({
      name: player.name,
      firebaseKey: player.firebaseKey,
      imageUrl: player.imageUrl,
      position: player.position,
      // uid: [...user].uid,
    });
    // }
  }, []);

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
          <input
            imageUrl="imageUrl"
            id="imageUrl"
            value={formInput.imageUrl}
            onChange={handleChange}
            placeholder="Image"
            required
          />
          <input
            position="position"
            id="position"
            value={formInput.position}
            onChange={handleChange}
            placeholder="Position"
            required
          />
        </label>
        <button type="submit" className="btn btn-success">
          Submit
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
    uid: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({}).isRequired,
  setPlayer: PropTypes.func.isRequired,
};
