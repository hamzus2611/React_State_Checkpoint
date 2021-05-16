import React from 'react'
import PersonItem from '../personitem/PersonItem'

const PersonList=({Person, hendleShow,handleClick}) =>{
    return (
        <div>
            {Person.map((el)=>
            <PersonItem 
            todo={el}
            hendleShow={hendleShow}
            handleClick={handleClick}/>)}
        </div>
    )
}

export default PersonList
