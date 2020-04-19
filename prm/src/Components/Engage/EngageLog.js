import React from 'react';

import Engagement from './Engagement'

class EngageLog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            upcoming: []
        }

    }

    getUpcoming(){
        
    }

    componentDidMount(){
        //async call and set state
        console.log('mounted')
    }

    render() {
        return (
            <div className='EngageLog'>
                <ul>
                    {this.state.upcoming.length === 0 ? 
                    'No upcoming events' : 
                    this.state.upcoming.map( elem => < Engagement data={elem} /> )}
                    
                </ul>               
            </div>
        )
    } 
}

export default EngageLog;