import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { listCategory } from '../../api/category'
import { ProductType } from '../../types/ProductType'

type ProduuctAddProps = {
    onAdd: (props: ProductType) => void
}

const ProductAdd = (props: ProduuctAddProps) => {
    const [category, setCategory] = useState<ProductType[]>([])
    useEffect(() => {
        const getCategory = async () => {
       const { data} =  await listCategory()
       setCategory(data)
        }
        getCategory();
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm<ProductType>()
    const onSubmit: SubmitHandler<ProductType> = (data) => {
        props.onAdd(data)
    }
    return (
        <form className="w-90 px-6 " onSubmit={handleSubmit(onSubmit)}>
            <h2>Thêm sản phẩm</h2>
            <div className="form-group  ">
                <input type="text" className="form-control border border-danger " id="name" aria-describedby="emailHelp" {...register('name', { required: true })} placeholder="Tên sản phẩm" />
            </div> <br />
            <div className="form-group">
                <input type="number" className="form-control border border-danger" id="price"  {...register('price', { required: true })} placeholder="Giá sản phẩm" />
            </div> <br />
            <div className="form-group ">
                <input type="number" className="form-control border border-danger" id="quantity" aria-describedby="emailHelp"  {...register('quantity', { required: true })} placeholder="Số lượng" />
            </div> <br />
            <div className="form-group ">
                <input type="text" className="form-control border border-danger" id="images" aria-describedby="emailHelp"  {...register('images', { required: true })} placeholder="Ảnh" />
            </div> <br />

            <select id="category" className="show-tick form-control border border-danger"   {...register('category', { required: true })}>
                {category?.map((category, index) => {

                    return (
                        <option >{category?._id}</option >

                    )

                })}


            </select>
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    )
}

export default ProductAdd