
import React from 'react'

import List from './list'


function Profile(props) {

    return (
        <div style={{display:'flex' , alignItems:'center', flexDirection: 'column'}}>

        <h1 style={{fontWeight:'bolder' , color: '#8a0303', fontFamily:'bloody'}}>{props.fullName}</h1>
        <h4> <span style = {{textDecoration:'underline'}}>Profession :</span> {props.prof}</h4>
        <ul><h5 style={{fontWeight:'bold'}}>{props.bio}</h5> 
        
        <List
        b = {props.bioL}
        />

        </ul>
        <div>
        <img style={{borderRadius:'15px', boxShadow:' 5px 10px 0px 0px rgba(96,16,16,0.75)'}} src={props.children} alt="image" /> 
        </div>
        <button className='btn' onClick={function handleName() {return alert(`${props.fullName}`)}}> Don't click me </button>



        </div>
    )
}

export default Profile
