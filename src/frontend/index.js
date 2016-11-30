import React from 'react';
import ReactDOM from 'react-dom';
import { ChatView } from './ChatView/index';

export function initApp(container) {
    ReactDOM.render(
        React.createElement(
            ChatView,
            {}
        ),
        container
    );
    return null;
}

initApp(document.querySelector('#container'));