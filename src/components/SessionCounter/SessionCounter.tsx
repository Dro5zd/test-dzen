import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';

const socket = io('https://test-socket-server-gkhb.onrender.com');

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

    return <span>Active users: {sessionCount}</span>;
};

export default SessionCounter;
