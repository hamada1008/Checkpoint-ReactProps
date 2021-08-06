import React from 'react'

const List = (props) => {
      
    return (
        props.b.map( x =>  <li key={props.b.indexOf(x)}>{x}</li>)
    )
}

export default List
