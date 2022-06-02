import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCTS, ORDER_PRODUCT } from '../../../redux/actions';
import styles from '../../styles/tableProducts.module.css'
import SearchBar from './SearchBar';
import TableRow from './TableRow';

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

    const handlePriceOrder = (e) =>{
        let prod = [...products]
        if(e.target.value === 'ASC'){
            let productsSorted = prod.sort((a,b)=>{
                if(a.productPrice < b.productPrice) return -1
                if(a.productPrice > b.productPrice) return 1
                return 0
            })
            dispatch(ORDER_PRODUCT(productsSorted))
        }
        if(e.target.value === 'DESC'){
            let productsSorted = prod.sort((a,b)=>{
                if(a.productPrice < b.productPrice) return 1
                if(a.productPrice > b.productPrice) return -1
                return 0
            })
            dispatch(ORDER_PRODUCT(productsSorted))
        }
    }

    const handleStockOrder = (e) =>{
        let prod = [...products]
        if(e.target.value === 'ASC'){
            let productsSorted = prod.sort((a,b)=>{
                if(a.productStock < b.productStock) return -1
                if(a.productStock > b.productStock) return 1
                return 0
            })
            dispatch(ORDER_PRODUCT(productsSorted))
        }
        if(e.target.value === 'DESC'){
            let productsSorted = prod.sort((a,b)=>{
                if(a.productStock < b.productStock) return 1
                if(a.productStock > b.productStock) return -1
                return 0
            })
            dispatch(ORDER_PRODUCT(productsSorted))
        }
    }

    return (
        <section>
            <div>
                <SearchBar/>
                <button onClick={handleAlphaOrder} value="ASC">NOMBRE ↑</button>
                <button onClick={handleAlphaOrder} value="DESC">NOMBRE ↓</button>
                <button onClick={handlePriceOrder} value="DESC">PRECIO ↑</button>
                <button onClick={handlePriceOrder} value="ASC">PRECIO ↓</button>
                <button onClick={handleStockOrder} value="DESC">STOCK ↑</button>
                <button onClick={handleStockOrder} value="ASC">STOCK ↓</button>
            </div>
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
                                <TableRow productName={p.productName} productStock={p.productStock} productPrice={p.productPrice}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
