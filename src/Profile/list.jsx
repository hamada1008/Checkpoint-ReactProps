import React from 'react'

const List = (props) => {
    return (
        props.b.map( x =>  <li>{x}</li>)
    )
}

export default List
