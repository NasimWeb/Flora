import Index from "./Pages/Index/Index";
import ServiceInfo from "./Pages/ServiceInfo/ServiceInfo";
import CategoryInfo from "./Pages/Category/CategoryInfo";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from './Pages/ContactUs/ContactUs'
import Search from "./Pages/Search/Search";
import NotFound from "./Pages/NotFound/NotFound";
import SingleService from "./Pages/SingleService/SingleService";


 

const routes = [
  { path: "/", element: <Index /> },
  { path: "/Service-info/:serviceName", element: <ServiceInfo /> },
  { path: "/Single-Service/:serviceName", element: <SingleService /> },
  { path: "/Category-info/:categoryName", element: <CategoryInfo /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path : '/aboutus' , element : <AboutUs />},
  { path : '/contactus' , element : <ContactUs />},
  {path : '/search/:searchValue' , element : <Search />},
  {path : '*' , element : <NotFound />}
];

   

export default routes