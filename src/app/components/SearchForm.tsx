'use client';
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export const SearchForm = ({
    searchTerm, onSearch, onSearchTermChange
}: {
    searchTerm: string;
    onSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: (event: React.ChangeEvent<HTMLFormElement>) => void;
}) => {
    return (
        <form
            onSubmit={onSearch}
            className='flex items-center space-x-2'
        >
            <button type='submit'>
                <MagnifyingGlassIcon className='h-6 w-4 text-gray-400' />
            </button>
            <input
                type='search'
                id='search'
                name='search'
                placeholder='Search'
                value={searchTerm}
                onChange={onSearchTermChange}
                className='bg-transparent text-white placeholder-white outline-none' />
        </form>
    );
};
