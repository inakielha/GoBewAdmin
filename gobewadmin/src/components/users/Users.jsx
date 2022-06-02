import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_USERS } from '../../redux/actions';
import TableRow from './TableRow';
import styles from '../styles/tableUsers.module.css'

export default function Users() {
    
    const { users } = useSelector((store) => store.adminReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GET_USERS())
    }, [dispatch])
    
    return (
        <div>
            <table className={styles.tableContainer}>
                <thead className={styles.headTable}>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Usuario Activo</th>
                    <th>Usuario Admin</th>
                    <th>Usuario Google</th>
                    <th>Usuario SuperAdmin</th>
                </thead>
                <tbody className={styles.bodyTable}>
                    {
                        users?.map(u =>{
                            return(
                                <TableRow userFirstName={u.userFirstName} userLastName={u.userLastName} userEmail={u.userEmail} userIsActive={u.userIsActive} userIsAdmin={u.userIsAdmin} userIsGoogle={u.userIsGoogle} userIsSuperAdmin={u.userIsSuperAdmin} _id={u._id} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
