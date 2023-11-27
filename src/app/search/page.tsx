import React from 'react';
import { searchMovies } from '../services/MovieService';
import Header from '../components/Header';
import { MovieCard } from '../components/MovieCard';


interface ISearchParams {
    title?: string;
    genre?: string
}

interface ISearchProps {
    searchParams: ISearchParams;
}

export default async function SearchResult({ searchParams }: ISearchProps) {
    const { title, genre } = searchParams;

    const movies = await searchMovies(title, genre);

    if (movies.length === 0) {
        return (
            <div>
                <div className='relative bg-gradient-to-b pb-8'>
                    <Header />
                    <main className='relative mb-48 mt-28 h-screen pl-4 lg:pl-14'>
                        <h1 className='mb-4 text-2xl font-bold'>
                            Search relative for: <span className='text-red-500'>{title}</span>
                        </h1>
                        <p className='text-xl'>
                            No movies found.
                        </p>
                    </main>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='relative bg-gradient-to-b pb-8'>
                <Header />
                <main className='relative mb-48 mt-28 h-screen pl-4 pr-4 lg:pr-14 lg:pl-14'>
                    <h1 className='mb-4 text-2xl font-bold'>
                        Search relative for: <span className='text-red-500'>{title}</span>
                    </h1>
                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
                        {movies.map((movie, index) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}