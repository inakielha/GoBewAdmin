import { Form, Formik } from "formik";
import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
import { TextInput } from "../../form/TextInput";
import { useDispatch } from "react-redux";
import { GET_FAQS, POST_FAQS } from "../../../redux/actions";
import FaqCardContainer from "./FaqCardContainer";
import { useEffect } from "react";

export default function CreationFaq() {

    const dispatch = useDispatch();
    const initialValues = {
        faqTitle: '',
        faqDescription: '',
        faqOrder: ''
    };  
    
    useEffect(() => {
        dispatch(GET_FAQS)
    }, [GET_FAQS])

    return <div>
        <div>
            <h1>Crea tus FAQ</h1>
            <span>Frequently Asked Questions (Preguntas mas frecuentes)</span>
        </div>
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema = {
                    Yup.object({
                        faqTitle: Yup.string().required('Requerido.'),
                        faqDescription: Yup.string(),
                        faqOrder: Yup.number()
                    })
                }
                onSubmit={(values) => {
                    dispatch(POST_FAQS(values))
                }}
            >
                {props => (
                    <Form>
                        <TextInput label='Pregunta ' name='faqTitle' type='text' placeholder='Introduci tu pregunta' />
                        <TextInput label=' Respuesta ' name='faqDescription' type='text' placeholder='Respuesta' />
                        <TextInput label=' Orden ' name='faqOrder' type='text' placeholder='Orden de muestra' />
                        <button type="submit">Cargar</button>
                    </Form>
                )}
            </Formik>
        </div>
        // Fijarse
        <div>
            <FaqCardContainer/>
        </div>
    </div >
}