import React from 'react';

import FriendElement from './FriendElement'

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

    async getFriends(){
        const URL = `http://localhost:4000`
        const route = `/api/friends`
        try{
            const getData = await fetch(`${URL}${route}`, {
                method: 'GET'
            })
            if (getData.ok) {
                const jsonReponse = await getData.json()
                return jsonReponse
            }
            throw new Error('Error Message')
        }
        catch(error){   
            console.log(`error!!! ${error}`)
        }

    }

    componentDidMount(){
        this.getFriends().then(
            (data) => {
                this.setState({
                    isLoaded: true,
                    data: data
                })
            }
            
        )
    }

    renderFriends(){
        return(
            <div>
                { this.state.data.map(friend => < FriendElement key={friend.friend_id} data={friend} />) }
            </div>
        )
        
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
                { this.state.data.length === 0 ? this.renderNoFriends() : this.renderFriends() }
            </div>
        )
    } 
}

export default Friends;