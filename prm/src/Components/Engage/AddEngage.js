import React from 'react';

import './AddEngage.css'

class AddEngage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            friends_array: [],
            friend_search: '',
            scheduled_on: '',
            friend_id: '',
            engage_type_id: '',
            viewTemplate: 1
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
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
                    friends_array: data
                })
            }
            
        )
    }

    handleClick(){
        this.setState({
            viewTemplate: 2
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('submitted')
    }

    renderFriendsList(){
        const regexPattern = new RegExp(this.state.friend_search, "i");
        const filteredArray = this.state.friends_array.filter( friend => regexPattern.test(friend.first_name) || regexPattern.test(friend.last_name) )
        console.log(filteredArray)
        return(
            <div className='AddEngage-friends-list'>
                { filteredArray.map((filt) => <p>{filt.first_name} {filt.last_name}</p>)}
            </div>
        )
    }

    renderButton(){
        return(
            <div className='AddEngage-btn' onClick={this.handleClick}>
                <span>Add</span>
            </div>
        )
    }

    renderForm(){
        return(
            <div className='AddEngage-form'>
                <form onSubmit={this.handleSubmit}>
                    <div className="AddEngage-form-element">
                        <label className='AddEngage-form-label' htmlFor=''>Friend</label>
                        <input className='' id='' name='friend_search' onChange={this.handleChange}></input>
                        { this.state.friends_array.length > 0 && this.state.friend_search !== '' ?
                         this.renderFriendsList() :
                         '' }
                    </div>
                    <div className="AddEngage-form-element">
                        <label className='AddEngage-form-label' htmlFor=''>Schedule Date</label>
                        <input className='' id='' type='date' name='' onChange={this.handleChange}></input>
                    </div>
                    <div className="AddEngage-form-element">
                        <label className='AddEngage-form-label' htmlFor=''>Engage Type</label>
                        <input className='' id='' name='' onChange={this.handleChange}></input>
                    </div>

                </form> 
            </div>
        )
    }

    render(){
        return (
            <div className='AddEngage'>
                { this.state.viewTemplate === 1 ? this.renderButton() : this.renderForm() }
            </div>
        )
    }
}

export default AddEngage;