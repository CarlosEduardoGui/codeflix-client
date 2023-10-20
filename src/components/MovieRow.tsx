import Image from 'next/image';

type MoviewRowProps = {
  sectionTitle: string
}

type MovieCardProps = {
  index: number
}

const MovieCard = ({ index }: MovieCardProps) => (
  <div
    key={index}
    className='group h-28 min-w-[200px] md:h-48 md:min-w-[300px] lg:h-52 lg:min-w-[400px] relative transition duration-200 ease-in transform hover:scale-110 hover:z-50 bg-gradient-to-t from-transparent to-black'>
    <Image
      src={`/item_${index}.png`}
      fill={true}
      alt='MAID'
      className='rouded'
    />
  </div>
)

export function MovieRow({ sectionTitle }: MoviewRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='-ml-2 text-2xl items-center inline-flex font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='-ml-8 flex space-x-4 overflow-x-scroll scrollbar-hide p-6'>
        {[1, 2, 3, 4, 5].map((index) => (
          <MovieCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

