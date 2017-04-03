import React, { Component } from 'react';

class NavLink extends Component {
    render() {
        return (
            <li role="presentation">
                <a href={this.props.href} role="button">{this.props.label}</a>
            </li>
        );
    }
}

export default NavLink;
