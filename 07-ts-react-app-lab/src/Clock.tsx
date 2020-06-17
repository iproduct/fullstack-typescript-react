import React from 'react';

export interface ClockProperties {
    alarm?: number;
}

export interface ClockState {
    seconds: number;
}

export class Clock extends React.Component<ClockProperties, ClockState> {
    interval:  NodeJS.Timeout | undefined = undefined;
    constructor(props: ClockProperties) {
        super(props);
        this.state = {seconds: 0};
        // this.tick = this.tick.bind(this);
    }

    tick = () => {
        this.setState(({seconds}) => ({seconds: seconds + 1}));
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        if(this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        return (
            <div className="Clock">{this.state.seconds}</div>
        )
    }
}