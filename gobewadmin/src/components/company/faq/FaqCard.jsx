import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { PUT_FAQS } from "../../../redux/actions";

export default function FaqCard({ faqTitle, faqDescription, faqOrder, faqId }) {


    let dispatch = useDispatch();
    //const { faqs } = useSelector(store => store.adminReducer)

    const [edit, setEdit] = useState(false);
    const [faqChange, setFaqChange] = useState({
        faqId: faqId,
        faqTitle,
        faqDescription,
        faqOrder
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
        setFaqChange({ faqTitle: faqTitle, faqDescription, faqOrder, faqId: faqId })
    }, [faqTitle, faqDescription, faqOrder, faqId])

    return <div>
        {
            <div>
                <h4>Titulo</h4>
                <input type="text" onChange={handleEdit} value={faqChange.faqTitle} name='faqTitle' disabled={!edit} />
            </div>
        }
        {
            <div>
                <h4>Descripcion</h4>
                <input type="text" onChange={handleEdit} value={faqChange.faqDescription} name='faqDescription' disabled={!edit} />
            </div>
        }
        {
            <div>
                <h4>Orden</h4>
                <input type="text" onChange={handleEdit} value={faqChange.faqOrder} name='faqOrder' disabled={!edit} />
            </div>
        }
        <button onClick={() => setEdit(!edit)}>Editar</button>
        {ready && <button onClick={handleSubmit}>OK</button>}
    </div>
}