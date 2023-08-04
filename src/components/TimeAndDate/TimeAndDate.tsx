import React, {FC, useEffect, useState} from 'react';
import './TimeAndDate.scss';
import moment from "moment";
import {ReactComponent as Clock} from "../../assets/icons/clock.svg"

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
        <div className="date-wrapper">
            <span className="date-wrapper__day">{moment().format('dddd')}</span>
            <div className="time-wrapper">
                <span className="time-wrapper__date">{moment().format('DD MMM, YYYY')}</span>
                <Clock className="time-wrapper__icon"/>
                <span className="time-wrapper__time">{time}</span>
            </div>
        </div>

    );
};
