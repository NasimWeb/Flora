import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useState , useEffect } from "react";



function EditUser() {
    
  const [allUsers, setAllUsers] = useState([]);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [role, setRole] = useState(null);
  const [userName, setUserName] = useState(null);
  const [id , setId] = useState(null);
  const [password , setPassword] = useState()
  const [userRole , setUserRole] = useState(null)

  const { userId } = useParams();

  useEffect(() => {
    getUsers();
    setName(mainUser ? mainUser.name : localStorage.getItem('name'));
    setEmail(mainUser ? mainUser.email : localStorage.getItem('email'));
    setPhone(mainUser ? mainUser.phone : localStorage.getItem('phone'));
    setRole(mainUser ? mainUser.role : localStorage.getItem('role'));
    setUserName(mainUser ? mainUser.username : localStorage.getItem('username'));
    setId(mainUser ? mainUser._id : localStorage.getItem('id'));
    setUserRole(mainUser ? mainUser.role : localStorage.getItem('role'))
  }, []);

  function getUsers() {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`https://node-flora.liara.run/v1/users`, {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    })
      .then((res) => res.json())
      .then((allUsers) => setAllUsers(allUsers));
  }


  const editUserHandler = (e) => {
    e.preventDefault()

    const newUser = {
      username: userName,
      name: name,
      email: email,
      password: password,
      phone: phone,
    };

   const localStorageData =JSON.parse(localStorage.getItem('user'))

    fetch(`https://node-flora.liara.run/v1/users/${userId}`, {
      method : 'PUT',
      headers : {
        "Content-Type" : 'application/json',
        Authorization: `Bearer ${localStorageData.token}`,
      },
      body: JSON.stringify(newUser)
    }).then(res => {
      if(res.ok) {
        Swal.fire({
          title: (`edit successfull`),
          icon:'success',
          timer:2000
          })
          window.history.back()
      }else {
        Swal.fire({
          title : 'something went wrong',
          icon : 'error',
          timer : 2000
        })
      }
    })
  }

 const goBack = (e) => {
  e.preventDefault()
  window.history.back()
 }

  
  
  const mainUser = allUsers.find((user) => user._id == userId);

  useEffect(() => {
    mainUser ? (
        setName(mainUser ? mainUser.name : ""),
        setEmail(mainUser ? mainUser.email : ""),
        setPhone(mainUser ? mainUser.phone : ""),
        setRole(mainUser ? mainUser.role : ""),
        setUserName(mainUser ? mainUser.username : ""),
        setPassword(mainUser ? mainUser.password : ''),
        setUserRole(mainUser ? mainUser.role : '')
    ) : ''
  },[mainUser])

  useEffect(() => {
    localStorage.setItem('name', mainUser ? mainUser.name : '')
    localStorage.setItem('email', mainUser ? mainUser.email : '')
    localStorage.setItem('phone', mainUser ? mainUser.phone : '')
    localStorage.setItem('role', mainUser ? mainUser.role : '')
    localStorage.setItem('userName', mainUser ? mainUser.username : '')
    localStorage.setItem('id', mainUser ? mainUser._id : '')
    localStorage.setItem('password', mainUser ? mainUser.password : '')
    localStorage.setItem('role', mainUser ? mainUser.role : '')
  }, [name, email, phone, role, userName, id , role]);

  const changeRole = (e) => {
    e.preventDefault()

    const localStorageData =JSON.parse(localStorage.getItem('user'))
  
   const newRole = {
      id : userId,
      role : userRole,
      email : email,
      password : password,
      phone : phone,
    }

    fetch(`https://node-flora.liara.run/v1/users/role`,{
      method : 'PUT',
      headers : {
        Authorization: `Bearer ${localStorageData.token}`,
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(newRole)
    }).then(res => {
      if(res.ok) {
        return res.json()
        .then(result => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: result.msg,
          })
          window.history.back()
        })
      }else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Something went wrong!"
        })
      }
    })
  }



  return (
    <div>
      <div class="container">
        <div class="rigister-user mb-4 p-5">
          <form class="d-flex gap-2 flex-wrap ">
            <div class="d-flex gap-3 flex-column flex-lg-row">
              <label>Name</label>
              <div>
                <input
                  type="text"
                  class="input-form"
                  id="name"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div class="d-flex gap-3 flex-column flex-lg-row">
              <label>UserName</label>
              <div>
                <input
                  type="text"
                  class="input-form"
                  id="username"
                  placeholder="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div class="d-flex gap-3 flex-column flex-lg-row">
              <label>Email</label>
              <div>
                <input
                  type="email"
                  class="input-form"
                  id="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div class="d-flex gap-3 flex-column flex-lg-row">
              <label>Role</label>
              <div>
                <select name="role" value={mainUser ? mainUser.role : localStorage.getItem('role')} onChange={(e) => setRole(e.target.value)} >
                  <option value='USER'>user</option>
                  <option value='ADMIN'>admin</option>
                </select>
              </div>
            </div>
            <div class="d-flex gap-3 flex-column flex-lg-row">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  class="input-form "
                  id="password"
                  placeholder="password"
                  value={mainUser ? mainUser.password : localStorage.getItem('password')}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div class="d-flex gap-3 flex-column flex-lg-row">
              <label>Phone</label>
              <div>
                <input
                  type="text"
                  class="input-form"
                  id="phone"
                  placeholder="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div class="d-flex gap-3 align-items-center">
              <button class="btn  btn-success" onClick={(e) => editUserHandler(e)}>Edit User</button>
              <button class="btn  btn-success" onClick={(e) => changeRole(e)}>changeRole</button>
              <button class="btn btn-danger" onClick={(e) => goBack(e)}>cancle</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



export default EditUser;
