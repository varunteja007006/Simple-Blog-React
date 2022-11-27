import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
      <>
        <nav className="navbar">
          <h1>My first react app</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
          </div>
          <div className="links">
            <Link to="/createfsfs">New Blog 2</Link>
          </div>
        </nav>
        <Outlet />
      </>
    );
}
 
export default Navbar;