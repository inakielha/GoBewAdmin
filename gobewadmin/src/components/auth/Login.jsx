import  { Form, Formik } from 'formik';
import { TextInput } from '../form/TextInput';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOGIN } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Login = () => {
  const dispatch = useDispatch();
  const { auth: {userId, ok} } = useSelector((store) => store.adminReducer);
  
  const navigate = useNavigate();
  const path = localStorage.getItem('lastPath');

  useEffect(() => {
    if(userId !=='') {
      return   (path) && navigate(path, {replace: true})
    }

  }, [userId, navigate, path])

  return (

  <div>
    <h1>Login</h1>
    { (!ok) && <span>Usuario no encontrado.</span>}
    <Formik
      initialValues={{
                  userEmail:'',
                  userPassword: ''
                }}
      validationSchema={Yup.object({
        userEmail: Yup.string()
          .email('El email es inválido.')
          .required('Requerido.'),
        userPassword: Yup.string().min(6, 'Requerida')
        })
    }
    onSubmit={(values, actions) => {
      setTimeout(() => {
      dispatch(USER_LOGIN(values))
      // console.log(values)
      actions.setSubmitting(false);
    }, 1000);
    }}
    >
      {props => (
        <Form>
          <TextInput label='e-mail' name='userEmail' type='email' placeholder='e-mail'/>
          <TextInput label='password' name='userPassword' type='password' placeholder='password'/>
          <button type="submit">Submit</button>

        </Form>
      )}
    </Formik>
  </div>
)};
