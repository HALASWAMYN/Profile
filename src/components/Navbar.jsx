import React from 'react';
// import '../Style/Navbar.css';

const Navbar = ({ setSearch }) => {

    let handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img height='40px' width='50px' src="https://cdn-icons-png.flaticon.com/512/6915/6915987.png" alt="" />{' '}
                    <b>Profile</b>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="/home/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home/add-post">Add Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home/add-work">Add Work</a>
                        </li>
                        <form className="d-flex">
                            <input className="form-control ms-4" type="search" placeholder="🔎 search..." aria-label="Search" onChange={handleSearch} />
                            <button className="btn btn-light ms-2" type="submit">Search</button>
                        </form>
                        <li className="nav-item">
                            <a className="nav-link btn btn-danger ms-2" href="/">Log-Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
