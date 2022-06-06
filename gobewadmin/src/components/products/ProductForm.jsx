import React, { useEffect, useState } from 'react'
import { Form, Formik, Field } from 'formik'
import { TextInput } from '../form/TextInput'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import CheckBox from '../form/CheckBox'
import { CREATE_PRODUCT, GET_CATEGORIES_ADMIN, GET_PRODUCT_BY_ID, PUT_PRODUCT } from '../../redux/actions'
import { Link, useParams } from 'react-router-dom'
import '../../scss/_productsForm.scss'

export default function ProductForm() {
    const { categories, product } = useSelector((state) => state.adminReducer)
    const dispatch = useDispatch();
    const { productId } = useParams();
    const initialValues = {
        productId: productId ? productId : '',
        productName: product[0] ? product[0]?.productName : '',
        productIsActive: product[0] ? product[0]?.productIsActive : 0,
        productDescription: product[0] ? product[0]?.productDescription : '',
        productPrice: product[0] ? product[0]?.productPrice : '',
        productStock: product[0] ? product[0]?.productStock : '',
        productHighlight: product[0] ? product[0]?.productHighlight : 0,
        productCategories: product[0] ? product[0]?.productCategories : []
    }

    const [disabledImg, setDisabledImg] = useState(true);


    const validations = Yup.object().shape({
        productName: Yup.string()
            .required('Requerido.'),
        productPrice: Yup.number()
            .required('Requerido.'),
        productStock: Yup.number()
            .required('Requerido.'),
        productCategories: Yup.array()
            .required('Requerido.')
    });

    useEffect(() => {
        dispatch(GET_CATEGORIES_ADMIN())
        !!productId && dispatch(GET_PRODUCT_BY_ID(productId))
    }, [dispatch, productId])




    return (
        <div className='form--newProduct__container'>
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                onSubmit={(values) => {
                    // console.log(values)
                    // try {
                    //     dispatch(CREATE_PRODUCT(values))
                    //     alert("Producto creado correctamente")
                    //     setDisabledImg(false)
                    // } catch (error) {
                    //     alert("Se ha producido un error al cargar el producto, intente nuevamente")
                    // }
                    try {
                        if (productId) {
                            dispatch(PUT_PRODUCT(values))
                            console.log(values)
                            alert("Producto editado correctamente")
                            setDisabledImg(false)
                        } else {
                            dispatch(CREATE_PRODUCT(values))
                            alert("Producto creado correctamente")
                            setDisabledImg(false)
                        }
                    } catch (error) {
                        alert("Se ha producido un error al cargar el producto, intente nuevamente")
                    }
                }}
                validationSchema={validations}
            >
                {
                    (formik) => (
                        <Form className='form-newProduct'>
                            <div className='form-newProduct--left'>

                                <div className='form__newProduct--textInput'>
                                    <TextInput key={1} label='Nombre' name='productName' type='text' placeholder='nombre' />

                                    <TextInput key={3} label='Precio' name='productPrice' type='number' placeholder='precio' />
                                    <TextInput key={4} label='Stock' name='productStock' type='number' placeholder='stock' />
                                    <div className='form--checkbox__productHighligth'>
                                        <CheckBox key={5} label='Destacado' type='checkbox' name='productHighlight' />
                                        <CheckBox key={6} label='Activo' type='checkbox' name='productIsActive' />
                                    </div>
                                    <button type='submit' className='form-newProduct--btn'>{productId ? "Actualizar Producto" : "Agregar Product"} </button>
                                    <Link to={'/product/image'} className="form-newProduct--btn-link"><button className='form-newProduct--btn' disabled={disabledImg}>Agregar imagen</button></Link>
                                </div>
                            </div>
                            <div className='form-newProduct--right'>
                                <div className='categorieslabel'>
                                    <label>Categorias:</label>

                                </div>
                                <div className='categoriesCol'>

                                    {
                                        categories?.map((c) => {
                                            return (
                                                <section className='form--products-categories__container'>


                                                    <p>{c.categoryName}</p>
                                                    {
                                                        c.childCategories?.map((child) => {
                                                            return (
                                                                <label>
                                                                    <Field key={child._id} type="checkbox" name="productCategories" value={child._id} /> {child.categoryName}
                                                                </label>
                                                            )
                                                        })
                                                    }
                                                </section>
                                            )
                                        })
                                    }
                                </div>
                                <label htmlFor="productDescription" className='textAreaLabel'> Descripción</label>
                                <Field as="textarea" name="productDescription" key={2} label='Descripción' class="textArea" placeholder='descripción' />

                                {/* <textarea key={2} value={initialValues.productDescription ? initialValues.productDescription : ""} name="productDescription" id="" cols="30" rows="10" className='textArea'></textarea> */}
                                {/* <TextInput key={2} label='Descripción' name='productDescription' type='text' placeholder='descripción' style={{ width: "100%", height: "30vh", display: "flex", alignItems: "flex-start", inlineSize: "150px", overflowWrap: "break-word" }} /> */}


                            </div>
                            <div>
                            </div>
                        </Form >
                    )
                }
            </Formik >
        </div >
    )
}

