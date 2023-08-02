import React from 'react';
import './OrdersPage.scss';
import {Container} from "../../components/Container/Container";
import {OrderList} from "../../components/OrderList/OrderList";
import {Order, Product} from "../../types";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {Button} from "../../components/Button/Button";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg"
import {PageTitle} from "../../components/PageTitle/PageTitle";
import {AddProductList} from "../../components/AddProductList/AddProductList";
import {useGetOrder} from "../../hooks/useGetOrder";

interface OrderWithProducts extends Order {
    products: Product[];
}

export const OrdersPage = () => {
    const selected = useAppSelector((state) => state.selectedOrder.selected);
    const orders = useAppSelector((state) => state.orders.orders);
    const products = useAppSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

    const handleAddOrderClick = () => {

    };



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

    const ordersQuantity = orders.length;




    return (
        <Container>
                <div className="home__page-info">
                    <Button
                        onClick={handleAddOrderClick}
                        buttonStyles="home-button"

                    >
                        <Plus className="home-button__icon"/>
                    </Button>

                    <PageTitle title="Orders" quantity={ordersQuantity} />
                </div>

                <div className="home__page-orders-content">
                    <OrderList orders={ordersWithProducts} />

                    {selected
                        && <AddProductList currentOrder={currentOrder} />}
                </div>
        </Container>
    );
};
