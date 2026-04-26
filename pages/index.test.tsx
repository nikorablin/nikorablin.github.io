import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage, { getStaticProps } from './index'

describe('home page', () => {
  it('renders supplied content and nav links', () => {
    render(<HomePage content={'# Hello\n\nBio content'} />)

    expect(screen.getByRole('heading', { name: 'Nik Korablin' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Github' })).toHaveAttribute('href', 'https://github.com/nikorablin')
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/resume')
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('Bio content')).toBeInTheDocument()
  })

  it('loads markdown content from disk', async () => {
    const result = await getStaticProps({} as never)

    if (!('props' in result)) {
      throw new Error('Expected static props result')
    }

    expect(result.props.content).toContain('full-stack Javascript developer')
  })
})
