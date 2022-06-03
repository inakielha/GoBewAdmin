import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { PUT_PRODUCT } from '../../../redux/actions'
import styles from '../../styles/tableProducts.module.css'



export default function TableRow({productName, productPrice, productStock, _id}) {
    
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const [productChange, setProductChange] = useState({
        productId : _id,
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


    const handleSubmit = (e)=>{
        try {
            dispatch(PUT_PRODUCT(productChange))
            setReady(false)
            setEdit(false)
            alert("Producto editado correctamente")
        } catch (error) {
            alert("El producto no se pudo editar, intentar nuevamente")
        }
    }
    
    useEffect(()=>{
        setProductChange({productName, productPrice, productStock, productId: _id})
    }, [productName, productPrice, productStock, _id])
    
    
    return (
        <tr>
            {
                <td><input onChange={handleChange}  style={{width:"99%", height:"99%", border:"none", fontSize:"20px"}} type="text" value={productChange.productName} name="productName" disabled={!edit}/></td> 
            }
            {
                <td><input onChange={handleChange}  style={{width:"99%", height:"99%", border:"none", fontSize:"20px"}} type="text" value={productChange.productStock} name="productStock" disabled={!edit}/></td> 
            }
            {
                <td><input onChange={handleChange}  style={{width:"99%", height:"99%", border:"none", fontSize:"20px"}} type="text" value={productChange.productPrice} name="productPrice" disabled={!edit}/></td> 
            }
            <td>
                <button onClick={()=> setEdit(!edit)}>E</button>
                <button>B</button>
                <button>Editar todo el producto</button>
                {ready && <button onClick={handleSubmit}>OK</button>}
            </td>
        </tr>
    )
}
