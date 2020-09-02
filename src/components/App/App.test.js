import React from 'react';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import App from './App';
import sampleSongs from './sampleSongs'
import dataFetcher from '../../dataFetcher.js';
import '@testing-library/jest-dom';
jest.mock('../../dataFetcher.js');


describe('App', () => {
  it('should allow users to add a new song', async() => {
    dataFetcher.getAllSongs.mockResolvedValueOnce(sampleSongs)
    render(
        <App />
    )

    const songNameInput = screen.getByPlaceholderText('Add Song')
    const artistNameInput = screen.getByPlaceholderText('Add Artist')
    const songLinkInput = screen.getByPlaceholderText('Add Link')
    const addSongButton = screen.getByRole('button')

    expect(songNameInput).toBeInTheDocument()
    expect(artistNameInput).toBeInTheDocument()
    expect(songLinkInput).toBeInTheDocument()
    expect(addSongButton).toBeInTheDocument()

    fireEvent.change(songNameInput, { target: {value: 'a'}})
    fireEvent.change(artistNameInput, { target: {value: 'b'}})
    fireEvent.change(songLinkInput, { target: {value: 'c'}})

    expect(songNameInput.value).toBe('a')
    expect(artistNameInput.value).toBe('b')
    expect(songLinkInput.value).toBe('c')

    fireEvent.click(addSongButton)

    const newSongName = screen.getByText('a')
    const newArtistName = screen.getByText('By b')
    const newLinkName = screen.getByText('c')

    expect(newSongName).toBeInTheDocument()
    expect(newArtistName).toBeInTheDocument()
    expect(newLinkName).toBeInTheDocument()
  });
});
