import React from 'react'

export default function EditForm(props) {
  return (
    <div className='edit-container'>
    
        <div>
        <input 
        type="text" 
        className='edit-input' 
        placeholder='Edit'
        onChange={props.handleInput}/>
        <button 
        className='edit-button'
        onClick={props.handleEditButton}>EDIT</button>
        </div>
    </div>
  )
}
