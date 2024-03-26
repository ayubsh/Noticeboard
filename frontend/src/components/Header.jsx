

function Header() {
const token = localStorage.getItem('token')
const logout = () => {
  localStorage.removeItem('token')
  window.location.reload()
}  




return (

    <nav className="navbar bg-body-tertiary "> 
      <div className="container-fluid">
        <a className="navbar-brand">NoticeBoard</a>
        <div className="d-flex">
         {
          !token &&  <div><a href="/Login" className="me-2">Login</a>
                    <a href="/registration">Register</a> </div>
         }
        {
          token && <button type="button" className="btn btn-info" onClick={logout}> Log Out</button> 
        }
         
        </div>
      </div>
    </nav>
  );
}

export default Header;
<button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>