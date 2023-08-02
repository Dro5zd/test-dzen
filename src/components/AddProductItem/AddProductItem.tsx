import React, { FC } from 'react';
import './AddProductItem.scss';
import { Order, Product } from '../../types';
import { ReactComponent as List } from "../../assets/icons/list.svg"
import { ReactComponent as Trash } from "../../assets/icons/trash.svg"
import { ReactComponent as Cross } from "../../assets/icons/cross.svg"
import { useModal } from '../../hooks/useModal';
import {useAppDispatch} from "../../redux/store";
import {deleteProduct} from "../../redux/slices/products/products-slice";
import {Modal} from "../Modal/Modal";
import {Button} from "../Button/Button";


interface Props {
  product: Product;
  currentOrder: Order;
}

export const AddProductItem: FC<Props> = ({ product, currentOrder }) => {
  const dispatch = useAppDispatch();
  const { toggleModal, modal } = useModal();
  const { title: currentTitle } = currentOrder;

  const {
    id,
    type,
    title,
    serialNumber,
    photo,
  } = product;

  const handleRemoveProductClick = () => {
    dispatch(deleteProduct(id));
    toggleModal();
  };

  return (
    <div className="add-product-item">
      <div className="product__information">
        <div className="product__mark" />
        <img
          src={photo}
          alt="Product poster"
          className="product__cover"
        />

        <div className="product__name-cover name-cover">
          <span className="name-cover__title">
            {title}
          </span>
          <span className="name-cover__serial">
            {serialNumber}
          </span>
        </div>
      </div>

      <span className="product__type">{type}</span>
      <span className="product__current-group-title">
        {currentTitle}
      </span>

      <Button
        onClick={toggleModal}
        buttonStyles="product__delete-button delete-btn"
        // iconStyles="delete-btn__icon"
        // icon={icons.trash}
      >
        <List className="products-button__icon"/>
      </Button>

      <Modal modalMode={modal} closeModal={toggleModal}>
        <div className="delete-window">
          <span className="delete-window__title">
          Ви впевнені, що бажаєте видалити цей продукт?
          </span>

          <div className="delete-window__middle middle">
            <div className="middle__wrap wrap">
              <div className="wrap__mark" />
              <img
                className="wrap__cover"
                src={photo}
                alt="Product cover"
              />
            </div>

            <div className="delete-window__group group">
              <span className="group--title">{title}</span>
              <span className="group--serial">
                {serialNumber}
              </span>
            </div>
          </div>

          <div className="delete-window__buttons-wrapper buttons">
            <button
              className="buttons__no"
              onClick={toggleModal}
            >
              Відмінити
            </button>
            <button
              className="buttons__yes"
              onClick={handleRemoveProductClick}
            >
              <Trash className="buttons__yes--icon"/>
              Видалити
            </button>
          </div>

          <Button
            onClick={toggleModal}
            buttonStyles="add-product-list__cross-button cross-button"
            // iconStyles="cross-button__cross-button-icon"
            // icon={icons.cross}
          >
            <Cross className="cross-button__cross-button-icon"/>
          </Button>
        </div>
      </Modal>
    </div>
  );
};
