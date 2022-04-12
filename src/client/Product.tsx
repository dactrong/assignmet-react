import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { listCategory } from '../api/category';
import { CategoryType } from '../types/CategoryType';
import { ProductType } from '../types/ProductType'

type ProductProps = {
  product: ProductType[];
  onclickProduct: (id: string) => void;
}

const Product = ({ product, onclickProduct }: ProductProps) => {
  const [categorys, setCategory] = useState<CategoryType>()

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await listCategory()
      setCategory(data)
    }
    getCategory();
  }, [])
  return (
    <div><div>


      {/* Breadcrumb Section End */}
      {/* Product Section Begin */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Department</h4>
                  <ul className=" text-left" >
                    {categorys?.map((category, index) => {

                      return (
                        <li>

                          <button className ="border-0 bg-white fs-6" onClick={() => onclickProduct(category._id) }>
                            {category.name}
                          </button>
                        </li>

                      )

                    })}


                  </ul>
                </div>


              </div>
            </div>
            <div className="col-lg-9 col-md-7">

              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span>Sort By</span>
                      <select>
                        <option value={0}>Default</option>
                        <option value={0}>Default</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6><span>16</span> Products found</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2" />
                      <span className="icon_ul" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {product?.map((product, index) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                          <img src={product?.images} alt="" />
                          <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                          </ul>
                        </div>
                        <div className="product__item__text">

                          <h6><Link to={`${product._id}`}>{product?.name}</Link></h6>
                          <h5>{product?.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</h5>
                        </div>
                      </div>
                    </div>
                  )
                })}


              </div>
              <div className="product__pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#"><i className="fa fa-long-arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Product