import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CategoryType } from '../../types/CategoryType'

type CategoryListProps = {
    category: CategoryType[];
    onRemoveCategory:(_id:number) =>void
}

const CategoryList = ({category, onRemoveCategory}: CategoryListProps) => {
  return (
    <div className="container-fluid py-4 ">
    <div className="row ">
      <div className="col-12">
        <div className="card my-4">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
              <h6 className="text-white text-capitalize ps-3">Authors table</h6>
            </div>


          </div>

          <div className="card-body px-0 pb-2">
            <NavLink to="/admin/category/add"><a href="" className="btn btn-primary">Thêm danh mục</a></NavLink>

            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tên sản phẩm</th>
                   
                  
                  </tr>
                </thead>
                <tbody>
                  {category?.map((category, index) => {
                    return (
                      <tr>
                        <td>
                            <div className="d-flex flex-column justify-content-center" key={index}>
                              <h6 className="mb-0 text-sm">{category.name}</h6>
                            </div>                           
                        </td>
                
                        <td className="align-middle " >
                          <button className=" " ><Link to={`/admin/product/${category._id}/edit`} >Edit</Link></button>
                          <button onClick={() => onRemoveCategory(category._id)}>Remove</button>
                        </td>
                      </tr>
                    )
                  })}


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
  )
}

export default CategoryList