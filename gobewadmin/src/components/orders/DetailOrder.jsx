import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GET_ORDER_BY_ID } from "../../redux/actions"

export default function DetailOrder({ idOrden }) {
    
    let dispatch = useDispatch()
    let order = useSelector((state) => state.adminReducer.order)
    
    useEffect(() => {
        dispatch(GET_ORDER_BY_ID(idOrden))
    }, [dispatch])

    console.log(order)
    return (
        <section>
            <div>
                <h2>Order detalle</h2>
                <p>Este es el detalle de la orden seleccionada: {idOrden}</p>
            </div>
        </section>
    )
}