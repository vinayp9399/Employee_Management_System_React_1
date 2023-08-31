import React from 'react'
import List from './List'

function Header({ setIsAdding, setIsEditing}) {
    return (
        <header>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <h1 className="navbar-brand" href="/">Employee Management Software</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <button1 onClick={() => {setIsAdding(false); setIsEditing(false);}} className="nav-link active">Employees List</button1>
                        </li>
                        <li className="nav-item">
                        <button1 onClick={() => setIsAdding(true)} className="nav-link active">Add Employees</button1>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search Employee name" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
        </header>
    )
}

export default Header