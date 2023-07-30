import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

const SessionCounter = () => {
    const [sessionCount, setSessionCount] = useState(0);

    useEffect(() => {
        socket.on('sessionCountUpdate', (count) => {
            setSessionCount(count);
        });

        socket.emit('getSessionCount');

        return () => {
            socket.off('sessionCountUpdate');
        };
    }, []);

    return <span>Active users count: {sessionCount}</span>;
};

export default SessionCounter;
