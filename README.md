# react-highlight-text

## Quick start

```js
import React from 'react';
import ReactDOM from 'react-dom';
import HighlightText from 'react-highlight-text';

const Text = ({ text, searchQuery }) => {
    const style = { backgroundColor: 'yellow' };
    return (
        <div>
            <HighlightText text={text} searchQuery={searchQuery} style={style} />
        </div>
    );
};
```

## Installation

`react-highlight-text` requires React >= 0.14

### npm

```
npm install --save react-highlight-text
```