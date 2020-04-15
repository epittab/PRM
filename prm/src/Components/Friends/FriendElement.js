import React from 'react'

import './FriendElement.css'

class FriendElement extends React.Component{



    render(){
        return (
            <div className='FriendElement'>
                <div className='FriendElement-wrapper'>
                    <div className='FriendElement-data'>
                        <span><strong>Name: </strong> {this.props.data.first_name} {this.props.data.last_name}</span>
                        <span><strong>Friends Since: </strong> {this.props.data.friends_since}</span>
                    </div>
                    <div className='FriendElement-buttons'>
                        <span>Edit</span>
                        <span>Delete</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendElement;