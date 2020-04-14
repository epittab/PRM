import React from 'react';

import './AddFriend.css'

class AddFriend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            viewTemplate: 1,
            first_name: '',
            last_name: '',
            dob: '',
            relation: "1"
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            dob: this.state.dob,
            relation: this.state.relation,
            friends_since: new Date().toISOString()
        }
        e.preventDefault();
        this.validate(postObject) ? this.postFriend(postObject) : this.postError(postObject) ;

    }

    async postFriend(obj){
        // posting
        console.log(obj)
        const URL = `http://localhost:4000`
        const route = `/api/friends`
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
            first_name: '',
            last_name: '',
            dob: '',
            relation: "1"
        })
        console.log('submit!')
    }

    postError(obj){
        //user prompt
        alert('Error on form submission! Please check input field(s).')

        console.log(obj)
        console.log('error!')

    }

    //rendering

    handleClick(){
        this.setState({
            viewTemplate: 2
        })
        console.log('click')
    }

    renderButton(){
        return (
            <div className='AddFriend-btn' onClick={this.handleClick}>
                <span>Add a Friend</span>
            </div>
        )
    }

    renderForm(){
        return (
            <div className='AddFriend-form-wrapper' >
                <form className='AddFriend-form' onSubmit={this.handleSubmit}>
                
                    <div className='AddFriend-element-wrapper'>
                        <label  className='AddFriend-label' 
                                htmlFor='friend-first-name'>First Name</label>
                        <input className='AddFriend-input' 
                                onChange={this.handleChange}
                                id='friend-name' 
                                name='first_name'
                                type='text' 
                                ></input>
                    </div>
                    
                    <div className='AddFriend-element-wrapper'>
                        <label  className='AddFriend-label' 
                                htmlFor='friend-last-name'>Last Name</label>
                        <input className='AddFriend-input'
                                onChange={this.handleChange} 
                                id='friend-name' 
                                name='last_name' 
                                type='text'
                                ></input>
                    </div>
                    
                    <div className='AddFriend-element-wrapper'>
                        <label  className='AddFriend-label' 
                                htmlFor='friend-name'>Date of Birth</label>
                        <input className='AddFriend-input' 
                                onChange={this.handleChange}
                                id='friend-name' 
                                name='dob' 
                                type='date'
                                ></input>
                    </div>
                    

                    <div className='AddFriend-element-wrapper'>
                        <label  className='AddFriend-label' 
                                htmlFor='friend-name'>Relationship Type</label>
                                <select name='relation' onChange={this.handleChange}>
                                    <option value={1}>Family</option>
                                    <option value={2}>Friend</option>
                                    <option value={3}>Aquaintance</option>
                                </select>
                       
                    </div>
                    <button>Submit</button>
                </form>                
            </div>
        )
    }

    render() {
        return (
            <div className='AddFriend'>
                {this.state.viewTemplate === 1 ? this.renderButton() : this.renderForm()}
            </div>
        )
    } 
}

export default AddFriend;