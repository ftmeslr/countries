import type { IMainCardProps } from './MainCard.types';

const MainCard = ({ imageUrl = 'https://picsum.photos/200/300', children }: IMainCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition duration-300 ease-in-out">
      <img
        className="w-full h-52 object-cover"
        src={imageUrl}
        alt={imageUrl}
      />
      {children}
    </div>
  );
};

export default MainCard;