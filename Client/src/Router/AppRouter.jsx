import {createBrowserRouter, Form} from 'react-router-dom';
import App from '../App';
import LandingPage from '../Pages/LandingPage.jsx'
import ResumeBuild from '../Pages/ResumeBuild.jsx'
import Features from '../Pages/Features.jsx';
import About from '../Pages/About.jsx';
import Pricing from '../Pages/Pricing.jsx';


const AppRouter = createBrowserRouter([
    {
        path:'',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<LandingPage/>
            },
            {
                path:'/builder',
                element:<ResumeBuild/>
            },
            {
                path:'/features',
                element:<Features/>
            },
            {
                path:'/Pricing',
                element:<Pricing/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/Signup',
                element:<About/>
            },
        ]
    }
])

export default AppRouter