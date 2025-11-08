import {createBrowserRouter, Form} from 'react-router-dom';
import App from '../App';
import {LandingPage,Builder,Login,Signup,Features,Pricing,Ats } from '../Pages/index.js'


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
                element:<Builder/>
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
                path:'/Signup',
                element:<Signup/>
            },
            {
                path:'/Login',
                element:<Login/>
            },
            {
                path:'/ats-score',
                element:<Ats/>
            },
        ]
    }
])

export default AppRouter