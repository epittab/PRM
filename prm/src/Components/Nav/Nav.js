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
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleClick(){
        this.state.isOpen ? this.setState({isOpen: false}) : this.setState({isOpen: true})
    }

    handleSelection(e){
        console.log(e.target.value)
        this.props.selector(e.target.value)
    }

    renderText(){
        return(
            <ul>
                <li onClick={this.handleSelection} value={1}>Logs</li>
                <li onClick={this.handleSelection} value={2}>Friends</li>
                <li onClick={this.handleSelection} value={3}>Settings</li>
            </ul>
        )
    }

    renderIcons(){
        //width="387.826" height="517.101"
        // error with click handling - not currently passing value
        return(
            <ul>
                <li className='Nav-menu-icons' onClick={this.handleSelection} value={1} ><img src={logIcon} alt='log icon' /></li>
                <li className='Nav-menu-icons' onClick={this.handleSelection} value={2} ><img src={friendIcon} alt='friends icon' /></li>
                <li className='Nav-menu-icons' onClick={this.handleSelection} value={3} ><img src={settingIcon} alt='Settings icon'  /></li>
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