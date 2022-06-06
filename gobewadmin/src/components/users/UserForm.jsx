import React from 'react'
import { Form, Formik } from 'formik'
import { TextInput } from '../form/TextInput'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { USER_CREATE } from '../../redux/actions'
import CheckBox from '../form/CheckBox'
import '../../scss/_usersForm.scss'


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
        <div className='users--form__container'>
            <div className='users-form--title__container'>
                <h1>Nuevo Usuario</h1>
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    dispatch(USER_CREATE(values))
                    alert("Usuario creado correctamente")
                }
                }
                // onSubmit={(values) => console.log(values)}
                validationSchema={validations}
            >
                {
                    (formik) => (
                        <Form class = 'users--form'>
                            <TextInput class='field-user__form' name='userEmail' type='email' placeholder='email' />
                            <TextInput class='field-user__form' name='userPassword' type='password' placeholder='password' />
                            <TextInput class='field-user__form' name='userFirstName' type='text' placeholder='first name' />
                            <TextInput class='field-user__form' name='userLastName' type='text' placeholder='last name' />
                            <div className='checkbox--container'>
                                <CheckBox class='field-user__form' label='Admin' type='checkbox' name='userIsAdmin' />
                            </div>
                            <div className='checkbox--container'>
                                <CheckBox class='field-user__form' label='Google' type='checkbox' name='userIsGoogle' />
                            </div>
                            <div className='checkbox--container'>
                                <CheckBox class='field-user__form' label='Super Admin' type='checkbox' name='userIsSuperAdmin' />       
                            </div>
                            <button type='submit'>Crear</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
