import React, { useEffect , useState} from "react";
import { Link, useParams , useNavigate} from "react-router-dom";
import TextEditor from "../../../Components/PanelAdmin/TextEditor/TextEditor";

export default function EditArticles() {
 
  
    const [articleBody, setArticleBody] = useState();
    const [category, setCategory] = useState([]);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [link, setLink] = useState();
    const [body, setBody] = useState();
    const [cover, setCover] = useState();
    


    const { shortname } = useParams();
    const navigate = useNavigate()


  async function getAllCategories() {
    await fetch("http://localhost:4000/v1/category")
      .then((res) => res.json())
      .then((allCategories) => setCategory(allCategories));
  }

  useEffect(  () => {
          getAllCategories();

        async  function getArticle () {

           await   fetch(`http://localhost:4000/v1/articles/${shortname}`)
                .then((res) => res.json())
                .then( (article) =>   {
      
                      setTitle(article.title);
                      setDescription(article.description);
                      setLink(article.shortName);
                      setBody(article.body);
                      setCover(article.cover);
      
              }); 
          }

          getArticle()
     
  }, []);

  return (
    <>
  
    <div className="container">
          <div className="rigister-user mb-4 p-5">
            <form className="d-flex flex-column gap-2 flex-wrap ">
              <div className="d-flex gap-3">
                <label style={{ marginRight: "51px" }}>title:</label>
                <input
                  id="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  element="input"
                  className="input-form "
                  style={{ width: "-webkit-fill-available" }}
                />
              </div>
  
              <div className="d-flex gap-3">
                <label>description:</label>
                <input
                  id="description"
                  type="text"
                  element="input"
                  className="input-form "
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  style={{ width: "-webkit-fill-available" }}
                />
              </div>
  
              <div className="d-flex gap-3">
                <label style={{ marginRight: "53px" }}>link:</label>
                <input
                  id="shortName"
                  type="text"
                  element="input"
                  className="input-form "
                  value={link}
                  onChange={e => setLink(e.target.value)}
                  style={{ width: "-webkit-fill-available" }}
                />
              </div>
  
              <div className="d-flex gap-3 align-items-center">
                <label style={{ marginRight: "17px" }}>Category:</label>
                <select
                  className="input-form "
                  style={{ width: "-webkit-fill-available" }}
                >
                  <option value="-1">please select your category</option>
                  {category &&
                    category.map((category) => {
                      return <option key={category._id}>{category.title}</option>;
                    })}
                </select>
              </div>
  
              <div className="d-flex mt-4 gap-4">
                <label style={{ marginRight: "12px" }}>Content:</label>
                <TextEditor value={body} setValue={setBody} />
              </div>
  
              <div className="d-flex flex-column mt-4 gap-3">
                <label>Image:</label>
                <input className="input-form" type="file" />
                <div>
                  <img
                    className="img-fluid"
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "5px",
                    }}
                    src={`http://localhost:4000/courses/covers/${cover}`}
                  />
                </div>
              </div>
            </form>
            <div className="d-flex gap-3 align-items-center mt-5">
              <button className={`btn btn-success`}>Add new Aericle</button>
              <button className={`btn btn-success`}>Add draft</button>
              <button className="btn btn-danger" onClick={() => navigate('../')}>cancle</button>
            </div>
          </div>
        </div>
    
    
    
    
    </>
  )
  
 
}
