import React, { useEffect, useState } from 'react'
import { Form, Formik, Field } from 'formik'
import { TextInput } from '../form/TextInput'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import CheckBox from '../form/CheckBox'
import { CREATE_PRODUCT, GET_CATEGORIES_ADMIN } from '../../redux/actions'
import { Link } from 'react-router-dom'

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
        <div>
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
                        <Form>
                            <TextInput label='Nombre' name='productName' type='text' placeholder='nombre' />
                            <TextInput label='Descripción' name='productDescription' type='text' placeholder='descripción' />
                            <TextInput label='Precio' name='productPrice' type='number' placeholder='precio' />
                            <TextInput label='Stock' name='productStock' type='number' placeholder='stock' />
                            <CheckBox label='Destacado' type='checkbox' name='productHighlight' />
                            <label>Categorias</label>
                            {
                                categories?.map((c) => {
                                    return (
                                        <>
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
                                        </>
                                    )
                                })
                            }
                            <button type='submit'>Añadir producto</button>
                            <div>
                                <Link to={'/product/image'}><button disabled={disabledImg}>Agregar imagen</button></Link>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

