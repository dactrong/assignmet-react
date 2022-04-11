import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { listCategory } from '../../api/category'
import { ProductType } from '../../types/ProductType'
import axios from 'axios'
type ProduuctAddProps = {
    onAdd: (props: ProductType) => void
}

const ProductAdd = (props: ProduuctAddProps) => {
    const [category, setCategory] = useState<ProductType[]>([])
    const [image, setImage] = useState("") 
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await listCategory()
            setCategory(data)
        }
        getCategory();
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm<ProductType>()

    const onSubmit: SubmitHandler<ProductType> = async (data) => {
        
        const CLOUDINARY_PRESET = "qoqbcmci";
        const CLOUDINARY_API_URL =
            "https://api.cloudinary.com/v1_1/dectee66b/image/upload";
        if (image) {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", CLOUDINARY_PRESET);
            const img = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            data.images = img.data.url;
        }
        props.onAdd(data)
    }
    return (
        <form className="w-90 px-6 " onSubmit={handleSubmit(onSubmit)}>
            <h2>Thêm sản phẩm</h2>
            <div className="form-group  ">
                <input type="text" className="form-control border border-danger " id="name" {...register('name', { required: true })} placeholder="Tên sản phẩm" />
            </div> <br />
            <div className="form-group">
                <input type="number" className="form-control border border-danger" id="price"  {...register('price', { required: true })} placeholder="Giá sản phẩm" />
            </div> <br />
            <div className="form-group ">
                <input type="number" className="form-control border border-danger" id="quantity"   {...register('quantity', { required: true })} placeholder="Số lượng" />
            </div> <br />
            <div className="form-group ">
            <input
                type="file"
                {...register("images")}
                onChange={(e) => { setImage(e.target.files[0])}}
               
              />
              <img src={image} style={{ width: "300px" }} />
            </div> <br />
            <div className="form-group ">
                <input type="text" className="form-control border border-danger" id="desc"  {...register('desc', { required: true })} placeholder="Mô tả" />
            </div> <br />

            <select id="category" className="show-tick form-control border border-danger"   {...register('category', { required: true })}>
                {category?.map((category, index) => {

                    return (
                        <option value={category._id} >{category?.name}</option >

                    )

                })}


            </select>
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    )
}

export default ProductAdd