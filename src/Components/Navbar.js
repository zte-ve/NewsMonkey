import React from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

// export default class Navbar extends Component {
const Navbar=(props)=>{
  const handleClick = async (e) => {
    e.preventDefault();
    const ele = document.getElementById('search_keyword').value;
    await props.handleChange((ele !== '') ? ele : null);
    console.log(ele, "hello", props.keyword);
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: "sticky", top: 0, zIndex: 2 }}>
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/business">Business</Link></li>
                <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                <li><Link className="dropdown-item" to="/health">Health</Link></li>
                <li><Link className="dropdown-item" to="/science">Science</Link></li>
                <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/general">General</Link></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input className="form-control me-2" id="search_keyword" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" onClick={handleClick}>Search</button>
          </form>

        </div>
      </div>
    </nav>
  )
}
export default Navbar;
