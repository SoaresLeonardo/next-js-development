import { useEffect, useState } from 'react';
import { clearInterval } from 'timers';

const Card = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearInterval(timer);
  }, []);

  const handleOpen = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <h1>Card</h1>

      <button onClick={handleOpen}>open</button>

      {isVisible && (
        <div role="main">
          <p>Content</p>
        </div>
      )}
    </div>
  );
};

export default Card;
