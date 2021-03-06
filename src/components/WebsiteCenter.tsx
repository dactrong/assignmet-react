import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { listCateProduct } from '../api/category';
import { ProductType } from '../types/ProductType'
import Banner from './Banner'

type ProductProps = {
    product: ProductType[];
    
}

const WebsiteCenter = ({ product }: ProductProps) => {
    return (
        <div>
            <Banner  />
            <section className="featured spad ext-left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>

                        </div>
                    </div>
                    <div className="row featured__filter t">
                        {product?.map((product, index) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" key={index}>
                                    <div className="featured__item">
                                        <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
                                            <img src={product?.images} alt="" />
                                            <ul className="featured__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="featured__item__text">
                                            <h6><Link to={`/product/${product._id}`} >{product?.name}</Link></h6>
                                            <h5>{product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                       
                    </div>
                </div>
            </section>
            {/* Featured Section End */}
            {/* Banner Begin */}
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src="img/banner/banner-1.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src="img/banner/banner-2.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner End */}
            {/* Latest Product Section Begin */}

            {/* Latest Product Section End */}
            {/* Blog Section Begin */}
            <section className="from-blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title from-blog__title">
                                <h2>From The Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src="img/blog/blog-1.jpg" />
                                </div>
                                <div className="blog__item__text">
                                    <ul>
                                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                                        <li><i className="fa fa-comment-o" /> 5</li>
                                    </ul>
                                    <h5><a href="#">Cooking tips make cooking simple</a></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src="img/blog/blog-2.jpg" />
                                </div>
                                <div className="blog__item__text">
                                    <ul>
                                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                                        <li><i className="fa fa-comment-o" /> 5</li>
                                    </ul>
                                    <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src="img/blog/blog-3.jpg" />
                                </div>
                                <div className="blog__item__text">
                                    <ul>
                                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                                        <li><i className="fa fa-comment-o" /> 5</li>
                                    </ul>
                                    <h5><a href="#">Visit the clean farm in the US</a></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WebsiteCenter