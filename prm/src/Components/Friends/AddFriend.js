import React from 'react';

import './AddFriend.css'

class AddFriend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            viewTemplate: 1,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleClick(){
        this.setState({
            viewTemplate: 2
        })
        console.log('click')
    }

    handleSubmit(){
        console.log('submit!')
    }

    renderButton(){
        return (
            <div className='AddFriend-btn' onClick={this.handleClick}>
                <span>Add a Friend</span>
            </div>
        )
    }

    renderForm(){
        return (
            <div className='AddFriend-form-wrapper' >
                <form className='AddFriend-form' onSubmit={this.handleSubmit}>
                
                    <div className='AddFriend-element-wrapper'>
                        <label  className='AddFriend-label' 
                                htmlFor='friend-first-name'>First Name</label>
                        <input className='AddFriend-input' 
                                id='friend-name' 
                                name='' 
                                value=''></input>
                    </div>
                    
                    <div className='AddFriend-element-wrapper'>
                        <label  className='AddFriend-label' 
                                htmlFor='friend-last-name'>Last Name</label>
                        <input className='AddFriend-input' 
                                id='friend-name' 
                                name='' 
                                value=''></input>
                    </div>
                    
                    <div className='AddFriend-element-wrapper'>
                        <label  className='AddFriend-label' 
                                htmlFor='friend-name'>Date of Birth</label>
                        <input className='AddFriend-input' 
                                id='friend-name' 
                                name='' 
                                value=''></input>
                    </div>
                    

                    <div className='AddFriend-element-wrapper'>
                        <label  className='AddFriend-label' 
                                htmlFor='friend-name'>Name</label>
                        <input className='AddFriend-input' 
                                id='friend-name' 
                                name='' 
                                value=''></input>
                    </div>
                    <button>Submit</button>
                </form>                
            </div>
        )
    }

    render() {
        return (
            <div className='AddFriend'>
                {this.state.viewTemplate === 1 ? this.renderButton() : this.renderForm()}
            </div>
        )
    } 
}

export default AddFriend;