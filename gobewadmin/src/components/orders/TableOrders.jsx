import { RiPencilFill } from 'react-icons/ri'
import { MdDoNotDisturbOn } from 'react-icons/md'
import { ImCheckboxChecked } from 'react-icons/im'
import { useState } from 'react'
import { useEffect } from 'react'

export default function TableOrders({ orderId, userFirstName, userLastName, date, setOrdId, statusOrder }) {

    const [edit, setEdit] = useState(false)
    const [readySent, setReadySent] = useState(false)
    const [readyRecieve, setReadyRecieve] = useState(false)
    const [readyCancel, setReadyCancel] = useState(false)

    function handleClickDetail(event) {
        setOrdId(event.target.value)
    }
    function handleClickStatus(event) {
        
    }

    useEffect(() => {
        const handleDisabled = () => {
            switch (statusOrder) {
                case 0:
                    break
                case 1:
                    break
                case 2:
                    setReadySent(true)
                    //setReadyRecieve(true)
                    setReadyCancel(true)
                    break
                case 3:
                    setReadyRecieve(true)
                    break
                case 5: 
                    break
                case 7:
                    break
    
                default:
                    break
            }
        }
        handleDisabled()
    }, [statusOrder])
    return (
        <tr>
            <td className='field--date'>{date?.slice(0, 10)}</td>
            <td className='field--idOrder'>{orderId}</td>
            <td className='field--userFirstName'>{userFirstName}</td>
            <td className='field--userLastName'>{userLastName}</td>
            <td className='field--order__send'><input type="checkbox" value={statusOrder} onClick={handleClickStatus} name="sendOrder" disabled={!readySent} /></td>
            <td className='field--order__recieve'><input type="checkbox" value={statusOrder} onClick={handleClickStatus} name='recieveOrder' disabled={!readyRecieve} /></td>
            <td className='field--order__cancel'><input type="checkbox" value={'cancelad'} onClick={handleClickStatus} name='cancelOrder' disabled={!readyCancel} /></td>
            <td className='field--buttonDetail'><button onClick={handleClickDetail} value={orderId} >Detail</button></td>
        </tr>
    )
}