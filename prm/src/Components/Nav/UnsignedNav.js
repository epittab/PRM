import React from 'react';

import './Nav.css'

class UnsignedNav extends React.Component{

    render() {
        return (
            <div className='Nav'>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </nav>
           
            </div>
        )
    } 
}

export default UnsignedNav;