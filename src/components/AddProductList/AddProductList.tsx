import React, { FC } from 'react';
import './AddProductList.scss';
import { OrderWithProducts } from '../../types';
import {useAppDispatch} from "../../redux/store";
import {unselect} from "../../redux/slices/selectedOrder/selected-order-slice";
import {AddProductItem} from "../AddProductItem/AddProductItem";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg"
import { ReactComponent as Plus } from "../../assets/icons/plus.svg"
import { Button } from '../Button/Button';

interface Props {
  currentOrder?: OrderWithProducts;
}

export const AddProductList: FC<Props> = ({ currentOrder }) => {
  const dispatch = useAppDispatch();


  const handleUnselectClick = () => {
    dispatch(unselect());
  };

  return (
    <div className="add-product-list">
      <span className="add-product-list__title">
        {currentOrder?.title}
      </span>

      <Button
        // onClick={handleAddProductClick}
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
