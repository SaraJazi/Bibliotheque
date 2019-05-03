import React, { Component } from "react";
import { Link } from "react-router-dom";
class Presentation extends Component {
    render() {
        return (
            <div>
                <p>{this.props.desc}</p>
                {/* <a href={this.props.actionPage}>
                    <button className="buttonfirstpage btn btn-primary">
                        {this.props.action}
                    </button>
                </a> */}
                <Link to={this.props.actionPage}>
                    <button className="btn btn-primary">
                        {this.props.action}
                    </button>
                </Link>
            </div>
        );
    }
}

export default Presentation;