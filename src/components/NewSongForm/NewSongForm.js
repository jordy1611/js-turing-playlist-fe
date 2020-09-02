import React, { Component } from 'react';
import './NewSongForm.css';


class NewSongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: '',
      artistName: '',
      songLink: '',
    };
  }

  updateText = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return(
      <section className='new-song-form'>
        <label htmlFor='songName'>Song Name</label>
        <input id='songName' type='text' onChange={this.updateText}></input>
        <label htmlFor='artistName'>Artist Name</label>
        <input id='artistName' type='text' onChange={this.updateText}></input>
        <label htmlFor='songLink'>Link</label>
        <input id='songLink' type='text' onChange={this.updateText}></input>
        <button>Add Song</button>
      </section>
    )
  }
}

export default NewSongForm
