import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { GET_ALL_ORDERS } from "../../redux/actions";
import TableOrders from "./TableOrders";
import '../../scss/_orderAdmin.scss'
import DetailOrder from "./DetailOrder";

export default function Orders() {

    let dispatch = useDispatch();
    let orders = useSelector((state) => state.adminReducer.orders)

    const [ordId, setOrdId] = useState('');

    useEffect(() => {
        dispatch(GET_ALL_ORDERS())
    }, [dispatch])

    return (
        <section className="orders--content__container">
            <div className="orders--title__content">
                <h1>Ordenes de compra</h1>
            </div>
            <table className='orders--table'>
                <thead className='orders--table__headers'>
                    <tr>
                        <th className='orders--table__column--idOrder'>Numero de orden</th>
                        <th className='orders--table__column--firstName'>Nombre</th>
                        <th className='orders--table__column--lastName'>Apellido</th>
                        <th className='orders--table__column--date'>Fecha</th>
                        <th className='orders--table__column--actions'>Acciones</th>
                        <th className='orders--table__column--detail'>Detalle</th>
                    </tr>
                </thead>
                <tbody className="orders--table__body">
                    {
                        orders?.map(elem => {
                            return (
                                <TableOrders className='orders--table__rows' setOrdId={setOrdId} idOrden={elem._id} userFirstName={elem.user[0]?.userFirstName} userLastName={elem.user[0]?.userLastName} date={elem.orderAceptDate} />
                            )
                        })
                    }

                </tbody>
            </table>
            <div>
                <DetailOrder idOrden={ordId} />
            </div>
        </section>
    )
}