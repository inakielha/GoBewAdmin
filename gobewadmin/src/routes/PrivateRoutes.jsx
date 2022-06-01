import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoutes = ({ children }) => {
  const { auth: {userId} } = useSelector((store) => store.adminReducer);
  
    // console.log(userId, !!userId)
  
    return !!userId 
      ?  children
      :  <Navigate to='/login' />
      
}

