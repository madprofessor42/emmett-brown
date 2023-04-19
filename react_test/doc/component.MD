Можно создать тэг внутри компоненты с помощью REACT
```angular2html
import React from 'react';

const app = () => {
    return React.createElement('div', {className: 'container'}, [
    React.createElement('h1', {className: 'font-bold'}, 'Test JSX'),
    React.createElement('button', {className: ''}, 'Click me!')
    ])
}

```
Или с помощью JSX - более предпочтительно 
```angular2html
const app = () => {
    return (
        <div className="container">
            <h1 className="font-bold">Test JXS</h1>
            <button>Click me!</button>
        </div>
    );
}

```

