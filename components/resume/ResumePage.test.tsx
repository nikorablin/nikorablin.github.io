import React from 'react'
import { render, screen } from '@testing-library/react'
import ResumePage from './ResumePage'
import resume from '../../resume.json'

describe('resume page', () => {
  it('renders the main resume sections', () => {
    render(<ResumePage resume={resume} />)

    expect(screen.getByRole('heading', { name: 'Summary' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Work Experience' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument()
  })

  it('renders known resume content', () => {
    render(<ResumePage resume={resume} />)

    expect(screen.getByText('Nik Korablin')).toBeInTheDocument()
    expect(screen.getByText('HubSpot')).toBeInTheDocument()
    expect(screen.getByText('Temple University')).toBeInTheDocument()
  })
})
