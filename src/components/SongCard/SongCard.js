import React from 'react';
import './SongCard.css';

const SongCard = (props) => {
  const song = props.song

  return (
    <figure className="song-card" id={1} key={1}>
      <h2>{song.songName}</h2>
      <h3>By {song.artistName}</h3>
      <p>{song.link}</p>
    </figure>
  )
 }

export default SongCard
