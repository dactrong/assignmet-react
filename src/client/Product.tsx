import React from 'react'
import { ProductType } from '../types/ProductType'

type Props = {
    product:ProductType[];
}

const Product = ({ product}: Props) => {
  return (
    <div><div>
  <section className="hero hero-normal">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="hero__categories">
            <div className="hero__categories__all">
              <i className="fa fa-bars" />
              <span>All departments</span>
            </div>
            <ul>
              <li><a href="#">Fresh Meat</a></li>
              <li><a href="#">Vegetables</a></li>
              <li><a href="#">Fruit &amp; Nut Gifts</a></li>
              <li><a href="#">Fresh Berries</a></li>
              <li><a href="#">Ocean Foods</a></li>
              <li><a href="#">Butter &amp; Eggs</a></li>
              <li><a href="#">Fastfood</a></li>
              <li><a href="#">Fresh Onion</a></li>
              <li><a href="#">Papayaya &amp; Crisps</a></li>
              <li><a href="#">Oatmeal</a></li>
              <li><a href="#">Fresh Bananas</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="hero__search">
            <div className="hero__search__form">
              <form action="#">
                <div className="hero__search__categories">
                  All Categories
                  <span className="arrow_carrot-down" />
                </div>
                <input type="text" placeholder="What do yo u need?" />
                <button type="submit" className="site-btn">SEARCH</button>
              </form>
            </div>
            <div className="hero__search__phone">
              <div className="hero__search__phone__icon">
                <i className="fa fa-phone" />
              </div>
              <div className="hero__search__phone__text">
                <h5>+65 11.188.888</h5>
                <span>support 24/7 time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Hero Section End */}
  {/* Breadcrumb Section Begin */}
  
  {/* Breadcrumb Section End */}
  {/* Product Section Begin */}
  <section className="product spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-5">
          <div className="sidebar">
            <div className="sidebar__item">
              <h4>Department</h4>
              <ul>
                <li><a href="#">Fresh Meat</a></li>
                <li><a href="#">Vegetables</a></li>
                <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                <li><a href="#">Fresh Berries</a></li>
                <li><a href="#">Ocean Foods</a></li>
                <li><a href="#">Butter &amp; Eggs</a></li>
                <li><a href="#">Fastfood</a></li>
                <li><a href="#">Fresh Onion</a></li>
                <li><a href="#">Papayaya &amp; Crisps</a></li>
                <li><a href="#">Oatmeal</a></li>
              </ul>
            </div>
            <div className="sidebar__item">
              <h4>Price</h4>
              <div className="price-range-wrap">
                <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min={10} data-max={540}>
                  <div className="ui-slider-range ui-corner-all ui-widget-header" />
                  <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" />
                  <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" />
                </div>
                <div className="range-slider">
                  <div className="price-input">
                    <input type="text" id="minamount" />
                    <input type="text" id="maxamount" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar__item sidebar__item__color--option">
              <h4>Colors</h4>
              <div className="sidebar__item__color sidebar__item__color--white">
                <label htmlFor="white">
                  White
                  <input type="radio" id="white" />
                </label>
              </div>
              <div className="sidebar__item__color sidebar__item__color--gray">
                <label htmlFor="gray">
                  Gray
                  <input type="radio" id="gray" />
                </label>
              </div>
              <div className="sidebar__item__color sidebar__item__color--red">
                <label htmlFor="red">
                  Red
                  <input type="radio" id="red" />
                </label>
              </div>
              <div className="sidebar__item__color sidebar__item__color--black">
                <label htmlFor="black">
                  Black
                  <input type="radio" id="black" />
                </label>
              </div>
              <div className="sidebar__item__color sidebar__item__color--blue">
                <label htmlFor="blue">
                  Blue
                  <input type="radio" id="blue" />
                </label>
              </div>
              <div className="sidebar__item__color sidebar__item__color--green">
                <label htmlFor="green">
                  Green
                  <input type="radio" id="green" />
                </label>
              </div>
            </div>
            <div className="sidebar__item">
              <h4>Popular Size</h4>
              <div className="sidebar__item__size">
                <label htmlFor="large">
                  Large
                  <input type="radio" id="large" />
                </label>
              </div>
              <div className="sidebar__item__size">
                <label htmlFor="medium">
                  Medium
                  <input type="radio" id="medium" />
                </label>
              </div>
              <div className="sidebar__item__size">
                <label htmlFor="small">
                  Small
                  <input type="radio" id="small" />
                </label>
              </div>
              <div className="sidebar__item__size">
                <label htmlFor="tiny">
                  Tiny
                  <input type="radio" id="tiny" />
                </label>
              </div>
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
            {product?.map((product, index) =>{
              return(
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
                    <h6><a href="#">{product?.name}</a></h6>
                    <h5>${product?.price}</h5>
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