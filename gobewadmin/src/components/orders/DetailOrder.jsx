import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GET_ORDER_BY_ID } from "../../redux/actions"

export default function DetailOrder({ idOrden }) {

    let dispatch = useDispatch()
    let order = useSelector((state) => state.adminReducer.order)

    useEffect(() => {
        dispatch(GET_ORDER_BY_ID(idOrden))
    }, [dispatch, idOrden])

    console.log(order)
    return (
        <div>
            <h2>Order detalle</h2>
            <p>Este es el detalle de la orden seleccionada: {idOrden}</p>
            <p>La persona: {order.user[0]?.userFirstName} {order.user[0]?.userLastName}</p>
            <p>
                Compro:
                {order.cart?.map(elem => {
                    let totPriceProd
                    elem.productCant > 1 ? totPriceProd = elem.productCant * elem.productPrice : totPriceProd = elem.productPrice
                    return <div>
                        <p>{elem.productName}</p>
                        <p>{elem.totPriceProd}</p>
                    </div>
                })}
            </p>
            <p>Por un total de: {order.orderTotal}</p>
        </div>
    )
}