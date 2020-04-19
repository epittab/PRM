import React from 'react';

import AddEngage from './AddEngage';

import './EngageFuture.css'

class EngageFuture extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            upcoming: []
        }
    }

    renderEngagement(){
        return(
            <div className='Engage-upcoming'>
                Upcoming Activities
            </div>
        )
    }

    render() {
        return (
            <div className='EngageFuture'>
                

                
                { this.state.upcoming.length > 0 ? this.renderEngagement() : 'You have no upcoming activities...'}
                

                <div className='EngageFuture-sub-menu'>
                    <AddEngage />
                </div>

            </div>
        )
    } 
}

export default EngageFuture;