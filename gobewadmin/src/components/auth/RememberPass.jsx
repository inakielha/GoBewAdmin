import { Form, Formik } from 'formik';
import { TextInput } from '../form/TextInput';
import * as Yup from 'yup';
import axios from "axios";
import { useState } from 'react';
import '../../scss/_loginAdmin.scss'
const { REACT_APP_APIURL } = process.env;
export const RememberPass = () => {
  
  const [ok, setOk] = useState('')

  const sendMailResetPass = async (values) => {
    try {
      // console.log(`${REACT_APP_APIURL}users/admin/resetPass`)
      // console.log(values)
      const response = await axios.post(`${REACT_APP_APIURL}users/admin/resetPass`, values);
      // console.log(response)
      if(response.data.ok){
        setOk(response.data.msg)
      } else {
        setOk(response.data.msg)
      }

    } catch (error) {
      // console.log(error)
        setOk('Ha ocurrido un error, por favor intente nuevamente.')
    }
  }

  return (

  <div className='login--content__container'>
    <span>{ ok }</span>
    <Formik
      initialValues={{ userEmail:'' }}
      validationSchema={Yup.object({
        userEmail: Yup.string()
          .email('Debes ingresar un email válido')
          .required('Debes ingresar tu email para reestablecer la contraseña')
        })
    }
    onSubmit={(values, actions) => {
      
      sendMailResetPass(values)
      
    }}
    
    >
      {props => (
        <section className='form--login__container'>
          <Form className='form--login'>
            <div className='form--login--tittle__container'>
              <h1>REESTABLECER CONTRASEÑA</h1>
            </div>
            <div className='form--login__input--container'>
              <TextInput name='userEmail' type='email' placeholder='e-mail'/>
            </div>
            <div className='form--login__btn'>
              <button type="submit">Enviar</button>
            </div>

            
          </Form>
        </section>
      )}
    </Formik>
    
  </div>
)};
