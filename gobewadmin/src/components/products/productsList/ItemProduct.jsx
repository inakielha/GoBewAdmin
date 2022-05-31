import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCTS, ORDER_PRODUCT } from '../../../redux/actions';
import styles from '../../styles/tableProducts.module.css'


export default function ItemProduct() {

    const { products } = useSelector((store) => store.adminReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GET_PRODUCTS())
    }, [dispatch])

    const handleAlphaOrder = (e) =>{
        let prod = [...products]
        if(e.target.value === 'ASC'){
            let productsSorted = prod.sort((a,b)=>{
                if(a.productName < b.productName) return -1
                if(a.productName > b.productName) return 1
                return 0
            })
            dispatch(ORDER_PRODUCT(productsSorted))
        }
        if(e.target.value === 'DESC'){
            let productsSorted = prod.sort((a,b)=>{
                if(a.productName < b.productName) return 1
                if(a.productName > b.productName) return -1
                return 0
            })
            dispatch(ORDER_PRODUCT(productsSorted))
        }
    }

    return (
        <>
            <section>
                <button onClick={handleAlphaOrder} value="ASC">NOMBRE ↑</button>
                <button onClick={handleAlphaOrder} value="DESC">NOMBRE ↓</button>
            </section>
            <table className={styles.tableContainer}>
                <thead className={styles.headTable}>
                    <th>Nombre del producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </thead>
                <tbody className={styles.bodyTable}>
                    {
                        products?.map(p => {
                            return (
                                <tr>
                                    <td>{p.productName}</td>
                                    <td className={styles.stockContainer}>{p.productStock}</td>
                                    <td className={styles.priceContainer}>{p.productPrice}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
