import React from 'react'

const PersonItem = ({ todo, hendleShow ,handleClick}) => {
    return (
        <div> {(todo.isShow) ?
            <div>
                <p className='header'>FullName:{todo.fullName}</p>
                <p className='header'>Bio:{todo.bio}</p>
                <p className='header'>Profession:{todo.profession}</p>
                <p ><img src={todo.imgSrc} alt=""></img></p>
                

            </div> : null
        }
            <button className='button' onClick={() => hendleShow(todo.id)+handleClick()}>{todo.isShow ? "Hide" : "Show"}</button>
           
        </div>
    )
}

export default PersonItem
