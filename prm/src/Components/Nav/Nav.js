import React from 'react';

import './Nav.css'

import logIcon from '../../Assets/Icons/Icon-list.svg';
import friendIcon from '../../Assets/Icons/Icon-friends.svg';
import settingIcon from '../../Assets/Icons/Icon-settings.svg';

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.state.isOpen ? this.setState({isOpen: false}) : this.setState({isOpen: true})
    }

    renderText(){
        return(
            <ul>
                <li>Logs</li>
                <li>Friends</li>
                <li>Settings</li>
            </ul>
        )
    }

    renderIcons(){
        //width="387.826" height="517.101"
        return(
            <ul>
                <li className='Nav-menu-icons' ><img src={logIcon} alt='log icon'/></li>
                <li className='Nav-menu-icons' ><img src={friendIcon} alt='friends icon'/></li>
                <li className='Nav-menu-icons' ><img src={settingIcon} alt='Settings icon'/></li>
            </ul>
        )
    }

    render() {
        return (
            <div className='Nav' style={{width: this.state.isOpen ? '20%' : '10%'}} >
                <div id='burger-menu' onClick={this.handleClick} >
                    <div className='burger-menu-line' id='one'></div>
                    <div className='burger-menu-line' id='two'></div>
                    <div className='burger-menu-line' id='three'></div>
                </div>
                <nav>
                        { this.state.isOpen ? this.renderText() : this.renderIcons() }
                </nav>
           
            </div>
        )
    } 
}

export default Nav;