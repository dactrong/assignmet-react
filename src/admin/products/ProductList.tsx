import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ProductType } from '../../types/ProductType'

type ProductLitProps = {
    product:ProductType[]
    onRemoveProduct:(_id:number) => void
}

const ProductList = ({product,onRemoveProduct}: ProductLitProps) => {
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
            <NavLink to="/admin/product/add"><a href="" className="btn btn-primary">Thêm sản phẩm</a></NavLink>

            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tên sản phẩm</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Ảnh</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Giá tiền</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Số lượng</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Danh mục</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Mô tả</th>


                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>
                  {product?.map((product, index) => {
                    return (
                      <tr>
                        <td>
                            <div className="d-flex flex-column justify-content-center" key={index}>
                              <h6 className="mb-0 text-sm">{product.name}</h6>
                            </div>                           
                        </td>
                        <td>
                          <img src={product.images} alt="" width="100px" />
                        </td>
                        <td>
                          <p className="text-xs font-weight-bold mb-0">{product.price}$</p>

                        </td>
                      
                        <td>
                          <p className="text-xs font-weight-bold mb-0">{product.quantity}</p>

                        </td>
                        
                        <td>
                          <p className="text-xs font-weight-bold mb-0" >{product.category}</p>

                        </td>
                        <td>
                          <p className="text-xs font-weight-bold mb-0" >{product.desc}</p>

                        </td>
                       
                       
                        <td className="align-middle">
                          <button  className="btn btn-outline-warning mx-2 px-2 py-1"><Link to={`/admin/product/${product._id}/edit`}>Edit</Link></button>
                          <button  className="btn btn-outline-danger mx-2 px-2 py-1" onClick={() => onRemoveProduct(product._id)}>Remove</button>
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

export default ProductList