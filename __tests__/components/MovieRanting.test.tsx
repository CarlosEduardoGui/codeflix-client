import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MovieRating } from '@/app/components/MovieRating'

describe('MovieRating', () => {
    it('should render whitout crashing', () => {
        render(<MovieRating rating='pg' />);
        expect(screen.getByText('pg')).toBeInTheDocument();
    })

    it('should displays the correct rating', () => {
        render(<MovieRating rating='pg-13' />);
        expect(screen.getByText('pg-13')).toBeInTheDocument();
    })

    it('should applies the correct border color for rating  "pg"', () => {
        render(<MovieRating rating='pg' />);
        expect(screen.getByText('pg')).toHaveClass('text-green-500');
    })

    it('should applies the correct border color for rating  "pg-13"', () => {
        render(<MovieRating rating='pg-13' />);
        expect(screen.getByText('pg-13')).toHaveClass('text-yellow-500');
    })

    it('should applies the correct border color for rating  "r"', () => {
        render(<MovieRating rating='r' />);
        expect(screen.getByText('r')).toHaveClass('text-red-500');
    })

    it('should applies the correct border color for rating  "nc-17"', () => {
        render(<MovieRating rating='r' />);
        expect(screen.getByText('r')).toHaveClass('text-red-700');
    })

    it('should applies the correct border color for unknown rating', () => {
        render(<MovieRating rating='unknown' />);
        expect(screen.getByText('unknown')).toHaveClass('text-white');
    })
});