import React from 'react';

import UnsignedNav from '../Nav/UnsignedNav'

class Signin extends React.Component{

    render() {
        return (
            <div className='Signin'>
                < UnsignedNav/>
                <div className='Signin-Container'>

                    <h3>Signin</h3>

                    
                    <div className='Signin-field'>
                        <h5>Email</h5>
                        <input></input>
                    </div>
                    <div className='Signin-field'>
                        <h5>Password</h5>
                        <input></input>
                    </div>
                    
                    <button className='Signin-btn'>Signin</button>
                </div>
                <p>or Register</p>
            </div>
        )
    } 
}

export default Signin;