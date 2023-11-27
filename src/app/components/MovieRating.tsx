export const BorderColor = (rating: string) => {
  switch (rating) {
    case 'pg':
      return 'border-green-500';
    case 'pg-13':
      return 'border-yellow-500';
    case 'r':
      return 'border-red-500';
    case 'nc-17':
      return 'border-purple-500';
    default:
      return 'border-gray-700';
  }
}

export const MovieRating = ({ rating }: { rating: string; }) => {
  return (
    <span className={`text-xsm border-1 border border-gray-700 px-2 uppercase ${BorderColor(rating)}`}>
      {rating}
    </span>
  );
};
