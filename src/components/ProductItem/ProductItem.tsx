import React, { FC } from 'react';
import './ProductItem.scss';
import {Order, OrderWithProducts, Product} from '../../types';
import { useModal } from '../../hooks/useModal';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {deleteProduct} from "../../redux/slices/products/products-slice";
import {Modal} from "../Modal/Modal";
import {Button} from "../Button/Button";
import { ReactComponent as Trash } from "../../assets/icons/trash.svg"
import {useGetOrder} from "../../hooks/useGetOrder";

interface Props {
  product: Product;
}

export const ProductItem: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.selectedOrder.selected);
  const orders = useAppSelector((state) => state.orders.orders);
  const products = useAppSelector((state) => state.products.products);
  const { toggleModal, modal } = useModal();
  const {
    id,
    title,
    type,
    guarantee,
    serialNumber,
    photo,
    price,
  } = product;
  const getOrdersWithProducts = (
      orders: Order[],
      products: Product[],
  ): OrderWithProducts[] => {
    return orders.map((order) => ({
      ...order,
      products: products.filter(
          (product) => (
              product.order === order.id
          ),
      ),
    }));
  };
  const ordersWithProducts = getOrdersWithProducts(orders, products);
  const { currentOrder } = useGetOrder<OrderWithProducts>({
    elements: ordersWithProducts,
    selected,
  });

  const orderTitle = currentOrder?.title || 'Невідоме надходження';

  const handleRemoveProductClick = () => {
    dispatch(deleteProduct(id));
    toggleModal();
  };

  return (
    <div className="product">
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

      <div className="product__guarantee guarantee">
        <div>
          <span className="guarantee__from">з</span>

          <span className="guarantee__text">{guarantee.start}</span>
        </div>
        <div>
          <span className="guarantee__to">до</span>

          <span className="guarantee__text">{guarantee.end}</span>
        </div>
      </div>

      <div className="product__cost cost">
        {price.map(({ value, symbol }) => {
          const currentPrice = `${value} ${symbol}`;

          return (
            <span
                // key={}
                className="cost__currency"
            >
              {currentPrice}
            </span>
          );
        })}
      </div>

      <span className="product__group-title">
        {orderTitle}
      </span>

      <Button
        onClick={toggleModal}
        buttonStyles="order__delete-button delete-button"
        // iconStyles="delete-button__icon"
        // icon={icons.trash}
      >
        <Trash className="buttons__yes--icon"/>
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

              <span className="group--serial">{serialNumber}</span>
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
              <img
                className="buttons__yes--icon"
                // src={icons.trash}
                alt="Trash bucket"
              />
              Видалити
            </button>
          </div>

          <Button
            onClick={toggleModal}
            buttonStyles="add-product-list__cross-button cross-button"
            // iconStyles="cross-button__cross-button-icon"
            // icon={icons.cross}
          >
            <Trash className="buttons__yes--icon"/>
          </Button>
        </div>
      </Modal>
    </div>
  );
};
