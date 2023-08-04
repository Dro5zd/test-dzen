import React, {FC, ReactNode} from 'react';
import './Modal.scss';

interface Props {
  children: ReactNode;
  modalMode: boolean;
  closeModal: () => void;
}

export const Modal:FC<Props> = ({
  modalMode,
  closeModal,
  children,
}) => {
  return (
    <div
      className={modalMode
        ? 'modal modal--active'
        : 'modal'}
      onClick={closeModal}
    >
      <div
        className={modalMode
          ? 'modal__content modal__content--active'
          : 'modal__content'}
        onClick={event => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
