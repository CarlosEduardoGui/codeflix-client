import Header from '@/components/Header'
import { MovieRow } from '../components/MovieRow'
import { Banner } from '../components/Banner'


export default function Home() {
  return (
    <div className='relative bg-gradient-to-b from-transparent to-black p-8'>
      <Header />
      <main className='relative mb-48 h-screen pl-4 lg:pl-16'>
        <Banner />
        <MovieRow sectionTitle='See Again' />
        <MovieRow sectionTitle='Top Rated' />
        <MovieRow sectionTitle='Action Movies' />
      </main>
    </div>
  )
}
