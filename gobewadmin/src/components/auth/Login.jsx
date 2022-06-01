import  { Form, Formik } from 'formik';
import { TextInput } from '../form/TextInput';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { USER_LOGIN } from '../../redux/actions';

export const Login = () => (
  <div>
    <h1>My Form</h1>
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
          alert(JSON.stringify(values, null, 2));
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
);
