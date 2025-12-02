import React from 'react';
import { render, screen } from '@testing-library/react';
import Architecture from './DevOpsJourney';

describe('DevOpsJourney Architecture page', () => {
  it('renders the main heading and hero copy', () => {
    render(<Architecture />);

    // A11y-friendly: query by role and accessible name
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /the deployment pipeline/i,
    });

    expect(heading).toBeInTheDocument();
    expect(
      screen.getByText(/multi-stage docker build pipeline on google cloud/i),
    ).toBeInTheDocument();
  });

  it('renders all 5 pipeline steps in order', () => {
    render(<Architecture />);

    const stepTitles = [
      /local trigger & context filter/i,
      /cloud build ingestion/i,
      /docker builder stage/i,
      /docker runner stage/i,
      /cloud run deployment/i,
    ];

    // Get all step headings (h3 elements containing step titles)
    const stepHeadings = stepTitles.map((title) =>
      screen.getByRole('heading', { level: 3, name: title })
    );

    // Verify all steps exist
    stepHeadings.forEach((heading) => {
      expect(heading).toBeInTheDocument();
    });

    // Verify order: each step should appear before the next one in the DOM
    for (let i = 0; i < stepHeadings.length - 1; i++) {
      const currentStep = stepHeadings[i];
      const nextStep = stepHeadings[i + 1];
      
      // Check that current step appears before next step in DOM order
      expect(currentStep.compareDocumentPosition(nextStep)).toBe(
        Node.DOCUMENT_POSITION_FOLLOWING
      );
    }
  });
});


