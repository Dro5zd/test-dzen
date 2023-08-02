import {FC, useEffect, useState} from 'react';
import './TimeAndDate.scss';
import moment from "moment";

interface Props {
    className?: string;
}

export const TimeAndDate: FC<Props> = () => {
    const [time, setTime] = useState(moment().format('HH:MM'));

    function refreshClock() {
        setTime(moment().format('HH:MM'));
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    return (
        <div>
            <span>{moment().format('dddd')}</span>
            <span>{moment().format('DD MMM, YYYY')}</span>
            <span>{time}</span>
        </div>

    );
};
