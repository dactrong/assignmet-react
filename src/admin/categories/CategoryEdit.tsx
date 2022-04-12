import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { readCategory } from '../../api/category'
import { CategoryType } from '../../types/CategoryType'


type ProductEditProps = {
    onUpdate: (category: CategoryType) => void
}

type FormInputs = {
    _id: any,
    name: string
}

const CategoryEdit = (props: ProductEditProps) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await readCategory(id)
            reset(data);
        }
        getCategory();
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        props.onUpdate(data);
        navigate("/admin/products")
    }


    return (

        <div>
            <form className="w-90 px-6 " action="" onSubmit={handleSubmit(onSubmit)}>
                <h2>Update sản phẩm</h2>
                <div className="form-group ">
                    <input type="text" className="form-control border border-danger" id="name" {...register('name', { required: true })} placeholder="Tên danh muc" />
                    {errors.name && <span className="red-600">Bắt buộc phải nhập trường này!</span>}
                </div> <br />
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>)
}

export default CategoryEdit