import React, { FC } from 'react';
import './AddProductList.scss';
import { OrderWithProducts } from '../../types';
import {useAppDispatch} from "../../redux/store";
import {unselect} from "../../redux/slices/selectedOrder/selected-order-slice";
import {useCurrentProduct} from "../../hooks/useProductData";
import {addProduct} from "../../redux/slices/products/products-slice";
import {AddProductItem} from "../AddProductItem/AddProductItem";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg"
import { ReactComponent as Plus } from "../../assets/icons/plus.svg"
import { Button } from '../Button/Button';

interface Props {
  currentOrder?: OrderWithProducts;
}

export const AddProductList: FC<Props> = ({ currentOrder }) => {
  const {
    currentType,
    currentName,
    currentImage,
    generateRandomType,
  } = useCurrentProduct();
  const dispatch = useAppDispatch();

  const serialNum = Math.floor(Math.random() * 10000);
  const isSelected = (currentOrder && currentOrder.id) || 1;

  const handleUnselectClick = () => {
    dispatch(unselect());
    generateRandomType();
  };

  const handleAddProductClick = () => {
    const newProduct = {
      id: Math.random(),
      serialNumber: serialNum,
      isNew: 1,
      photo: currentImage,
      type: currentType,
      title: currentName,
      description: 'Додайте детальний опис надходжень',
      specification: 'Specification 1',
      guarantee: {
        // start: formattedDate(),
        // end: formattedDatePlus3Years(),
      },
      price: [
        {
          value: 100,
          symbol: 'USD',
          isDefault: 0,
        },
        {
          value: 2600,
          symbol: 'UAH',
          isDefault: 1,
        },
      ],
      order: isSelected,
      // date: formattedDate(),

    };

    // @ts-ignore
    dispatch(addProduct(newProduct));
  };

  return (
    <div className="add-product-list">
      <span className="add-product-list__title">
        {currentOrder?.title}
      </span>

      <Button
        onClick={handleAddProductClick}
        buttonStyles="add-product-list__list-add-button list-add-button"
        // iconStyles="list-add-button__list-add-icon"
        // icon={icons.plus}
      >
        <Plus className="list-add-button__list-add-icon"/>
      </Button>

      <hr className="add-product-list__line" />
      <div className="add-product-list__content">

        {currentOrder && currentOrder.products.map((product) => {
          const { id } = product;

          return (
            <AddProductItem
              key={id}
              product={product}
              currentOrder={currentOrder}
            />
          );
        })}

        <Button
          onClick={handleUnselectClick}
          buttonStyles="add-product-list__cross-button cross-button"
          // iconStyles="cross-button__cross-button-icon"
          // icon={icons.cross}
        >
          <Cross className="cross-button__cross-button-icon"/>
        </Button>
      </div>
    </div>
  );
};
