import React from 'react';
import './OrdersPage.scss';
import {Container} from "../../components/Container/Container";
import {OrderList} from "../../components/OrderList/OrderList";
import {Order, Product} from "../../types";
import {useAppSelector} from "../../redux/store";
import {ReactComponent as Plus} from "../../assets/icons/plus.svg"
import {PageTitle} from "../../components/PageTitle/PageTitle";
import {AddProductList} from "../../components/AddProductList/AddProductList";
import {useGetOrder} from "../../hooks/useGetOrder";
import {Button} from "../../components/Button/Button";

interface OrderWithProducts extends Order {
    products: Product[];
}

export const OrdersPage = () => {
    const selected = useAppSelector((state) => state.selectedOrder.selected);
    const orders = useAppSelector((state) => state.orders.orders);
    const products = useAppSelector((state) => state.products.products);

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

    const {currentOrder} = useGetOrder<OrderWithProducts>({
        elements: ordersWithProducts,
        selected,
    });

    const ordersQuantity = orders.length;


    function handleAddOrderClick() {

    }

    return (
        <Container>
            <div className="order__page-info">
                <Button
                    onClick={handleAddOrderClick}
                    buttonStyles="order-button"

                >
                    <Plus className="order-button__icon"/>
                </Button>

                <PageTitle title="Orders" quantity={ordersQuantity}/>
            </div>

            <div className="order__page-orders-content">
                <OrderList orders={ordersWithProducts}/>

                {selected && <AddProductList currentOrder={currentOrder}/>}
            </div>
        </Container>
    );
};
