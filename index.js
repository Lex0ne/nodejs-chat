import React from 'react';
import ReactDom from 'react-dom';
import { ChatView } from './chat/index'

const render = () => {
    ReactDom.render(
        <ChatView />,
        document.getElementById('container')
    );
};
render();