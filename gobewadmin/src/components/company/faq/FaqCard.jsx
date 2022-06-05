import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { PUT_FAQS } from "../../../redux/actions";

export default function FaqCard({ faqTitle, faqDescription, faqOrder }) {

    let dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [faqChange, setFaqChange] = useState({
        faqTitle: '',
        faqDescription: '',
        faqOrder: ''
    })
    const [ready, setReady] = useState(false)

    function handleEdit(event) {
        setFaqChange({
            ...faqChange,
            [event.target.name]: event.target.value
        })
        setReady(true)
    }

    function handleSubmit(event) {
        try {
            dispatch(PUT_FAQS(faqChange))
            setReady(false)
            setEdit(false)
            alert('Modificado correctamente')
        } catch (error) {
            alert('No se pudo editar')
        }
    }

    useEffect(() => {
        setFaqChange({faqTitle, faqDescription, faqOrder})
    },[faqTitle, faqDescription, faqOrder])

    return <div> 
        {
            <div>
                <h3>{faqTitle}</h3>
                <input type="text" onChange={handleEdit} value={faqTitle} name='faqTitle' disabled={!edit}/>
            </div>
        }
        {
            <div>
                <p>{faqDescription}</p>
                <input type="text" onChange={handleEdit} value={faqDescription} name='faqDescription' disabled={!edit}/>
            </div>
        }
        {
            <div>
                <p>{faqOrder}</p>
                <input type="text" onChange={handleEdit} value={faqOrder} name='faqOrder' disabled={!edit}/>
            </div>
        }
        <button onClick={() => setEdit(!edit)}>Editar</button>
        {ready && <button onClick={handleSubmit}>OK</button>}
    </div>
}