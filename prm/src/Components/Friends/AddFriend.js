import React from 'react';

import './AddFriend.css'

class AddFriend extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        console.log('click')
    }

    render() {
        return (
            <div className='AddFriend'>
                <div className='AddFriend-btn' onClick={this.handleClick}>
                    <span>Add a Friend</span>
                </div>
            </div>
        )
    } 
}

export default AddFriend;