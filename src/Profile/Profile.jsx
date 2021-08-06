
import React from 'react'
import PropTypes from "prop-types";
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
        <img style={{borderRadius:'15px', boxShadow:' 5px 5px 0px 0px rgba(96,16,16,0.75)' , height:'320px', width: 'auto'}} src={props.children} alt="myim" /> 
        </div>
        <button className='btn' onClick={ () => props.alert(props.fullName)}> Don't click me </button>



        </div>
    )
}

// Proptypes

Profile.propTypes = {
    fullName : PropTypes.string.isRequired,
    bio : PropTypes.string.isRequired,
    bioL : PropTypes.array.isRequired,
    prof : PropTypes.string.isRequired,
    alert : PropTypes.func.isRequired,
    key : PropTypes.number,
    img : PropTypes.string.isRequired
}


Profile.defaultProps = {
    fullName :"Not Chuck Norris",
    bio : "Who's bio is this",
    bioL : ['Nothing here'],
    prof : "What is a profession",
    key : 1
}



export default Profile
