import React from 'react';
import SongCard from './SongCard'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import sampleSong from './sampleSong'

describe('SongCard', () => {

  it('should have correct content when rendered', () => {
    render(<SongCard key={1} song={sampleSong} />)

    const songName = screen.getByText('Icky Vicky')
    const artistName = screen.getByText('By Chip Skylark')
    const songLink = screen.getByText('https://www.youtube.com')

    expect(songName).toBeInTheDocument()
    expect(artistName).toBeInTheDocument()
    expect(songLink).toBeInTheDocument()
  })
})
