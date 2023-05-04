import { useCallback, useState, forwardRef, useImperativeHandle } from 'react';

export type handleModal = {
  openModal: () => void;
};

const Modal: React.ForwardRefRenderFunction<handleModal> = (props, ref) => {
  const [visible, setVisible] = useState(true);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal
    };
  });

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div>
      Modal aberto
      <button onClick={handleCloseModal}>Fechar modal</button>
    </div>
  );
};

export default forwardRef(Modal);
