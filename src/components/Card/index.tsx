type CardProps = {
  title: string;
  description?: string;
  img?: string;
  hasButton?: boolean;
  hasDescription?: boolean;
};

const Card = ({
  title = '',
  description = '',
  img = '',
  hasButton = false
}: CardProps) => {
  return (
    <div className="max-w-sm w-full rounded overflow-hidden shadow-lg">
      <img className="w-full" src={img} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>

        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {hasButton && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Button
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
