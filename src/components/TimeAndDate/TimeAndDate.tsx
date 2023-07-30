import {FC, useEffect, useState} from 'react';
import './TimeAndDate.scss';

// import { getTwoDigits } from '../../utils';

interface Props {
    className?: string;
}

export const TimeAndDate: FC<Props> = ({className}) => {

    const [date, setDate] = useState(new Date());

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    function refreshClock() {
        setDate(new Date());
    }

    const currentDate = `${date.getDate()} ${monthNames[date.getMonth()]} , ${date.getFullYear()}`;

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    return (
        <div>
            <span>Today</span>
            <span>{currentDate}</span>
            <span>{date.getHours()} : {date.getMinutes()}</span>
        </div>

    );
};
