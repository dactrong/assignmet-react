import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import WebsiteLayout from './client/WebsiteLayout'
import WebsiteCenter from './components/WebsiteCenter'
import { ProductType } from './types/ProductType'
import { createProduct, listProduct, remove, updateProduct } from './api/product'
import Product from './client/Product'
import ProductDetail from './client/ProductDetail'
import Signin from './client/Signin'
import SignUp from './client/SignUp'
import AdminLayout from './admin/AdminLayout'
import Dashboard from './admin/Dashboard'
import ProductList from './admin/products/ProductList'
import PrivateRoute from './components/PrivateRoute'
import ProductAdd from './admin/products/ProductAdd'
import ProductEdit from './admin/products/ProductEdit'
import CategoryList from './admin/categories/CategoryList'
import { CategoryType } from './types/CategoryType'
import { createCategory, listCategory, removeCategory } from './api/category'
import CategoryAdd from './admin/categories/CategoryAdd'
import InfomationUser from './components/InfomationUser'
import toastr from 'toastr'
import "toastr/build/toastr.min.css";
import { listUser, removeUser } from './api/user'
import { Usertype } from './types/UserType'
import UserList from './admin/user/UserList'
function App() {
  const [products, setProduct] = useState<ProductType[]>([])
  const [categorys, setCategory] = useState<CategoryType[]>([])
  const [users, setUser] = useState<Usertype[]>([])
  const navigate = useNavigate();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await listProduct()
      setProduct(data)
    }
    getProduct();
  }, [])

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await listCategory()
      setCategory(data)
    }
    getCategory();
  }, [])

  useEffect(() => {
    const getUser = async () => {
      const { data } = await listUser()
      setUser(data)
    }
    getUser();
  }, [])
  const onHandleRemoveProduct = async (_id: number) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?")
    if (confirm) {
      remove(_id)
      setProduct(products.filter(item => item._id !== _id))
      toastr.success("Xóa sản phẩm thành công");
    }

  }

  const onHandleAdd = async (product: any) => {
    try {
      const { data } = await createProduct(product)
      setProduct([...products, data])
      toastr.success("Thếm sản phẩm thành công");
      navigate("/admin/product")
    } catch (error) {

    }

  }
  const onhandleUpdate = async (product: any) => {
    try {
      const { data } = await updateProduct(product)
      setProduct(products.map(item => item._id === data._id ? product : item))
      toastr.success("Update sản phẩm thành công");
      navigate("/admin/product")
    } catch (error) {

    }

  }
  const onHandleRemoveCategory = async (_id: number) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?")
    if (confirm) {
      await removeCategory(_id)
      setCategory(categorys.filter(item => item._id !== _id))

    }

  }
  const onHandleAddCategory = async (category: any) => {
    const { data } = await createCategory(category)
    setCategory([...categorys, data])
  }

  const  onHandleRemoveUser = async (_id: number) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?")
    if (confirm) {
      await removeUser(_id)
      setUser(users.filter(item => item._id !== _id))

    }

  }
 

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<WebsiteCenter product={products} />} />
          <Route path="product" element={<Product product={products} />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="user" element={<InfomationUser />} />
        </Route>

        <Route path="admin" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="product">
            <Route index element={<ProductList product={products} onRemoveProduct={onHandleRemoveProduct} />} />
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            <Route path=":id/edit" element={<ProductEdit onUpdate={onhandleUpdate} />} />
          </Route>
          <Route path="category">
            <Route index element={<CategoryList category={categorys} onRemoveCategory={onHandleRemoveCategory} />} />
            <Route path="add" element={<CategoryAdd onAddCategory={onHandleAddCategory} />} />
          </Route>
          <Route path ="user">
            <Route index element={<UserList user={users} onRemoveUser = {onHandleRemoveUser}/>}/>
          </Route>

        </Route>
        <Route path="signin" element={<Signin />} />
        <Route path="Signup" element={<SignUp />} />
      </Routes>
    </div >
  )
}

export default App
