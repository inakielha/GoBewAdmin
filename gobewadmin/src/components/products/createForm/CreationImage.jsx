import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { POST_IMAGE_ADMIN } from "../../../redux/actions";
const {REACT_APP_CLOUDINARY,REACT_APP_CLOUDINARY_KEY} = process.env


export default function CreationImage() {
    const [img, setImg] = useState([]);
    const dispatch = useDispatch()
    const product = useSelector((state) => state.adminReducer.product)
    const [primaryPic, setPrimaryPic] = useState("");
    console.log(product)

    const uploadImage = (files) => {
        const formData = new FormData()
        img.forEach(ele => {
            formData.append("file", ele)
            formData.append("upload_preset", "eh329sqm")
            axios.post(REACT_APP_CLOUDINARY, formData)
                .then((res) => {
                    console.log(res.data)
                    let imgLink = res.data.secure_url.slice(47)
                    let fotoPrincipal = false
                    let imgName = res.data.original_filename+"."+res.data.format;
                    console.log(res.data.original_filename)
                    // console.log (primaryPic)
                    imgName === primaryPic? fotoPrincipal = true: false;
                    dispatch(POST_IMAGE_ADMIN({
                        productId: product.data.product.productId,
                        imageName: imgLink,
                        imageAlt: product.data.product.productName,
                        imageIsPrimary: fotoPrincipal,
                    }))
                })
            });
    }
    function handleDeleteImg(e) {
        let res = img.filter(pic => pic.name !== e.target.name)
        setImg(res)
    }
    function handlePrimary(e){
        setPrimaryPic(e.target.name)
    }

    return (
        <div>
            <label>Imagen: </label>
            <input type="file" placeholder="Nombre..." onChange={(e) => {
                setImg([...img, e.target.files[0]]);
                console.log(img)
            }} />
            <ul>
                <li>{img.map(pic => <li> {pic?.name}
                <div>

                    <button type="button" key={pic?.name} name={pic?.name} onClick={(e) => handleDeleteImg(e)}>X</button>
                </div>
                <div>
                    <input type="radio" name={pic?.name} onClick={(e)=> handlePrimary(e)}/> Imagen principal
                </div>
                </li>)}
                </li>
            </ul>
            <button type="button" onClick={uploadImage}> Subir Imagenes </button>
        </div>
    )
}