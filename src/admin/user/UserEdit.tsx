import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { readUser } from '../../api/user'
import { Usertype } from '../../types/UserType'


type Props = {
    onUpdateUser: (props: Usertype) => void
}


const UserEdit = (props: Props) => {
   
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Usertype>()
    const { id } = useParams()
    const navigate = useNavigate();
     
    useEffect(() => {
        const getUser = async () => {
          const { data } = await readUser(id);
          reset(data)
        }
        getUser();
      }, [])
    const onSubmit: SubmitHandler<Usertype> = async (data) => {
        props.onUpdateUser(data)
    }
    return (
        <form className="w-90 px-6 " onSubmit={handleSubmit(onSubmit)}>
            <h2>Update</h2>
            <div className="form-group ">
                <input type="text" className="form-control border border-danger" id="name" aria-describedby="emailHelp" {...register('name', { required: true })} placeholder="Tên sản phẩm" />
            </div> <br />
            <div className="form-group">
                <input type="number" className="form-control border border-danger" id="email"  {...register('email', { required: true })} placeholder="Giá sản phẩm" />
            </div> <br />
            <div className="form-group ">
                <input type="number" className="form-control border border-danger" id="address" aria-describedby="emailHelp"  {...register('address', { required: true })} placeholder="Địa chỉ" />
            </div> <br />
            <div className="form-group ">
                <input type="number" className="form-control border border-danger" id="phone" aria-describedby="emailHelp"  {...register('phone', { required: true })} placeholder="Số điện thoại" />
            </div> <br />
            <div className="form-group ">
                <input type="number" className="form-control border border-danger" id="password" aria-describedby="emailHelp"  {...register('password', { required: true })} placeholder="Password" />
            </div> <br />

            <button type="submit" className="btn btn-primary">Edit Product</button>
        </form>
    )
}

export default UserEdit