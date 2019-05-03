import React, { Component } from "react";
import { Col } from "react-bootstrap";

class Book extends Component {
    render() {
        const box = {
                       margin: 10,
            height: 200
        }
        return (
            <Col lg={3} md={4} sm={6} xs={12} style={{ display: "inline-block"}}>
            <div>
                <div style={box}>
                    <img style={{ width: "100%", height: "100%" }} src={this.props.cover} />
                </div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.author}</h3>
                <p>{this.props.description}</p></div>
            </Col>
        );
    }
}

export default Book;