import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GET_ORDER_BY_ID } from "../../redux/actions"
import '../../scss/_orderAdmin.scss'

export default function DetailOrder({ orderId }) {

    let dispatch = useDispatch()
    let order = useSelector((state) => state.adminReducer.order)

    useEffect(() => {
        if (orderId) {
            dispatch(GET_ORDER_BY_ID(orderId))
        }
    }, [dispatch, orderId])

    const res = order.obj
    console.log(res)

    return (
        <div className="orders--content__container">
            <div>
                <p></p>
            </div>
            <div className="orders--title__content">
                <h2>Order detalle</h2>
            </div>
            {
                res ? <div className="orders--details">
                    <p>Este es el detalle de la orden seleccionada: {orderId}</p>
                    <p>La persona: {res.user[0]?.userFirstName} {res.user[0]?.userLastName}</p>
                    <div>
                        <p>Compro:</p>
                        {res.cart?.map(elem => {
                            return <section className="orders--details__cart" key={elem._id}>
                                <p className="orders--details__cart__cant">{elem.productCant}&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                                <p className="orders--details__cart__name">{elem.productName}&nbsp;&nbsp;&nbsp;&nbsp;</p> 
                                <p className="orders--details__cart__price">${elem.productCant * elem.productPrice}</p> 
                            </section>
                        })}
                    </div>
                    <div className="orders--details__final">
                        <p>Por un total de:&nbsp;&nbsp;</p>
                        <p className="orders--details__final__price">${res.orderTotal}</p>
                    </div>
                </div>
                    : ''
            }
        </div>
    )
}