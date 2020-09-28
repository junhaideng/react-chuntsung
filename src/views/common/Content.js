import React from "react";
import {Link} from "react-router-dom";

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <>
            <Link to="/dashboard">Link</Link>
            {this.props.message}
        </>
    }
}

Content.defaultProps = {
    message: "Content"
}

export default Content