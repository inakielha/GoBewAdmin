import { Form, Formik } from 'formik';
import { TextInput } from '../form/TextInput';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { USER_LOGIN } from '../../redux/actions';


export const Login = () => {
  const dispatch = useDispatch();
  const initialValues = {
    userEmail: '',
    userPassword: ''
  }
  const validationSchema = {
    userEmail: Yup.string()
      .email('El email es inválido.')
      .required('Requerido.'),
    userPassword: Yup.string().min(6, 'Requerida')
  }


  return (
    <div>
      <Formik
        initialValues={initialValues}
        // onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
        onSubmit={(values) => dispatch(USER_LOGIN(values.userEmail, values.userPassword))}
        validationSchema={validationSchema}>
        {
          (formik) => {
            <Form>
              <TextInput label='e-mail' name='userEmail' type='email' placeholder='e-mail' />
              <TextInput label='password' name='userPassword' type='password' placeholder='password' />
              <button type="submit">Submit</button>
            </Form>
          }
        }
      </Formik>



    </div>
  )
}
