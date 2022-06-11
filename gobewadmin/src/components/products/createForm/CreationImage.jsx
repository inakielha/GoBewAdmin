import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { POST_IMAGE_ADMIN } from "../../../redux/actions";
// import { useParams } from "react-router-dom";
const { REACT_APP_CLOUDINARY } = process.env


export default function CreationImage() {
    const [img, setImg] = useState([]);
    const dispatch = useDispatch()
    // const {productId} = useParams();
    const product = useSelector((state) => state.adminReducer.product)
    const [primaryPic, setPrimaryPic] = useState("");
    


    const uploadImage = (files) => {
        const formData = new FormData()
        img.forEach(ele => {
            formData.append("file", ele)
            formData.append("upload_preset", "eh329sqm")
            axios.post(REACT_APP_CLOUDINARY, formData)
                .then((res) => {
                    let imgLink = res.data.secure_url.slice(47)
                    let fotoPrincipal = false
                    let imgName = res.data.original_filename + "." + res.data.format;
                    if (imgName === primaryPic) {
                        fotoPrincipal = true
                    }
                    console.log(1, res.data)
                    // console.log()
                    dispatch(POST_IMAGE_ADMIN({
                        productId: product.product.productId,
                        // productId: productId,
                        imageName: imgLink,
                        imageAlt: product.product.productName,
                        imageIsPrimary: fotoPrincipal,
                    }))

                })
        });
        setImg([])
        alert('Se subieron las imagenes')
    }
    function handleDeleteImg(e) {
        let res = img.filter(pic => pic.name !== e.target.name)
        setImg(res)
    }
    function handlePrimary(e) {
        setPrimaryPic(e.target.name)
    }

    console.log(img)
    return (
        <>
            <div className="img-label">
                <label>Imagen: </label>
                <label htmlFor="img-btn" className="img-btn-label">Selecciona las imágenes</label>
                <input className="img-btn-input" type="file" id="img-btn" onChange={(e) => {
                    setImg([...img, e.target.files[0]]);
                }} />
            </div>
            <div className="img-container">
                    {img.map(pic => <div> {pic?.name}
                        <div>
                            <button type="button" key={pic?.name} name={pic?.name} onClick={(e) => handleDeleteImg(e)}>X</button>
                        </div>
                        <img src={URL.createObjectURL(pic)} alt={pic?.name} />
                        <div>
                            <input type="radio" name={pic?.name} onClick={(e) => handlePrimary(e)} /> Imagen principal
                        </div>
                    </div>)}
            </div>
            <div>
                <button type="button" onClick={uploadImage}> Subir Imagenes </button>
            </div>
        </>
    )
}