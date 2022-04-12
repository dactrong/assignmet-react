import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Usertype } from '../../types/UserType'

type UserListProps = {
    user:Usertype[]
    onRemoveUser:(_id:number) => void
}

const UserList = ({user,onRemoveUser}: UserListProps) => {
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
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Họ tên</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Số điện thoại</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Địa chỉ</th>
                  


                    <th className="text-secondary opacity-7" />
                  </tr>
                </thead>
                <tbody>
                  {user?.map((user, index) => {
                    return (
                      <tr>
                        <td>
                            <div className="d-flex flex-column justify-content-center" key={index}>
                              <h6 className="mb-0 text-sm">{user.name}</h6>
                            </div>                           
                        </td>
                       
                        <td>
                          <p className="text-xs font-weight-bold mb-0">0{user.phone}</p>

                        </td>
                      
                        <td>
                          <p className="text-xs font-weight-bold mb-0">{user.address}</p>

                        </td>
                        
                        <td>
                          <p className="text-xs font-weight-bold mb-0" >{user.email}</p>

                        </td>
                        
                       
                       
                        <td className="align-middle">
                          <button  className="btn btn-outline-warning mx-2 px-2 py-1"><Link to={`/admin/user/${user._id}/edit`}>Edit</Link></button>
                          <button  className="btn btn-outline-danger mx-2 px-2 py-1" onClick={() => onRemoveUser(user._id)}>Remove</button>
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

export default UserList