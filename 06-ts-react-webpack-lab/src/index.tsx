import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from './Hello';

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("demo")
);