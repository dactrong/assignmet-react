import React from 'react'
import { isAuthenticate } from '../utils/localStogate'

type Props = {}

const InfomationUser = (props: Props) => {
  const { user } = isAuthenticate()
  return (
    <div>
      
      <div className="col-12 col-xl-4 text-left">
        <div className="card card-plain h-100">
          <div className="card-header pb-0 p-3">
            <div className="row">
              <div className="col-md-8 d-flex align-items-center">
                <h6 className="mb-0">Thông tin user</h6>
              </div>
              
            </div>
          </div>
          <div className="card-body p-3">
            
            <hr className="horizontal gray-light my-4" />
            <ul className="list-group">
              <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Full Name:</strong> &nbsp; {user.name}</li>
              <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> &nbsp; {user.phone}</li>
              <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp;{user.email}</li>
              <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Location:</strong> &nbsp; USA</li>
              <li className="list-group-item border-0 ps-0 pb-0">
                <strong className="text-dark text-sm">Social:</strong> &nbsp;
                <a className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                  <i className="fab fa-twitter fa-lg" />
                </a>
                <a className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                  <i className="fab fa-instagram fa-lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  )
}

export default InfomationUser