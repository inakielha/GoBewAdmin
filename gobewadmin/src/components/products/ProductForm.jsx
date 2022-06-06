import React, { useEffect, useState } from 'react'
import { Form, Formik, Field } from 'formik'
import { TextInput } from '../form/TextInput'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import CheckBox from '../form/CheckBox'
import { CREATE_PRODUCT, GET_CATEGORIES_ADMIN } from '../../redux/actions'
import { Link } from 'react-router-dom'
import '../../scss/_productsForm.scss'

export default function ProductForm() {
    const { categories } = useSelector((state) => state.adminReducer)
    const dispatch = useDispatch();
    const initialValues = {
        productName: '',
        productIsActive: 0,
        productDescription: '',
        productPrice: '',
        productStock: '',
        productHighlight: 0,
        productCategories: []
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
    }, [dispatch])





    return (
        <div className='form--newProduct__container'>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    // console.log(values)
                    try {
                        dispatch(CREATE_PRODUCT(values))
                        alert("Producto creado correctamente")
                        setDisabledImg(false)
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
                                    <TextInput label='Nombre:' name='productName' type='text' placeholder='Nombre' />


                                    <TextInput label='Precio:' name='productPrice' type='number' placeholder='Precio' />
                                    <TextInput label='Stock:' name='productStock' type='number' placeholder='Stock' />
                                    <div className='form--checkbox__productHighligth'>
                                        <CheckBox label='Destacado' type='checkbox' name='productHighlight' />
                                    </div>

                                    <button type='submit' className='form-newProduct--btn'>Añadir producto</button>
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
                                                                    <Field key={child._id} type="checkbox" name="productCategories" value={child._id} />
                                                                    {child.categoryName}
                                                                </label>
                                                            )
                                                        })
                                                    }
                                                </section>
                                            )
                                        })
                                    }
                                </div>
                                <textarea name="productDescription" id="" cols="30" rows="10" className='textArea'></textarea>
                            </div>
                            <div>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

