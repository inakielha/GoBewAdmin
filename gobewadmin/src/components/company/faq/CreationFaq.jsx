import { Formik } from "formik";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { TextInput } from "../../form/TextInput";

export default function CreationFaq() {
    return <div>
        <h1>Crea tus FAQ</h1>
        <span>Frequently Asked Questions (Preguntas mas frecuentes)</span>
        <Formik
            initialValues={{
                faqTitle: '',
                faqDescription: '',
                faqOrder: ''
            }}
            validationSchema={Yup.object({
                faqTitle: Yup.string()
                    .required('Requerido.'),
                faqDescription: Yup.string().min(6, 'Requerida').required('Requerido'),
                faqOrder: Yup.number()
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
                <form>
                    <TextInput label='Pregunta ' name='faqTitle' type='text' placeholder='Introduci tu pregunta' />
                    <TextInput label=' Respuesta ' name='faqDescription' type='text' placeholder='Respuesta' />
                    <TextInput label=' Orden ' name='faqOrder' type='text' placeholder='Orden de muestra' />
                    <button type="submit">Cargar</button>
                </form>
            )}
        </Formik>
    </div>
}