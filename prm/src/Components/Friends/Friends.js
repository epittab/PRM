import React from 'react';

import AddFriend from './AddFriend'

import './Friends.css'

class Friends extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            isLoaded: false,
            data: []
        }
    }

    renderNoFriends(){
        return(
            <div>
                <p className='Friends-text'> "Sorry, looks like you got no friends!"</p>
                < AddFriend />
            </div>
        )
    }

    render() {
        return (
            <div className='Friends'>


                {this.state.data.length === 0 
                ? this.renderNoFriends()
                : this.state.data.map(friend => <p>{friend}</p>)
                }
            </div>
        )
    } 
}

export default Friends;