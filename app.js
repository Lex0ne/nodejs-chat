import React from 'react';
import ReactDom from 'react-dom';
import { ChatView } from './chat/index'

export function initApp(node) {
    ReactDom.render(
        <ChatView />,
        node,
    );
    return null;
}
