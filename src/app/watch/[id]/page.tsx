import Header from '@/app/components/Header';
import Player from '@/app/components/Player';
import { getMovieBbyId } from '@/app/services/MovieService';
import React from 'react';

interface IWatchProps {
    params: {
        id: string
    };
}

export default async function Watch({ params }: IWatchProps) {
    const movie = await getMovieBbyId(params.id);

    if (!movie) {
        return (
            <div className='flex h-screen justify-center align-middle'>
                <Header />
                <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
                    <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
                        Sorry, this movie is not avaliable.
                    </h1>
                </main>
            </div>
        );
    }

    return (
        <Player movie={movie} />
    )
}