import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_USERS } from '../../redux/actions';
import TableRow from './TableRow';
import { Link } from 'react-router-dom';
import '../../scss/_usersAdmin.scss'

export default function Users() {
    
    const { users } = useSelector((store) => store.adminReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GET_USERS())
    }, [dispatch])
    
    return (
        <section className='users--content__container'>
            <div className='users--title__content'>
                <h1>Usuarios</h1>
            </div>
            <div className='users--buttons__container'>
                <Link to='/user/new'>
                    <button>Agregar nuevo usuario</button>
                </Link>
            </div>
            <table className='users--table'>
                <thead>
                    <tr className='users--table__headers'>
                        <th className='users--table__column-name'>Nombre</th>
                        <th className='users--table__column-lastName'>Apellido</th>
                        <th className='users--table__column-email'>Email</th>
                        <th className='users--table__column-active'>Activo</th>
                        <th className='users--table__column-admin'>Admin</th>
                        <th className='users--table__column-google'>Google</th>
                        <th className='users--table__column-superAdmin'>SuperAdmin</th>
                        <th className='users--table__column-actions'>Acciones</th>
                    </tr>
                </thead>
                <tbody className='users--table__body'>
                    {
                        users?.map(u =>{
                            return(
                                <TableRow userFirstName={u.userFirstName} userLastName={u.userLastName} userEmail={u.userEmail} userIsActive={u.userIsActive} userIsAdmin={u.userIsAdmin} userIsGoogle={u.userIsGoogle} userIsSuperAdmin={u.userIsSuperAdmin} _id={u._id} key={u._id}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
