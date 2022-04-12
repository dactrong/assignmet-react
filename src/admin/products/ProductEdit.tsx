import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { listCategory } from '../../api/category'
import { readProduct } from '../../api/product'
import { ProductType } from '../../types/ProductType'
import axios from 'axios'
type ProductEditProps = {
  onUpdate: (props: ProductType) => void
}


const ProductEdit = (props: ProductEditProps) => {
  const [category, setCategory] = useState<ProductType[]>([])
  const [image, setImage] = useState("") 
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProductType>()
  const { id } = useParams()
  const [product, setProduct] = useState<ProductType[]>([])

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await listCategory();
      setCategory(data)
    }
    getCategory();
  }, [])

  useEffect(() => {
    const getProduct = async () => {
      const { data:products } = await readProduct(id);
     
      reset(products)
      setProduct(products)
    }
    getProduct();
  }, [])
  const onSubmit: SubmitHandler<ProductType> = async( data) => {
    const image = data.images[0];
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
    props.onUpdate(data)
  
  }
  return (
    <form className="w-90 px-6 " onSubmit={handleSubmit(onSubmit)}>
      <h2>Update sản phẩm</h2>
      <div className="form-group ">
        <input type="text" className="form-control border border-danger" id="name" aria-describedby="emailHelp" {...register('name', { required: true })} placeholder="Tên sản phẩm" />
   
      </div> <br />
      <div className="form-group">
        <input type="number" className="form-control border border-danger" id="price"  {...register('price', { required: true })} placeholder="Giá sản phẩm" />
      </div> <br />
      <div className="form-group ">
        <input type="number" className="form-control border border-danger" id="quantity" aria-describedby="emailHelp"  {...register('quantity', { required: true })} placeholder="Số lượng" />
      </div> <br />
      <div className="form-group ">
            <input
                type="file"
                {...register("images")}
                id="images"
              />
              <img src={product.images}  />
            </div> <br />
            <div className="form-group ">
                <input type="text" className="form-control border border-danger" id="desc"  {...register('desc', { required: true })} placeholder="Mô tả" />
            </div> <br />
      <select id="category" className="show-tick form-control border border-danger"   {...register('category', { required: true })}>
        {category?.map((category, index) => {
          return (
            <option value ={category?._id} key ={index}>{category?.name}</option >
          )

        })}


      </select> <br />
      <button type="submit" className="btn btn-primary">Edit Product</button>
    </form>
  )
}

export default ProductEdit