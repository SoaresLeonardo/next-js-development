import Button from '../Button';

type CardProps = {
  title: string;
  description?: string | number;
  img?: string;
  hasButton?: boolean;
  actionButton?: () => void;
  hasDescription?: boolean;
};

const Card = ({
  title = '',
  description = '',
  img = '',
  hasButton = false,
  actionButton
}: CardProps) => {
  return (
    <div className="max-w-sm w-full rounded overflow-hidden shadow-lg">
      <img className="w-full h-3/5" src={img} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>

        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {hasButton && (
          <Button onClick={actionButton}>Adicionar ao carrinho</Button>
        )}
      </div>
    </div>
  );
};

export default Card;
