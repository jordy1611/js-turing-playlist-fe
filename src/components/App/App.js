import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import SongCards from '../SongCards/SongCards'
import NewSongForm from '../NewSongForm/NewSongForm'

import dataFetcher from '../../dataFetcher.js'
class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: []
    }
  }

  addSongToQueue = (song) => {
    const songs = this.state.songQueue
    songs.push(song)
    this.setState({ songQueue: songs })
  }

  componentDidMount = async() => {
    try {
    const songs = await dataFetcher.getAllSongs()
    this.setState({ songQueue: songs })
  } catch (error) {
    console.error(error)
  }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <NewSongForm
              addSongToQueue={this.addSongToQueue}
            />
            <SongCards
              songQueue={this.state.songQueue}
            />
          </main>
        </div>
      </div>
    )
  }
}

export default App;
