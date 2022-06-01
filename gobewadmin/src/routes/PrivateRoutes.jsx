import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { CHECK_LOGIN } from "../redux/actions";

export const PrivateRoutes = ({ children }) => {
  const { auth: {userId} } = useSelector((store) => store.adminReducer);
  const token = localStorage.getItem('token')
    // console.log(userId, !!userId, token)
  
  const dispatch = useDispatch();
  !userId && dispatch(CHECK_LOGIN())


    return !!userId || !!token
      ?  children
      :  <Navigate to='/login' />
      
}

