import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as productsLoader } from './views/Products'
import NewProduct, { action as newProductAction } from './views/NewProduct'
import EditProduct, { loader as editProduct, action as editProductAction } from './views/EditProduct'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader
            },
            {
                element: <NewProduct />,
                path: '/productos/nuevo',
                action: newProductAction
            },
            {
                path: 'productos/:id/edit',
                element: <EditProduct />,
                loader: editProduct,
                action: editProductAction
            }
        ]
    }
])