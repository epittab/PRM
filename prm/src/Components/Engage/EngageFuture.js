import React from 'react';

import AddEngage from './AddEngage';

import './EngageFuture.css'

class EngageFuture extends React.Component{

    render() {
        return (
            <div className='EngageFuture'>
                

                

                Upcoming Activities

                <div className='EngageFuture-sub-menu'>
                    <AddEngage />
                </div>

            </div>
        )
    } 
}

export default EngageFuture;