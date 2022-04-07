import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CategoryType } from '../../types/CategoryType'

type Props = {
  onAddCategory:(props: CategoryType) => void
}

const CategoryAdd = (props: Props) => {


  const {register, handleSubmit, formState: { errors }} = useForm<CategoryType>()
      const  navigate = useNavigate()

  const onSubmit: SubmitHandler<CategoryType> = (data) =>{
       props.onAddCategory(data);
       navigate("/admin/category")
  }
  return (
    <form className="w-90 px-6 " onSubmit={handleSubmit(onSubmit)} >
      <h2>Thêm danh mục</h2>
      <div className="form-group  ">
        <input type="text" className="form-control border border-danger " id="name" {...register('name', {required: true})} aria-describedby="emailHelp"  placeholder="Tên danh mục" />
      </div> <br />
     
      

     
      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
  )
}

export default CategoryAdd