import React from 'react'

function Header() {
    return (
        <>
            <div className="navbar-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Kamal & Sons</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* <a className="nav-link active link-underline" aria-current="page" href="#">Home</a> */}
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-underline" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-underline" href="#">Contact</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link  link-underline" href="#">Herbal Products <i class="bi bi-lungs-fill"></i> </a>
                                </li>
                                <li className="nav-item link-underline">
                                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Event Organization <i class="bi bi-balloon-fill"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </>

    )
}

export default Header