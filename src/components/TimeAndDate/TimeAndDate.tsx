import {FC, useEffect, useState} from 'react';
import './TimeAndDate.scss';

interface Props {
    className?: string;
}

export const TimeAndDate: FC<Props> = () => {

    const [date, setDate] = useState(new Date());

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];



    function refreshClock() {
        setDate(new Date());
    }

    const getTwoDigits = (rawDate: number) => (
        rawDate < 10
            ? `0${rawDate}`
            : rawDate
    );

    const currentDate = `${getTwoDigits(date.getDate())} ${monthNames[date.getMonth()]} , ${date.getFullYear()}`;

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
            <span>{getTwoDigits(date.getHours())} : {getTwoDigits(date.getMinutes())}</span>
        </div>

    );
};
