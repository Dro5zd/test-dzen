import React, { FC } from 'react';
import './OrderItem.scss';
import { OrderWithProducts } from '../../types';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {deleteOrder} from "../../redux/slices/orders/orders-slice";
import { Modal } from '../Modal/Modal';
import {useModal} from "../../hooks/useModal";
import {Button} from "../Button/Button";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg"
import { ReactComponent as List } from "../../assets/icons/list.svg"
import { ReactComponent as Trash } from "../../assets/icons/trash.svg"
import { ReactComponent as Arrow } from "../../assets/icons/angleRight.svg"
import {select} from "../../redux/slices/selectedOrder/selected-order-slice";
import moment from "moment";

interface Props {
  order: OrderWithProducts;
}

export const OrderItem: FC<Props> = ({ order }) => {
  const { toggleModal, modal } = useModal();
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.selectedOrder.selected);

  const {
    id,
    title,
    products,
      date,
  } = order;

  const handleRemoveOrderClick = () => {
    dispatch(deleteOrder(id));
    toggleModal();
  };

  const handleSelectClick = () => {
    dispatch(select(id));
  };

  const productQuantity = products.length;
  // const productQuantityTitle = currentProductCount(productQuantity);

  const sumDefault0 = products.reduce((sum, { price }) => {
    return (
      sum + price
        .filter(({ isDefault }) => isDefault === 0)
        .reduce((acc, { value }) => acc + value, 0)
    );
  }, 0);

  const sumDefault1 = products.reduce((sum, { price }) => {
    return (
      sum + price
        .filter(({ isDefault }) => isDefault === 1)
        .reduce((acc, { value }) => acc + value, 0)
    );
  }, 0);

  const isSelected = selected === id;
  const usd = `${sumDefault0} $`;
  const uah = `${sumDefault1} UAH`;
  const orderSize = selected
    ? 'order--small'
    : 'order';
  const titleVisibility = selected
    ? 'order__title-none'
    : 'order__title';
  const priceVisibility = selected
    ? 'price--none'
    : 'price';

  return (
    <div className={orderSize}>
      <span className={titleVisibility}>
        {title}
      </span>

      <div className="order__button-count">
        <Button
          onClick={handleSelectClick}
          buttonStyles="order__products-button products-button"
        ><List className="products-button__icon"/></Button>

        <div className="order__goods-quantity goods-quantity">
          <span className="goods-quantity__count">
            {productQuantity}
          </span>
          <span className="goods-quantity__name">
            Product/s
          </span>
        </div>
      </div>

      <div className="order__date date">
        <span className="date__order">
        {moment(date).format('DD / MM')}
        </span>
        <span className="date__current">
          {moment(date).format('DD / MMM / YYYY')}
        </span>
      </div>

      <div className={priceVisibility}>
        <span className="price__usd">{usd}</span>
        <span className="price__uah">{uah}</span>
      </div>

      {isSelected ? (
        <div className="order__arrow-Wrapper">
          <Arrow className="order__arrow"/>
        </div>
      ) : (
        <Button
          onClick={toggleModal}
          buttonStyles="order__delete-button delete-button"
        ><Trash className="delete-button__icon"/></Button>
      )}

      <Modal modalMode={modal} closeModal={toggleModal}>
        <div className="delete-window">
          <span className="delete-window__title">
           Are you sure you want to delete this order?
          </span>

          <div className="delete-window__middle middle">
            <div className="middle__wrap wrap">
              <div className="wrap__mark" />
            </div>

            <div className="delete-window__group group">
              <span className="group--title">{title}</span>
            </div>
          </div>

          <div className="delete-window__buttons-wrapper buttons">
            <button
              className="buttons__no"
              onClick={toggleModal}
            >
              Cancel
            </button>

            <button
              className="buttons__yes"
              onClick={handleRemoveOrderClick}
            >
              <Trash className="buttons__yes--icon"/>
              Delete
            </button>
          </div>

          <Button
            onClick={toggleModal}
            buttonStyles="cross-button"
          > <Cross className="cross-button__cross-button-icon"/></Button>
        </div>
      </Modal>
    </div>
  );
};
