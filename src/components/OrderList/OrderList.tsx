import {FC} from 'react';
import './OrderList.scss';
import {OrderWithProducts} from '../../types';
import {useAppSelector} from "../../redux/store";
import {OrderItem} from "../OrderItem/OrderItem";

interface Props {
    orders: OrderWithProducts[];
}

export const OrderList: FC<Props> = ({orders}) => {
    const selected = useAppSelector((state) => state.selectedOrder.selected);

    const listType = selected ? 'order-list--short' : 'order-list';

    return (
        <div className={listType}>
            {orders && orders.map((order) => {
                const {id} = order;

                return <OrderItem key={id} order={order}/>;
            })}
        </div>
    );
};
