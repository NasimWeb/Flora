import Index from "./Pages/Index/Index";
import ServiceInfo from "./Pages/ServiceInfo/ServiceInfo";
import CategoryInfo from "./Pages/Category/CategoryInfo";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from './Pages/ContactUs/ContactUs'
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Search from "./Pages/Search/Search";
import Users from "./Pages/AdminPanel/Users/Users";
import Articels from "./Pages/AdminPanel/Articels/Articels";
import AdminPanel from "./Pages/AdminPanel/Index";
import PropertiesList from "./Pages/AdminPanel/PropertiesList/PropertiesList";
import Menus from "./Pages/AdminPanel/Menus/Menus";
import NotFound from "./Pages/NotFound/NotFound";
import Services from "./Pages/AdminPanel/Services/Services";
import Category from "./Pages/AdminPanel/Category/Category";
import Contact from "./Pages/AdminPanel/Contact/Contact";
import Home from "./Pages/AdminPanel/Home/Home";
import SingleService from "./Pages/SingleService/SingleService";
import Comments from "./Pages/AdminPanel/Comments/Comments";
import Offs from "./Pages/AdminPanel/Offs/Offs";
import Draft from "./Pages/AdminPanel/Draft/Draft";
import AdminPanelPrivate from "./Pages/AdminPanelPrivate/AdminPanelPrivate";
import Tikets from "./Pages/AdminPanel/Tikets/Tikets";




const routes = [
  { path: "/", element: <Index /> },
  { path: "/Service-info/:serviceName", element: <ServiceInfo /> },
  { path: "/Single-Service/:serviceName", element: <SingleService /> },
  { path: "/Category-info/:categoryName", element: <CategoryInfo /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path : '/aboutus' , element : <AboutUs />},
  { path : '/contactus' , element : <ContactUs />},
  { path :'/login' , element : <Login />},
  { path :'/register' , element : <Register />},
  {path : '/search/:searchValue' , element : <Search />},
  {path : '/p-admin/*' , element : <AdminPanelPrivate><AdminPanel /></AdminPanelPrivate> , 
  children : [
    {path : '' , element : <Home /> },
    {path : 'users' , element : <Users /> },
    {path : 'articels' , element : <Articels /> },
    {path : 'properties' , element : <PropertiesList />},
    {path : 'menus' , element : <Menus />},
    {path : 'category' , element : <Category />},
    {path : 'Services' , element : <Services />},
    {path : 'contact' , element : <Contact />},
    {path :'comments' , element : <Comments />},
    {path :'offs' , element : <Offs />},
    {path :'articels/draft/:shortname' , element : <Draft />},
    {path :'tikets' , element : <Tikets/>}
   ]
},
{path : '*' , element : <NotFound />}
];



export default routes