import React from 'react'
import { render, screen } from '@testing-library/react'
import ResumeItem from './ResumeItem'
import type { Work } from '../../types/resume'

describe('ResumeItem', () => {
  it('applies no-print to configured work highlights', () => {
    const item: Work = {
      name: 'Test Company',
      position: 'Frontend Engineer',
      startDate: '2024-01-01',
      highlights: [
        'Always visible highlight',
        {
          text: 'Hidden in print highlight',
          noPrint: true,
        },
      ],
    }

    render(<ResumeItem item={item as never} />)

    expect(screen.getByText('Always visible highlight')).not.toHaveClass('no-print')
    expect(screen.getByText('Hidden in print highlight')).toHaveClass('no-print')
  })
})
