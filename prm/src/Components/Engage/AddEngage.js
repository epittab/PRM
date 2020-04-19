import React from 'react';

import './AddEngage.css'

class AddEngage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            friends_array: [],
            engage_type_array: [],
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

    // Posting

    validate(obj){
        //add validation logic later
        return true
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        
        console.log('change');
    }

    handleSubmit(e){
        const postObject = {
            friend_id: '',
            engage_type_id: '',
            scheduled_on: ''
        }
        e.preventDefault();
        this.validate(postObject) ? this.postFriend(postObject) : this.postError(postObject) ;

    }

    async postFriend(obj){
        // posting
        console.log(obj)
        const URL = `http://localhost:4000`
        const route = `/api/engage`
        try{
            const postData = await fetch(`${URL}${route}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify(obj)
                }
            )
            console.log(postData)
            if (postData.ok) {
                const jsonResponse = await postData.json();
                console.log(jsonResponse);
                return jsonResponse;
            }
            throw new Error('Error posting!');
        }
        catch(error){
            console.log(`There was an error: ${error}`)
        }
        //user prompt
          
        alert('Form submitted!')
        
    
        this.setState({
            ...this.state,
            viewTemplate: 1,
            friend_id: '',
            engage_type_id: '',
            scheduled_on: ''
        })
        console.log('submit!')
    }

    postError(obj){
        //user prompt
        alert('Error on form submission! Please check input field(s).')

        console.log(obj)
        console.log('error!')

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

    async getEngageTypes(){
        const URL = `http://localhost:4000`
        const route = `/api/engagetype`
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
        let temp_data_holder = {}
        this.getFriends().then(
            (data) => {
                temp_data_holder["getFriends"] = data
            }
        )
        this.getEngageTypes()
        .then(
            (data) => {
                temp_data_holder["getEngageTypes"] = data
            }
        ).then(
            this.setState({
                isLoaded: true,
                friends_array: temp_data_holder,
                engage_type_array: temp_data_holder,
            })
        )
        console.log(temp_data_holder)
    }

    handleClick(){
        this.setState({
            viewTemplate: 2
        })
    }

    renderFriendsList(){
        const regexPattern = new RegExp(this.state.friend_search, "i");
        const filteredArray = this.state.friends_array['getFriends'].filter( friend => regexPattern.test(friend.first_name) || regexPattern.test(friend.last_name) )
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
        
        let array_test = this.state.engage_type_array['getEngageTypes']        

        return(
            <div className='AddEngage-form'>
                <form onSubmit={this.handleSubmit}>
                    <div className="AddEngage-form-element">
                        <label className='AddEngage-form-label' htmlFor=''>Friend</label>
                        <input className='' id='' name='friend_search' onChange={this.handleChange}></input>
                        { this.state.friends_array['getFriends'].length > 0 && this.state.friend_search !== '' ?
                         this.renderFriendsList() :
                         '' }
                    </div>
                    <div className="AddEngage-form-element">
                        <label className='AddEngage-form-label' htmlFor=''>Schedule Date</label>
                        <input className='' id='' type='date' name='' onChange={this.handleChange}></input>
                    </div>
                    <div className="AddEngage-form-element">
                        <label className='AddEngage-form-label' htmlFor=''>Engage Type</label>
                        <select>
                             <option> - Select One - </option> 
                             {array_test.map(data => <option key={data.engage_type_id}>{data.engage_name}</option>)}
                        </select>
                        
                    </div>
                    <button>Submit</button>
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