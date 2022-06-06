import { useDispatch } from "react-redux";
import { GET_FAQS, POST_FAQS } from "../../../redux/actions";
import FaqCardContainer from "./FaqCardContainer";
import { useEffect, useState } from "react";
import validateForm from "./validation/validateForm";
import styles from './styles/creationFaq.module.css'

export default function CreationFaq() {

    const dispatch = useDispatch();
    const [values, setValues] = useState({
        faqTitle: '',
        faqDescription: '',
        faqOrder: ''
    });
    const [error, setError] = useState('');

    function handleChange(event) {
        setValues((prevState) => {
            const newState = {
                ...prevState,
                [event.target.name]: event.target.value
            }
            setError(validateForm(newState))
            return newState
        })
    }
    console.log(Object.keys(error).length)
    function handleSubmit() {
        console.log(Object.keys(error).length)
        if (values.faqTitle.length === 0) {
            setError(1);
            alert('Error: Ingresa la pregunta')
        } else if (Object.keys(error).length === 0) {
            dispatch(POST_FAQS(values))
            alert('FAQ creada')
        }
    }

    useEffect(() => {
        dispatch(GET_FAQS())
    }, [dispatch])

    return <div className={styles.faqs}>
        <div className={styles.faqTitulo}>
            <h1>Crea tus FAQ</h1>
            <span>Frequently Asked Questions (Preguntas mas frecuentes)</span>
        </div>
        <br />
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label>Pregunta: </label>
                <input type="text" placeholder="Pregunta..." onChange={(e) => handleChange(e)} value={values.faqTitle} name='faqTitle' />
            </div>
            <div>
                <label>Descripcion: </label>
                <input type="text" placeholder="Descripcion..." onChange={(e) => handleChange(e)} value={values.faqDescription} name='faqDescription' />
            </div>
            <div>
                <label>Orden: </label>
                <input type="text" placeholder="Orden..." onChange={(e) => handleChange(e)} value={values.faqOrder} name='faqOrder' />
            </div>
            <button type="submit">Crear</button>
        </form>
        <br />
        <div>
            <FaqCardContainer />
        </div>
    </div >
}