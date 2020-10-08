import React from 'react';
const { withRouter } = require("react-router-dom");

class Topics extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        const { match, location, history } = this.props;
        return (
            <React.Fragment>
                <h2>My Blog</h2>
                <h3>{match.params.topicId}</h3>
            </React.Fragment>
        );
    }
}

export default withRouter(Topics);