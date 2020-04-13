

import React from 'react';

import Home from '../Home/Home'
import Signin from '../Users/Signin'


class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLogged: true,
        }
    }

    render() {
        return (
            <div className='Layout'>
             
                { this.state.isLogged ? <Home /> : <Signin/> }

            </div>
        )
    } 
}

export default Layout;

