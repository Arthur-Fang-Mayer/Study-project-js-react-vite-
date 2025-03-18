import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header className='header'>{this.props.title}</header>
            </div>
        );
    }
}

export default Header;




