import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import WebsiteLayout from './client/WebsiteLayout'
import WebsiteCenter from './components/WebsiteCenter'
import { ProductType } from './types/ProductType'
import { listProduct } from './api/product'
import Product from './client/Product'
import ProductDetail from './client/ProductDetail'
import Signin from './client/Signin'
import SignUp from './client/SignUp'
import AdminLayout from './admin/AdminLayout'
import Dashboard from './admin/Dashboard'

function App() {
  const [products, setProduct] = useState<ProductType[]>([])
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await listProduct()
      setProduct(data)
    }
    getProduct();
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<WebsiteCenter product={products} />} />
          <Route path ="product" element={<Product product ={products} />} />
          <Route path = "product/:id" element={<ProductDetail/>}/>
        </Route>
        <Route path ="admin" element={<AdminLayout/>}>
           <Route index element ={<Dashboard/>}/>
        </Route>
        <Route path = "signin" element ={<Signin/>}/>
         <Route path ="Signup" element ={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
