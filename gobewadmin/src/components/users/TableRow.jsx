import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { GET_USERS, PUT_USERS, PUT_USER_ACTIVE } from '../../redux/actions';


export default function TableRow({ userFirstName, userLastName, userEmail, userIsActive, userIsAdmin, userIsGoogle, userIsSuperAdmin, _id }) {
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch();
    const [userChange, setUserChange] = useState({
        userId : _id,
        userFirstName,
        userLastName,
        userEmail,
        userIsActive,
        userIsAdmin,
        userIsGoogle,
        userIsSuperAdmin
    })
    const [ready, setReady] = useState(false)
    

    const handleChange = (e) => {
        setUserChange({
            ...userChange,
            [e.target.name]: e.target.value
        })
        setReady(true)
    }

    const handleCheckEvent = (e) => {
        setUserChange({
            ...userChange,
            [e.target.name]: e.target.checked
        })
        setReady(true)
    }

    const handleSubmit = (e) => {
            dispatch(PUT_USERS(userChange))
            setReady(false)
            setEdit(false)
            alert("Usuario editado correctamente")
    }

    const handleUserActive = (e)=>{
        dispatch(PUT_USER_ACTIVE({userId: userChange.userId, userIsActive: !userChange.userIsActive}))
        setUserChange({...userChange, userIsActive: !userChange.userIsActive})
        dispatch(GET_USERS())
    }

    return (
        <tr>
            {
                <td><input onChange={handleChange} style={{ width: "99%", height: "99%", border: "none", fontSize: "20px", background: "white", color: "black" }} type="text" value={userChange.userFirstName} name="userFirstName" disabled={!edit} /></td>
            }
            {
                <td><input onChange={handleChange} style={{ width: "99%", height: "99%", border: "none", fontSize: "20px", background: "white", color: "black" }} type="text" value={userChange.userLastName} name="userLastName" disabled={!edit} /></td>
            }
            <td>{userChange.userEmail}</td>
            <td><input type="checkbox" checked={userChange.userIsActive} name="userIsActive" disabled style={{width:"24px", height:"24px"}}/></td>
            <td><input type="checkbox" checked={userChange.userIsAdmin} name="userIsAdmin" onClick={handleCheckEvent} disabled={!edit} style={{width:"24px", height:"24px"}}/></td>
            <td><input type="checkbox" checked={userChange.userIsGoogle} name="userIsGoogle" onClick={handleCheckEvent} disabled={!edit} style={{width:"24px", height:"24px"}}/></td>
            <td><input type="checkbox" checked={userChange.userIsSuperAdmin} name="userIsSuperAdmin" onClick={handleCheckEvent} disabled={!edit} style={{width:"24px", height:"24px"}}/></td>
            <td>
                <button onClick={() => setEdit(!edit)}>E</button>
                <button onClick={handleUserActive}>{userChange.userIsActive ? "Desactivar" : "Activar"}</button>
                {ready && <button onClick={handleSubmit}>OK</button>}
            </td>
        </tr>
    )
}
