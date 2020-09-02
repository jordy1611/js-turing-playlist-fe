import React, { Component } from 'react';
import './NewSongForm.css';


class NewSongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <section className='new-song-form'>
        <label htmlFor='song-name-input'>Song Name</label>
        <input id='song-name-input' type='text'></input>
        <label htmlFor='artist-name-input'>Artist Name</label>
        <input id='artist-name-input' type='text'></input>
        <label htmlFor='link-input'>Link</label>
        <input id='link-input' type='text'></input>
        <button>Add Song</button>
      </section>
    )
  }
}

export default NewSongForm
