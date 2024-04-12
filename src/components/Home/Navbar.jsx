import React from 'react';


const Navbar = () => {
    return (
        <div className="container col-xxl-12 px-4 py-2">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom fixed-top">

                <a href="#" className='logourl'>
                    <div className='logo'>
                        <div className='preowned'>Preowned</div>
                        <div className='freeToGo'>Free to go!</div>
                    </div>
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-3">Home</a></li>
                    <li><a href="#" className="nav-link px-3">Items</a></li>
                    <li><a href="#" className="nav-link px-3">Add Item</a></li>
                    <li><a href="#" className="nav-link px-3">FAQs</a></li>
                    <li><a href="#" className="nav-link px-3">About</a></li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
                </form>

                <div className="text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </div>
            </header>
        </div>
    )
}

export default Navbar


