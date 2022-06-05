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

  <div className='login--content__container'>
    {/* <h1>Login</h1> */}
    { (!ok) && <span>Usuario no encontrado.</span>}
    <Formik
      initialValues={{
                  userEmail:'',
                  userPassword: ''
                }}
      validationSchema={Yup.object({
        userEmail: Yup.string()
          .email('Debes ingresar un email válido')
          .required('Debes ingresar tu email para iniciar sesión'),
        userPassword: Yup.string().min(6, 'Requerida')
        })
    }
    onSubmit={(values, actions) => {
      
      login(values)
      
    }}
    >
      {props => (
        <section className='form--login__container'>
          <Form className='form--login'>
            <div className='form--login--tittle__container'>
              <h1>BIENVENIDO</h1>
            </div>
            <div className='form--login__input--container'>
              <TextInput name='userEmail' type='email' placeholder='e-mail'/>
            </div>
            <div className='form--login__input--container'>
              <TextInput name='userPassword' type='password' placeholder='password'/>
            </div>
            <div className='form--login__btn'>
              <button type="submit">Iniciar Sesión</button>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  </div>
)};
