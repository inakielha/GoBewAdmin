import React from 'react'
import { Field, Form, Formik } from 'formik'
import { TextInput } from '../form/TextInput'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { USER_CREATE } from '../../redux/actions'


export const UserForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        userEmail: '',
        userPassword: '',
        userIsActive: 0,
        userIsAdmin: 0,
        userIsGoogle: 0,
        userFirstName: '',
        userLastName: '',
        userIsSuperAdmin: 0
    }




    const validations = Yup.object().shape({
        userEmail: Yup.string()
            .email('El email es inválido.')
            .required('Requerido.'),
        userPassword: Yup.string().min(6, 'Requerida')
    });

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => dispatch(USER_CREATE(values))}
                // onSubmit={(values) => console.log(values)}
                validationSchema={validations}
            >
                {
                    (formik) => (
                        <Form>
                            <TextInput label='Email' name='userEmail' type='email' placeholder='email' />
                            <TextInput label='Password' name='userPassword' type='password' placeholder='password' />
                            <TextInput label='First Name' name='userFirstName' type='text' placeholder='first name' />
                            <TextInput label='Last Name' name='userLastName' type='text' placeholder='last name' />
                            <Field name='userIsActive' type='checkbox'/>
                            <Field name='userIsAdmin' type='checkbox' />
                            <Field name='userIsGoogle' type='checkbox' />
                            <Field name='userIsSuperAdmin' type='checkbox' />
                            <button type='submit'>Crear</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
