import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'sweetalert2/dist/sweetalert2.js'
import {RouterProvider} from "react-router-dom";
import router from "./routers/router.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}>
            <App/>
        </RouterProvider>
    </StrictMode>,
)
