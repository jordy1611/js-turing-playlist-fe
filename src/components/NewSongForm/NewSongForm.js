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

  createSong = () => {
    const artistName = this.state.artistName
    const songLink = this.state.songLink
    const songName = this.state.songName

    return {artistName: artistName, id: Date.now(), link: songLink, songName: songName}
  }

  resetInputs = () => {
    document.getElementById('songName').value= ''
    document.getElementById('artistName').value= ''
    document.getElementById('songLink').value= ''
    this.setState( {songName: '', artistName: '', songLink: ''} )
  }

  addSongToQueue = () => {
    const songToAdd = this.createSong()
    this.props.addSongToQueue(songToAdd)
    this.resetInputs()
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
        <button onClick={this.addSongToQueue}>Add Song</button>
      </section>
    )
  }
}

export default NewSongForm
