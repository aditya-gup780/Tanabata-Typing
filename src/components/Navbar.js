import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Typers' Zone</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <form className="d-flex" role="search">
                        <button id="practice" className="btn" type="submit">Practice Now!</button>
                        <button id="register" className="btn btn-outline-light" type="submit">Register</button>
                        <button id="login" className="btn btn-outline-light" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}