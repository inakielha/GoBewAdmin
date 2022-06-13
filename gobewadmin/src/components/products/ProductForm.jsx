import React, { useEffect, useState } from 'react'
import { Form, Formik, Field } from 'formik'
import { TextInput } from '../form/TextInput'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import CheckBox from '../form/CheckBox'
import { CREATE_PRODUCT, GET_CATEGORIES_ADMIN, GET_PRODUCT_BY_ID, PUT_PRODUCT } from '../../redux/actions'
import { useNavigate, useParams } from 'react-router-dom'
import '../../scss/_productsForm.scss'
import { toast } from 'react-toastify'
import CreationImage from './createForm/CreationImage'

export default function ProductForm() {
    const { categories, product } = useSelector((state) => state.adminReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productId } = useParams();
    const initialValues = {
        productId: productId ? productId : '',
        productName: product[0] ? product[0]?.productName : '',
        productIsActive: product[0] ? product[0]?.productIsActive : 0,
        productDescription: product[0] ? product[0]?.productDescription : '',
        productPrice: product[0] ? product[0]?.productPrice : '',
        productStock: product[0] ? product[0]?.productStock : '',
        productHighlight: product[0] ? product[0]?.productHighlight : 0,
        productCategories: product[0] ? product[0]?.productCategories : [],
    }
    // const [checkedChild, setCheckedChild] = useState(false)
    const [disabledImg, setDisabledImg] = useState(true);
    const [categoriesSelected, setCategoriesSelected] = useState(null)

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

    useEffect(() => {
        if (product.ok) {
            toast.success('Producto creado correctamente')
        } else if (!product.ok) {
            for (const key in product.errors) {
                toast.error(product.errors[key].msg)
            }
            if (product.msg) {
                toast.error(product.msg)
            }
        }
    }, [product])


    return (
        <div className='form--newProduct__container'>
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                onSubmit={(values) => {
                    try {
                        if (productId) {
                            dispatch(PUT_PRODUCT(values))
                            // toast.success('Producto actualizado correctamente')
                            // dispatch(GET_PRODUCT_BY_ID(productId))
                            navigate(`/`)
                            setDisabledImg(false)
                        } else {
                            dispatch(CREATE_PRODUCT(values))
                            // toast.success('Producto creado correctamente')
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
                            <div className='form-newProduct__inputs'>
                                <TextInput key={1} label='Nombre' name='productName' type='text' placeholder='Nombre' />
                                <TextInput key={3} label='Precio' name='productPrice' type='number' placeholder='Precio' />
                                <TextInput key={4} label='Stock' name='productStock' type='number' placeholder='Stock' />
                                <div className='form-newProduct__checkboxs'>
                                    <div className='checkbox-container'>
                                        <CheckBox key={5} label='Destacado' type='checkbox' name='productHighlight' />
                                    </div>
                                    <div className='checkbox-container'>
                                        <CheckBox key={6} label='Activo' type='checkbox' name='productIsActive' />
                                    </div>
                                </div>
                                <div className='form-newProduct__textarea'>
                                    <label htmlFor="productDescription" className='textAreaLabel'> Descripción</label>
                                    <Field as="textarea" name="productDescription" key={2} label='Descripción' class="textArea" placeholder='Descripción' />
                                </div>
                            </div>
                            <article className='form-newProduct__continue'>
                                <div className='form-newProduct__categories'>
                                    <select name="category-sup" disabled={formik.values.productCategories.length > 0} onChange={(e) => setCategoriesSelected(e.target.value)}>
                                        <option value="">Selecciona una categoría</option>
                                        {categories.map((category, index) => {
                                            return <option key={index} value={category._id}>{category.categoryName}</option>
                                        })}
                                    </select>
                                    <div className='checkboxs-categories' >
                                        {categoriesSelected && categories?.map(c => {
                                            if (c._id === categoriesSelected) {
                                                return c.childCategories.map((subCategory, index) => {
                                                    return <div className='childCategories'>
                                                            <label htmlFor={subCategory._id}>
                                                            {subCategory.categoryName}
                                                        </label>
                                                        <Field key={subCategory._id} type="checkbox" name="productCategories" id={subCategory._id} value={subCategory._id} />
                                                    </div>
                                                })
                                            }
                                        })}
                                    </div>
                                </div>
                                <div className='form-newProduct__images'>
                                    <CreationImage />
                                </div>
                                <div className='form-newProduct__btn'>
                                    <button type='submit' className='form-newProduct--btn'>{productId ? "Actualizar Producto" : "Agregar Product"} </button>
                                </div>
                            </article>
                            {/* <div className='categorieslabel'>
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
                                                                
                                                            )
                                                        })
                                                    }
                                                </section>
                                            )
                                        })
                                    }
                                */}

                            {/* <textarea key={2} value={initialValues.productDescription ? initialValues.productDescription : ""} name="productDescription" id="" cols="30" rows="10" className='textArea'></textarea> */}
                            {/* <TextInput key={2} label='Descripción' name='productDescription' type='text' placeholder='descripción' style={{ width: "100%", height: "30vh", display: "flex", alignItems: "flex-start", inlineSize: "150px", overflowWrap: "break-word" }} /> */}
                        </Form >
                    )
                }
            </Formik >
        </div >
    )
}

