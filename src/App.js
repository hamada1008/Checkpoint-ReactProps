import React from "react";
import Profile from "./Profile/Profile";
import infs from './Profile/Inf';

const styyle = {
  display: 'flex',
  flexFlow: 'wrap column',
  border: '7px inset red',
  padding: '10px',
  borderRadius: '15px',
  boxShadow: '5px 5px 10px 0px black',
  height:'fit-content'}


function App() {
  return (
    <div style= {styyle}>
    
    <Profile 
    fullName = {infs.name}
    bio = {infs.bio}
    bioL = {infs.biol}
    prof = {infs.prof}>
    {infs.img}
    
    </Profile>
     
     

    </div>
  );
}

export default App;
