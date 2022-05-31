import  { useFormik } from 'formik';
import * as Yup from 'yup';

export const Login = () => {

  const { handleSubmit } = useFormik({
    initialValues: {
      userEmail:'',
      userPassword: ''
    },
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2))

  });
  return (
    <div>
      <div>Login</div>

    </div>
  )
}
