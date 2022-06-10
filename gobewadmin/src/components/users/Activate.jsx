import { useCallback, useEffect, useState } from "react"

import { useParams } from "react-router-dom"
import { userActivateCta } from "../../controllers/auth";

export const Activate = () => {
    const { userId, hash, userEmail } = useParams();
    
    
    const [res, setRes] = useState({
      ok: false,
      msg: '123',
      userId,
      userEmail,
      userFirstName: '',
      userLastName: ''
    })
    // useCallback(
    //    () => {
    //      setRes(async  () => await userActivateCta(userId, hash, userEmail))
    //      console.log(1)
    //   },
    //   [userId, hash, userEmail],
    // )
    
    
    
useEffect( () => {
  
  
  setRes((async  () =>await userActivateCta(userId, hash, userEmail))())
  // console.log(res)
}, [userId, hash, userEmail])



  return (
    <>
    <p>{res?.msg}</p>
    {res?.ok && <div>La cuenta se activó con éxito.</div>}
    </>
  )
}
