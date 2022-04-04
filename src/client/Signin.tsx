import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { signin } from '../api/user'
import { authenticate } from '../utils/localStogate'

type Props = {}
type FormInput = {
    email: string,
    password: string | number,


}

const Signin = (props: Props) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormInput> = async (data) => {
        const { data: user } = await signin(data)
        authenticate(user, () => {
            navigate("/")
        })
    }

    return (
        <div>
            <div>
                <div className="container position-sticky z-index-sticky top-0">
                    <div className="row">
                        <div className="col-12">
                            {/* Navbar */}
                            <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                                <div className="container-fluid ps-2 pe-0">
                                    <NavLink className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " to="/"><i className="fa fa-chart-pie opacity-6 text-dark me-1" /> Trang chủ</NavLink>

                                    <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon mt-2">
                                            <span className="navbar-toggler-bar bar1" />
                                            <span className="navbar-toggler-bar bar2" />
                                            <span className="navbar-toggler-bar bar3" />
                                        </span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navigation">
                                        <ul className="navbar-nav mx-auto">
                                            <li className="nav-item">
                                                <NavLink className="nav-link d-flex align-items-center me-2 active" to="/"><i className="fa fa-chart-pie opacity-6 text-dark me-1" /> Trang chủ</NavLink>

                                            </li>

                                         
                                        </ul>
                                        <ul className="navbar-nav d-lg-block d-none">
                                            <li className="nav-item">
                                                <a href="https://www.creative-tim.com/product/material-dashboard" className="btn btn-sm mb-0 me-1 bg-gradient-dark">Free download</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            {/* End Navbar */}
                        </div>
                    </div>
                </div>
                <main className="main-content  mt-0">
                    <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")' }}>
                        <span className="mask bg-gradient-dark opacity-6" />
                        <div className="container my-auto">
                            <div className="row">
                                <div className="col-lg-4 col-md-8 col-12 mx-auto">
                                    <div className="card z-index-0 fadeIn3 fadeInBottom">
                                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                            <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                                <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                                                <div className="row mt-3">
                                                    <div className="col-2 text-center ms-auto">
                                                        <a className="btn btn-link px-3" href="javascript:;">
                                                            <i className="fa fa-facebook text-white text-lg" />
                                                        </a>
                                                    </div>
                                                    <div className="col-2 text-center px-1">
                                                        <a className="btn btn-link px-3" href="javascript:;">
                                                            <i className="fa fa-github text-white text-lg" />
                                                        </a>
                                                    </div>
                                                    <div className="col-2 text-center me-auto">
                                                        <a className="btn btn-link px-3" href="javascript:;">
                                                            <i className="fa fa-google text-white text-lg" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit(onSubmit)} className="text-start">
                                                <div className="input-group input-group-outline my-3">
                                                    <label className="form-label">Email</label>
                                                    <input type="email" className="form-control" {...register('email', { required: true })} />
                                                    {errors.email && errors.email.type === "required" && <span>Mời bạn nhập email</span>}

                                                </div>
                                                <div className="input-group input-group-outline mb-3">
                                                    <label className="form-label">Password</label>
                                                    <input type="password" className="form-control"{...register('password',{ required: true })} />
                                                    {errors.password && errors.password.type === "required" && <span>Mời bạn nhập password</span>}

                                                </div>
                                                <div className="form-check form-switch d-flex align-items-center mb-3">
                                                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                                                    <label className="form-check-label mb-0 ms-2" htmlFor="rememberMe">Remember me</label>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                                                </div>
                                                <p className="mt-4 text-sm text-center">
                                                   
                                                    <Link to ='/signup'> Đăng ký tài khoản?</Link>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>

        </div>
    )
}

export default Signin