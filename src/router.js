import HomePage from "~/pages/Home"
import AboutPage from "~/pages/About"
import Navbar from "~/layouts/navbar"
import { Navigate } from "react-router-dom"

const router = [
    {
        path: '/',
        element: <Navbar />,
        children: [
            {
                path: '',
                element: <Navigate to='/home' replace />
            },
            {
                path: '/home',
                element: <HomePage />
            },
            {
                path: '/about',
                element: <AboutPage />
            }
        ]
    },
]

export default router