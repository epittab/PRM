import React from 'react'

import './Settings.css'

class Settings extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            isLoaded: false
        }
    }

    async getUser(){
        const URL = `http://localhost:4000`
        const apiEndPoint = `/api/user`
        
        try{
            const res = await fetch(`${URL}${apiEndPoint}`, {
                method: 'GET'
            })
            if (res.ok) {
                const data = await res.json()
                return data
            }
            throw new Error('Error message')
        }
        catch(error){
            console.log(`Error loading data: ${error}`)
        }
    }

    componentDidMount(){
        this.getUser().then(
            (data) => {
                this.setState({
                    isLoaded: true,
                    data: data
                })
            }
        )
        console.log(this.state.data)
        console.log('ready to load async data')
       
    }

    renderData(){
        return(
            <div className='Settings-user-wrapper'>
                <h3 className='user-name'>Name: {`${this.state.data[0].first_name} ${this.state.data[0].last_name}`}</h3>
                <p className='user-city'>City: {this.state.data[0].city}</p>
            </div>
        )
    }

    render(){
        return(
            <div className='Settings'>
                {this.state.isLoaded ? this.renderData() : 'Loading...'}
            </div>
        )
    }
}

export default Settings;