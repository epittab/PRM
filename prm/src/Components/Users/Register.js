import React from 'react';

import Nav from '../Nav/Nav'

class Register extends React.Component{

    render() {
        return (
            <div className='Register'>
                < UnsignedNav />
                <div className='Register-Container'>

                    <h3>Register</h3>

                    <div className='Register-field'>
                        <h5>Username</h5>
                        <input></input>
                    </div>
                    <div className='Register-field'>
                        <h5>Email</h5>
                        <input></input>
                    </div>
                    <div className='Register-field'>
                        <h5>Password</h5>
                        <input></input>
                    </div>
                    <div className='Register-field'>
                        <h5>Password Confirmation</h5>
                        <input></input>
                    </div>
                    <button className='Register-btn'>Register</button>
                </div>
                <p>or Sign In</p>
            </div>
        )
    } 
}

export default Register;