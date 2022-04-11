import React from 'react'
import toastr from 'toastr'
import "toastr/build/toastr.min.css";
import { Link, NavLink } from 'react-router-dom'

type Props = {

}
    const a = JSON.parse(localStorage.getItem('user') as string);

const logoutHandler = () => {
    try {
        localStorage.removeItem('user');
        toastr.success("Đăng xuất thành công");
        window.location.reload();
    } catch (error) {
        toastr.error("Thất bại");
    }

}

const Header = (props: Props) => {
    return (
        <div> {/* Page Preloder */}
            <div id="preloder">
                <div className="loader" />
            </div>
            {/* Humberger Begin */}
            <div className="humberger__menu__overlay" />
            <div className="humberger__menu__wrapper">
                <div className="humberger__menu__logo">
                    <a href="#"><img src="img/logo.png" /></a>
                </div>
                <div className="humberger__menu__cart">
                    <ul>
                        <li><a href="#"><i className="fa fa-heart" /> <span>1</span></a></li>
                        <li><a href="#"><i className="fa fa-shopping-bag" /> <span>3</span></a></li>
                    </ul>
                    <div className="header__cart__price">item: <span>$150.00</span></div>
                </div>
                <div className="humberger__menu__widget">
                    <div className="header__top__right__language">
                        <img src="img/language.png" />
                        <div>English</div>
                        <span className="arrow_carrot-down" />
                        <ul>
                            <li><a href="#">Spanis</a></li>
                            <li><a href="#">English</a></li>
                        </ul>
                    </div>
                    <div className="header__top__right__auth">
                        <a href="#"><i className="fa fa-user" /> Login</a>
                    </div>
                </div>
                <nav className="humberger__menu__nav mobile-menu">
                    <ul>
                        <li className="active"><a href="./index.html">Home</a></li>
                        <li><a href="./shop-grid.html">Shop</a></li>
                        <li><a href="#">Pages</a>
                            <ul className="header__menu__dropdown">
                                <li><a href="./shop-details.html">Shop Details</a></li>
                                <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                <li><a href="./checkout.html">Check Out</a></li>
                                <li><a href="./blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="./blog.html">Blog</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </nav>
                <div id="mobile-menu-wrap" />
                <div className="header__top__right__social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-linkedin" /></a>
                    <a href="#"><i className="fa fa-pinterest-p" /></a>
                </div>

            </div>

            {/* Humberger End */}
            {/* Header Section Begin */}
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>

                                        <li><Link to={`/user`}><i className="fa fa-envelope " />{a?.user.email} </Link></li>
                                        <li>Giao hàng miễn phí</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        <a href="#"><i className="fa fa-facebook" /></a>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                        <a href="#"><i className="fa fa-pinterest-p" /></a>
                                    </div>
                                    <div className="header__top__right__language">
                                        <img src="img/language.png" />
                                        <div>English</div>
                                        <span className="arrow_carrot-down" />
                                        <ul>
                                            <li><a href="#">Spanis</a></li>
                                            <li><a href="#">English</a></li>
                                        </ul>
                                    </div>
                                    {a == null ? (<div className="header__top__right__auth">

                                        <Link to={`/signin`}><i className="fa fa-user" /> Login</Link>


                                    </div>
                                    ) : (<div className="header__top__right__auth">
                                        <div className="header__top__right__language">

                                            <div>{a?.user.name}</div>
                                            <span className="arrow_carrot-down" />
                                            <ul>
                                                <li><Link to={`/user`}>Thông tin </Link></li>
                                                <li><Link to="/" onClick={() => logoutHandler()}>Đăng xuất</Link></li>
                                            </ul>
                                        </div>

                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <a href="./index.html"><img src="img/logo.png" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/product">Shop</NavLink></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="header__menu__dropdown">
                                            <li><a href="./shop-details.html">Shop Details</a></li>
                                            <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                            <li><a href="./checkout.html">Check Out</a></li>
                                            <li><a href="./blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./blog.html">Blog</a></li>
                                    <li><a href="./contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li><a href="#"><i className="fa fa-heart" /> <span>1</span></a></li>
                                    <li><a href="#"><i className="fa fa-shopping-bag" /> <span>3</span></a></li>
                                </ul>
                                <div className="header__cart__price">item: <span>$150.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars" />
                    </div>
                </div>
            </header></div>
    )
}

export default Header