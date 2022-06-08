import { MdDoNotDisturbOn } from 'react-icons/md'
import { ImCheckboxChecked } from 'react-icons/im'
import { RiPencilFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import DetailOrder from './DetailOrder'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { GET_ORDER_BY_ID } from '../../redux/actions'

export default function TableOrders({ idOrden, userFirstName, userLastName, date, setOrdId }) {

    let dispatch = useDispatch()

    function handleClick(event) {
        console.log(event.target.value)
        setOrdId(event.target.value)
    }

    return (
        <tr>
            <td className='field--idOrder'>{idOrden}</td>
            <td className='field--userFirstName'>{userFirstName}</td>
            <td className='field--userLastName'>{userLastName}</td>
            <td className='field--date'>{date?.slice(0, 10)}</td>
            <td className='field--active'><input type="checkbox" checked={''} name="orderStatus" disabled /></td>
            <td className='field--buttonDetail'><button onClick={handleClick} value={idOrden} >Detail</button></td>
            <td className='field--actions'>
                {/* <button onClick={() => setEdit(!edit)}><RiPencilFill /></button>
                    <button onClick={handleUserActive}>{userChange.userIsActive ? <MdDoNotDisturbOn /> : <ImCheckboxChecked />}</button>
                    {ready && <button onClick={handleSubmit}>OK</button>} */}
            </td>
        </tr>
    )
}