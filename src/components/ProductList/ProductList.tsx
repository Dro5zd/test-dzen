import { FC } from 'react';
import './ProductList.scss';
import { Product } from '../../types';
import {ProductItem} from "../ProductItem/ProductItem";


interface Props {
  products: Product[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        const { id } = product;

        return (
          <ProductItem key={id} product={product} />
        );
      })}
    </div>
  );
};
