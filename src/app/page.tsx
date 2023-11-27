import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { Banner } from './components/Banner';
import { getFeatureMovie } from './services/MovieService';

export default async function Home() {
  const featuredMovie = await getFeatureMovie('101');
  return (
    <div className='relative bg-gradient-to-b from-transparent to-black p-8'>
      <Header />
      <main className='relative mb-48 h-screen pl-4 lg:pl-16'>
        <Banner movie={featuredMovie} />
        <MovieRow sectionTitle='See Again' />
        <MovieRow sectionTitle='Top Rated' />
        <MovieRow sectionTitle='Action Movies' />
      </main>
    </div>
  );
}
