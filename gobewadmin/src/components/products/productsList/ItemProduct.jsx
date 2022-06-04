import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { GET_PRODUCTS, ORDER_PRODUCT } from '../../../redux/actions';
import styles from '../../styles/tableProducts.module.css'
import SearchBar from './SearchBar';
import TableRow from './TableRow';

export default function ItemProduct() {

    const { products } = useSelector((store) => store.adminReducer);
    const dispatch = useDispatch();

    const [valueButtonPrice, setValueButtonPrice] = useState('ASC')
    const [valueButtonName, setValueButtonName] = useState('ASC')
    const [valueButtonStock, setValueButtonStock] = useState('ASC')


    useEffect(() => {
        dispatch(GET_PRODUCTS())
    }, [dispatch])

    const handleAlphaOrder = (e) =>{
        let prod = [...products]
        if(valueButtonName === 'ASC'){
            let productsSorted = prod.sort((a,b)=>{
                if(a.productName < b.productName) return -1
                if(a.productName > b.productName) return 1
                return 0
            })
            dispatch(ORDER_PRODUCT(productsSorted))
            setValueButtonName('DESC')
        }
        if(valueButtonName === 'DESC'){
            let productsSorted = prod.sort((a,b)=>{
                if(a.productName < b.productName) return 1
                if(a.productName > b.productName) return -1
                return 0
            })
            dispatch(ORDER_PRODUCT(productsSorted))
            setValueButtonName('ASC')
        }
    }

    const handlePriceOrder = (e) =>{
        let prod = [...products]
        if(valueButtonPrice === 'ASC'){
            let productsSorted = prod.sort((a,b)=>{
                if(a.productPrice < b.productPrice) return -1
                if(a.productPrice > b.productPrice) return 1
                return 0
            })
            dispatch(ORDER_PRODUCT(productsSorted))
            setValueButtonPrice('DESC')
        }
        if(valueButtonPrice === 'DESC'){
            let productsSorted = prod.sort((a,b)=>{
                if(a.productPrice < b.productPrice) return 1
                if(a.productPrice > b.productPrice) return -1
                return 0
            })
            dispatch(ORDER_PRODUCT(productsSorted))
            setValueButtonPrice('ASC')
        }
    }

    const handleStockOrder = (e) =>{
        let prod = [...products]
        if(valueButtonStock === 'ASC'){
            let productsSorted = prod.sort((a,b)=>{
                if(a.productStock < b.productStock) return -1
                if(a.productStock > b.productStock) return 1
                return 0
            })
            dispatch(ORDER_PRODUCT(productsSorted))
            setValueButtonStock('DESC')
        }
        if(valueButtonStock === 'DESC'){
            let productsSorted = prod.sort((a,b)=>{
                if(a.productStock < b.productStock) return 1
                if(a.productStock > b.productStock) return -1
                return 0
            })
            dispatch(ORDER_PRODUCT(productsSorted))
            setValueButtonStock('ASC')
        }
    }

    return (
        <section>
            <div>
                <SearchBar/>
                <button onClick={handleAlphaOrder} value={valueButtonName}>
                    {valueButtonName === 'ASC' ? 'Nombre 🡅' : 'Nombre 🡇'}
                </button>
                <button onClick={handlePriceOrder} value={valueButtonPrice}>
                    {valueButtonPrice === 'ASC' ? 'Price 🡇' : 'Price 🡅'}
                </button>
                <button onClick={handleStockOrder} value={valueButtonStock}>
                    {valueButtonStock === 'ASC' ? 'Stock 🡇' : 'Stock 🡅'}
                </button>
                <Link to='/product/new'>
                    <button>Agregar nuevo producto</button>
                </Link>
            </div>
            <table className={styles.tableContainer}>
                <thead className={styles.headTable}>
                    <tr>
                        <th>Nombre del producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody className={styles.bodyTable}>
                    {
                        products?.map(p => {
                            return (
                                <TableRow productName={p.productName} productStock={p.productStock} productPrice={p.productPrice} _id={p._id} key={p._id}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
