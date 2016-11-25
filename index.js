import React from 'react';
import ReactDom from 'react-dom';
import { ChatView } from './chat/index'

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