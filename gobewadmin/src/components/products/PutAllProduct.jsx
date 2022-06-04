// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { GET_CATEGORIES_ADMIN, GET_PRODUCT_BY_ID } from '../../redux/actions';
// import { Formik, Field, Form } from 'formik'
// import { TextInput } from '../form/TextInput'
// import * as Yup from 'yup'
// import { Link, useParams } from 'react-router-dom'
// import CheckBox from '../form/CheckBox'

// export default function PutAllProduct() {

//     const { product, categories } = useSelector((store) => store.adminReducer)
//     const dispatch = useDispatch();
//     const { productId } = useParams();

//     useEffect(() => {
//         dispatch(GET_PRODUCT_BY_ID(productId))
//         dispatch(GET_CATEGORIES_ADMIN())
//     }, [dispatch, productId])

//     const [products, setProducts] = useState({
//         productName: '',
//         productIsActive: 0,
//         productDescription: '',
//         productPrice: '',
//         productStock: '',
//         productHighlight: 0,
//         productCategories: []
//     })

//     const initialValues = {
//         productName: product[0]?.productName,
//         productIsActive: product[0]?.productIsActive,
//         productDescription: product[0]?.productDescription,
//         productPrice: product[0]?.productPrice,
//         productStock: product[0]?.productStock,
//         productHighlight: product[0]?.productHighlight,
//         productCategories: product[0]?.productCategories
//     }

//     const validations = Yup.object().shape({
//         productName: Yup.string()
//             .required('Requerido.'),
//         productPrice: Yup.number()
//             .required('Requerido.'),
//         productStock: Yup.number()
//             .required('Requerido.'),
//         productCategories: Yup.array()
//             .required('Requerido.')
//     });

//     const [disabledImg, setDisabledImg] = useState(true);

//     const handleChange = (e) => {
//         setProducts({
//             ...products,
//             [e.target.name]: e.target.value
//         })
//     }

//     console.log(initialValues)


//     return (
//         <div>
//             <Formik
//                 initialValues={initialValues}
//                 onSubmit={(values) => {
//                     console.log(values)
//                 }}
//                 validationSchema={validations}
//                 enableReinitialize={true}
//             >
//                 {
//                     ({initialValues, handleChange}) => (
//                         <Form>
//                             <TextInput label='Nombre' name='productName' type='text' placeholder='nombre' value={initialValues.productName}/>
//                             <TextInput label='Descripción' name='productDescription' type='text' placeholder='descripción' />
//                             <TextInput label='Precio' name='productPrice' type='number' placeholder='precio' />
//                             <TextInput label='Stock' name='productStock' type='number' placeholder='stock' />
//                             <CheckBox label='Destacado' type='checkbox' name='productHighlight' />
//                             <label>Categorias</label>
//                             {
//                                 categories?.map((c) => {
//                                     return (
//                                         <>
//                                             <p>{c.categoryName}</p>
//                                             {
//                                                 c.childCategories?.map((child) => {
//                                                     return (
//                                                         <label>
//                                                             <Field key={child._id} type="checkbox" name="productCategories" value={child._id} /> {child.categoryName}
//                                                         </label>
//                                                     )
//                                                 })
//                                             }
//                                         </>
//                                     )
//                                 })
//                             }
//                             <button type='submit'>Añadir producto</button>
//                             <div>
//                                 <Link to={'/product/image'}><button disabled={disabledImg}>Agregar imagen</button></Link>
//                             </div>
//                         </Form>
//                         <form onSubmit={initialValues.handleSubmit}>
//                             <input
//                                 type="text"
//                                 onChange={handleChange}
//                                 // onBlur={formik.handleBlur}
//                                 value={initialValues.productName}
//                                 name="name"
//                             />
//                             {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
//                             <button type="submit">Submit</button>
//                         </form>

//                     )
//                 }
//             </Formik>
//         </div>
//     )
// }
