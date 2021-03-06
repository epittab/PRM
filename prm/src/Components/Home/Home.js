import React from 'react';

import Nav from '../Nav/Nav'
//view 1
import EngageLog from '../Engage/EngageLog'
import EngageFuture from '../Engage/EngageFuture'
import AddFriend from '../Friends/AddFriend'
//view 2
import Friends from '../Friends/Friends'
//view 3
import Settings from '../Settings/Settings'

import './Home.css'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            viewTemplate: 1
        }
    }

    viewSelector = (selection) => {
        this.setState({
            viewTemplate: selection
        })
    } 

    renderViewTemplateOne(){
        return(
            <div className='Home-view'>
                < EngageLog />
                < AddFriend />
                < EngageFuture />
            </div>
        )
    }

    renderViewTemplateTwo(){
        return(
            <div className='Home-view'>
                < Friends />
            </div>
        )
    }

    renderViewTemplateThree(){
        return(
            <div className='Home-view'>
                < Settings />
            </div>
        )
    }

    render() {
        return (
            <div className='Home'>
                <Nav selector={this.viewSelector} />
                <div className='Home-content'>
                    <h1>Home</h1>
                    {this.state.viewTemplate === 1 ? 
                    this.renderViewTemplateOne() : 
                        this.state.viewTemplate === 2 ?
                        this.renderViewTemplateTwo() : 
                        this.renderViewTemplateThree()}
                </div>
            </div>
        )
    } 
}

export default Home;