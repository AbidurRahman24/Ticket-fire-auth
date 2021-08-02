import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        </div>
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/destrination">Destrination</a>
                        </div>
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/blog">Blog</a>
                        </div>
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/home">contact</a>
                        </div>
                        <div class="navbar-nav ">
                            <button className='bg-primary text-white'>Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;