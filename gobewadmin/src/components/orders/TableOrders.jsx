

export default function TableOrders({ orderId, userFirstName, userLastName, date, setOrdId }) {

    function handleClick(event) {
        setOrdId(event.target.value)
    }

    return (
        <tr>
            <td className='field--idOrder'>{orderId}</td>
            <td className='field--userFirstName'>{userFirstName}</td>
            <td className='field--userLastName'>{userLastName}</td>
            <td className='field--date'>{date?.slice(0, 10)}</td>
            <td className='field--active'><input type="checkbox" checked={''} name="orderStatus" disabled /></td>
            <td className='field--buttonDetail'><button onClick={handleClick} value={orderId} >Detail</button></td>
            <td className='field--actions'>
                {/* <button onClick={() => setEdit(!edit)}><RiPencilFill /></button>
                    <button onClick={handleUserActive}>{userChange.userIsActive ? <MdDoNotDisturbOn /> : <ImCheckboxChecked />}</button>
                    {ready && <button onClick={handleSubmit}>OK</button>} */}
            </td>
        </tr>
    )
}