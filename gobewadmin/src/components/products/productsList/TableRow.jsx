import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { GET_PRODUCTS, PUT_PRODUCT, PUT_PRODUCT_ACTIVE } from '../../../redux/actions'
import {RiPencilFill} from 'react-icons/ri'
import {MdDoNotDisturbOn} from 'react-icons/md'
import {ImCheckboxChecked} from 'react-icons/im'


export default function TableRow({productName, productPrice, productStock,productIsActive, _id}) {
    
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const [productChange, setProductChange] = useState({
        productId : _id,
        productName,
        productPrice,
        productIsActive,
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

    const handleProductActive = (e)=>{
        dispatch(PUT_PRODUCT_ACTIVE({productId: productChange.productId, productIsActive: !productChange.productIsActive}))
        setProductChange({...productChange, productIsActive: !productChange.productIsActive})
        dispatch(GET_PRODUCTS())
    }
    
    useEffect(()=>{
        setProductChange({productName, productPrice, productStock,productIsActive, productId: _id})
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
            <td className='field--active'><input type="checkbox" checked={productChange.productIsActive} name="productIsActive" disabled style={{width:"24px", height:"24px"}}/></td>
            <td className='field--actions'>
                <button className='table--products__btn-edit' onClick={()=> setEdit(!edit)}><RiPencilFill/></button>
                <button className='table--products__btn-active' onClick={handleProductActive}>{productChange.productIsActive ? <MdDoNotDisturbOn/> : <ImCheckboxChecked/>}</button>
                <Link to={`/product/edit/${productChange.productId}`}>
                    <button className='table--products__btn-edit--all'>Editar todo el producto</button>
                </Link>
                {ready && <button onClick={handleSubmit}>OK</button>}
            </td>
        </tr>
    )
}
