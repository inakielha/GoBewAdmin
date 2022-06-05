import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { PUT_PRODUCT } from '../../../redux/actions'
import {RiPencilFill} from 'react-icons/ri'


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
                <td><input onChange={handleChange}  type="text" value={productChange.productName} name="productName" disabled={!edit}/></td> 
            }
            {
                <td className='field--stock'><input onChange={handleChange}   type="text" value={productChange.productStock} name="productStock" disabled={!edit}/></td> 
            }
            {
                <td className='field--price'><input onChange={handleChange}   type="text" value={productChange.productPrice} name="productPrice" disabled={!edit}/></td> 
            }
            <td className='field--actions'>
                <button className='table--products__btn-edit' onClick={()=> setEdit(!edit)}><RiPencilFill/></button>
                <button>B</button>
                <Link to={`/product/edit/${productChange.productId}`}>
                    <button>Editar todo el producto</button>
                </Link>
                {ready && <button onClick={handleSubmit}>OK</button>}
            </td>
        </tr>
    )
}
