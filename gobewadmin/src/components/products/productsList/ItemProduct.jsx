import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCTS } from '../../../redux/actions';
import styles from '../../styles/tableProducts.module.css'


export default function ItemProduct() {

    const { products } = useSelector((store) => store.adminReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GET_PRODUCTS())
    }, [dispatch])

    return (
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
    )
}
