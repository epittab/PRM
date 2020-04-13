import React from 'react';

import Nav from '../Nav/Nav'
import EngageLog from '../Engage/EngageLog'
import EngageFuture from '../Engage/EngageFuture'
import AddFriend from '../Friends/AddFriend'

import './Home.css'

class Home extends React.Component{

    render() {
        return (
            <div className='Home'>
                <Nav />
                <div className='Home-content'>
                    <h1>Home</h1>
                    <ul>
                        <EngageLog />
                        <AddFriend />
                        
                        <EngageFuture />
                    </ul>
                </div>
            </div>
        )
    } 
}

export default Home;