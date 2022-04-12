import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { listCategory } from '../api/category'
import { CategoryType } from '../types/CategoryType'
import { ProductType } from '../types/ProductType'

type Props = {

}

const Banner = (props: Props) => {
    const [categorys, setCategory] = useState<CategoryType>()

    useEffect(() => {
        const getCategory = async () => {
            const { data } = await listCategory()
            setCategory(data)
        }
        getCategory();
    }, [])

    // -----------------------------------------------------
   
    return (
        <div> <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div className="hero__categories__all">
                                
                                <span>Hello</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form action="#">

                                    <input type="text" placeholder="Bạn cần tìm gì?"  />
                                    <button type="submit" className="site-btn">TÌM KIẾM</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <i className="fa fa-phone" />
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>0963209332</h5>
                                    <span>Hỗ trợ 24/7 </span>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default Banner