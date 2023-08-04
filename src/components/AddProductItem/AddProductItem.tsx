import React, {FC} from 'react';
import './AddProductItem.scss';
import {Order, Product} from '../../types';
import {ReactComponent as Trash} from "../../assets/icons/trash.svg"
import {ReactComponent as Cross} from "../../assets/icons/cross.svg"
import {useModal} from '../../hooks/useModal';
import {useAppDispatch} from "../../redux/store";
import {deleteProduct} from "../../redux/slices/products/products-slice";
import {Modal} from "../Modal/Modal";
import {Button} from "../Button/Button";


interface Props {
    product: Product;
    currentOrder: Order;
}

export const AddProductItem: FC<Props> = ({product}) => {
    const dispatch = useAppDispatch();
    const {toggleModal, modal} = useModal();

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
                <div className="product__mark"/>
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

            <Button
                onClick={toggleModal}
                buttonStyles="product__delete-button delete-btn"
            >
                <Trash className="delete-btn__icon"/>
            </Button>

            <Modal modalMode={modal} closeModal={toggleModal}>
                <div className="delete-window">
          <span className="delete-window__title">
          Are you sure you want to delete this product?
          </span>

                    <div className="delete-window__middle middle">
                        <div className="middle__wrap wrap">
                            <div className="wrap__mark"/>
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
                        <Button
                            onClick={toggleModal}
                            buttonStyles={"buttons__no"}>
                            CANCEL
                        </Button>

                        <Button
                            onClick={handleRemoveProductClick}
                            buttonStyles={"buttons__yes"}>
                            <Trash className="buttons__yes--icon"/>
                            DELETE
                        </Button>

                    </div>

                    <Button
                        onClick={toggleModal}
                        buttonStyles="add-product-list__cross-button cross-button"
                    >
                        <Cross className="cross-button__cross-button-icon"/>
                    </Button>
                </div>
            </Modal>
        </div>
    );
};
