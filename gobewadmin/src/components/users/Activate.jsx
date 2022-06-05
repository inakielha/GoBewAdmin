import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"

export const Activate = () => {
    const { id, hash, email } = useParams();
    const dispatch = useDispatch();
  useEffect(() => {
    
    // dispatch()
    
  }, [dispatch, id, hash, email])
  

  return (
    <div>Activar la cuenta y cambiar Password</div>
  )
}
