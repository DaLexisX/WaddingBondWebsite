import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import { vi } from 'vitest';

// Mock Next.js navigation hooks
// Navbar uses usePathname() which needs to be mocked in tests
const mockUsePathname = vi.fn(() => '/');

vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

describe('Navbar Component', () => {
  beforeEach(() => {
    // Reset mock before each test
    mockUsePathname.mockReturnValue('/');
    // Mock window.scrollY for scroll behavior
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  it('renders all navigation links', () => {
    render(<Navbar />);

    // Check that all expected nav items are present
    // Using getByRole with accessible names (user-friendly!)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('renders the site name/brand', () => {
    render(<Navbar />);
    
    // The brand name should be visible
    expect(screen.getByText(/douglas wadding-bond/i)).toBeInTheDocument();
  });

  it('renders Hire Me button', () => {
    render(<Navbar />);
    
    // The Hire Me button should be present
    expect(screen.getByRole('link', { name: /hire me/i })).toBeInTheDocument();
  });

  it('renders mobile menu button', () => {
    render(<Navbar />);
    
    // Mobile menu toggle button should be present
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(menuButton).toBeInTheDocument();
  });
});

