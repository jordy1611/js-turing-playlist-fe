import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import SongCards from '../SongCards/SongCards'
import SongCard from '../SongCard/SongCard'

import dataFetcher from '../../dataFetcher.js'
class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: []
    }
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
            <SongCards
              songQueue={this.state.songQueue}/>
          </main>
        </div>
      </div>
    )
  }
}

export default App;
