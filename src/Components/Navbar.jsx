import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
              <nav className="navbar navbar-expand-md  mt-4">
  <div className="container-fluid ">
    <Link to='/' className='text-decoration-none'><i className="bi bi-person-circle ms-4 person"></i> <span className='title ms-3 fw-bolder fs-2 text-black ' >PERSON DETAILS</span></Link>
    
  <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav  ">
        <li className="nav-item ">
        <Link to ="/">HOME</Link>
        </li>
        <li className="nav-item">
        <Link to ="/persondetails">EXISTING PERSONS</Link>
        </li>
        <li className="nav-item">
        <Link to ="/addperson">ADD NEW PERSON</Link>
        </li>
       
  
      </ul>
    </div>
 
  </div>
</nav>
<hr/>
        </div>
    );
};

export default Navbar;