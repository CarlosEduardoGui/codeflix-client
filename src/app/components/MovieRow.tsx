import { Movies } from '../types/movie';
import { MovieCard } from './MovieCard';

type MoviewRowProps = {
  sectionTitle: string
  movies: Movies;
}

export function MovieRow({ sectionTitle, movies }: MoviewRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='-ml-2 text-2xl items-center inline-flex font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}