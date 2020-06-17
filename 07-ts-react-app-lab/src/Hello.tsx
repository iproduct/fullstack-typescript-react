import React from 'react';
import './Hello.css';

export interface HelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<HelloProps> {
    render() {
        return (
            <div className="Hello">
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            </div>
        );
    }
}