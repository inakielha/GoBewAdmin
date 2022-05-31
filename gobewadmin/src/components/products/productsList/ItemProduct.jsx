import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { GET_PRODUCTS } from '../../../redux/actions';

export default function ItemProduct() {
    
    const {products} = useSelector((store) => store.adminReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(GET_PRODUCTS())
    }, [dispatch])
    
    return (
        <>
            {
                products?.map(p => {
                    return (
                        <li>
                            <span>{p.productName}</span>
                            <span>{p.productStock}</span>
                            <span>{p.productPrice}</span>
                        </li>
                        )
                })
            }
        </>
    )
}
