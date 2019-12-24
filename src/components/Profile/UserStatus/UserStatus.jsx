import React, { useState, useEffect } from 'react';

export const UserStatus = (props) => {

    const activateEditMode = (event) => {
        setEditMode(true);
    }
    
    const deactivatedEditMode = (event) => {
        
        props.updateUserStatus(event.target.value)
        setEditMode(false);
    
    }

    const setStatusValue = (event)=> {
        setStatus(event.target.value)
    }
    
    const [editMode, setEditMode] = useState(false);
    const [statusValue, setStatus] = useState(props.userStatus);

    useEffect( () => {
        setStatus(props.userStatus)
    }, [props.userStatus])

    return (
        <>
            {editMode 
                ? <input autoFocus={true} onBlur={deactivatedEditMode} type='text' value={statusValue} onChange={setStatusValue}/> 
                : <div onDoubleClick={activateEditMode}>{props.userStatus}</div>
            }
        </>
    )

}

export default UserStatus;