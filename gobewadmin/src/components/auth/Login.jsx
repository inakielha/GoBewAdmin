import { Form, Formik } from 'formik';
import { TextInput } from '../form/TextInput';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import '../../scss/_loginAdmin.scss'
const { REACT_APP_APIURL } = process.env;
export const Login = () => {
  
  const navigate = useNavigate();
  const path = localStorage.getItem('lastPath');

  const [ok, setOk] = useState(true)
  const login = async (values) => {
    try {
      const response = await axios.post(`${REACT_APP_APIURL}users/authAdmin`, values);
      if(response.data.ok){
          sessionStorage.setItem('userFirstName', response.data.userfirstName);
          sessionStorage.setItem('userId', response.data.userId);
          sessionStorage.setItem('userIsAdmin', response.data.userIsAdmin);
          sessionStorage.setItem('userIsSuperAdmin', response.data.userIsSuperAdmin);

          return   (path) ? navigate(path, {replace: true}) : navigate('/', {replace: true})
      } else {
        setOk(false)
      }

    } catch (error) {
        setOk(false)
    }
  }
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
      // dispatch(USER_LOGIN(values))
      // console.log(values)
      login(values)
      actions.setSubmitting(false);
    }, 1000);
    }}
    >
      {props => (
        <section className='form__login--container'>
          <Form className='form--login'>
            <TextInput label='e-mail' name='userEmail' type='email' placeholder='e-mail'/>
            <TextInput label='password' name='userPassword' type='password' placeholder='password'/>
            <button type="submit">Submit</button>
          </Form>
        </section>
      )}
    </Formik>
  </div>
)};
