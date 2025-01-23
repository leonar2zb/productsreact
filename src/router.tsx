import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products from './views/Product'
import NewProduct from './views/NewProduct'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />
            },
            {
                element: <NewProduct />,
                path: '/productos/nuevo'
            }
        ]
    }
])