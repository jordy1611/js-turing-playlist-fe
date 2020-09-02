import React from 'react';
import SongCard from '../SongCard/SongCard'
import './SongCards.css';

const SongCards = (props) => {
  const songs = props.songQueue
  return (
    <article className="songCards">
      {songs.map((song, i) => {
        return <SongCard
        key={i}
        song={ song }
        />
      })}

    </article>
  )
 }




export default SongCards
