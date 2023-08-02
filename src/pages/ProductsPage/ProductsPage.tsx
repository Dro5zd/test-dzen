import './ProductsPage.scss';
import {Container} from "../../components/Container/Container";
import {PageTitle} from "../../components/PageTitle/PageTitle";
import {ProductList} from "../../components/ProductList/ProductList";
import {Select} from "../../components/Select/Select";
import {useAppSelector} from "../../redux/store";
import {ChangeEvent, useState} from "react";
import {SortProducts} from "../../types/SortProducts";

export const ProductsPage = () => {

    const products = useAppSelector((state) => state.products.products);
    const [selectedProduct, setSelectedProduct] = useState<SortProducts>(
        SortProducts.ALL,
    );

    const visibleProducts
        = selectedProduct === SortProducts.ALL
        ? products
        : products.filter((product) => product.type === selectedProduct);

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedProduct(event.target.value as SortProducts);
    };

    const productsQuantity = products.length;

    return (
        <Container>
            <div className="products__title-wrapper">
                <PageTitle title="Products" quantity={productsQuantity} />
                <Select
                    label="Type:"
                    onSelectChange={handleSelectChange}
                    value={selectedProduct}
                />
            </div>

            <ProductList
                products={visibleProducts}
            />
        </Container>
    );
};
