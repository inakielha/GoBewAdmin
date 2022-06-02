import React, { useState } from 'react'
import styles from '../../styles/tableProducts.module.css'


export default function TableRow({productName, productPrice, productStock}) {
    
    const [edit, setEdit] = useState(false)
    const [productChange, setProductChange] = useState({
        productName,
        productPrice,
        productStock
    })
    const [ready, setReady] = useState(false)

    const handleChange = (e) =>{
        setProductChange({
            ...productChange,
            [e.target.name]: e.target.value
        })
        setReady(true)
    }

    return (
        <tr>
            {
                edit ? <td><input onChange={handleChange}  style={{width:"99%", height:"99%", border:"none", fontSize:"20px"}} type="text" value={productChange.productName} name="productName" /></td> : <td>{productChange.productName}</td>
            }
            {
                edit ? <td><input onChange={handleChange}  style={{width:"99%", height:"99%", border:"none", fontSize:"20px"}} type="text" value={productChange.productStock} name="productStock" /></td> : <td>{productChange.productStock}</td>
            }
            <td className={styles.priceContainer}>{productPrice}</td>
            <button onClick={()=> setEdit(!edit)}>E</button>
            <button>B</button>
            {ready && <button>OK</button>}
        </tr>
    )
}
