import React from 'react';
import NewSongForm from './NewSongForm'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';

describe('NewSongForm', () => {

  it('should have correct content when rendered', () => {
    render(<NewSongForm addSongToQueue={jest.fn()} />)

    const songNameLabel = screen.getByText('Song Name')
    const songNameInput = screen.getByPlaceholderText('Add Song')
    const artistNameLabel = screen.getByText('Artist Name')
    const artistNameInput = screen.getByPlaceholderText('Add Artist')
    const songLinkLabel = screen.getByText('Link')
    const songLinkInput = screen.getByPlaceholderText('Add Link')
    const addSongButton = screen.getByRole('button')

    expect(songNameLabel).toBeInTheDocument()
    expect(songNameInput).toBeInTheDocument()
    expect(artistNameLabel).toBeInTheDocument()
    expect(artistNameInput).toBeInTheDocument()
    expect(songLinkLabel).toBeInTheDocument()
    expect(songLinkInput).toBeInTheDocument()
    expect(addSongButton).toBeInTheDocument()
  });

  it('should have correct content when rendered', () => {
    render(<NewSongForm addSongToQueue={jest.fn()} />)

    const songNameInput = screen.getByPlaceholderText('Add Song')
    const artistNameInput = screen.getByPlaceholderText('Add Artist')
    const songLinkInput = screen.getByPlaceholderText('Add Link')

    expect(songNameInput).toBeInTheDocument()
    expect(artistNameInput).toBeInTheDocument()
    expect(songLinkInput).toBeInTheDocument()

    fireEvent.change(songNameInput, { target: {value: 'a'}})
    fireEvent.change(artistNameInput, { target: {value: 'b'}})
    fireEvent.change(songLinkInput, { target: {value: 'c'}})

    expect(songNameInput.value).toBe('a')
    expect(artistNameInput.value).toBe('b')
    expect(songLinkInput.value).toBe('c')
  });
})
