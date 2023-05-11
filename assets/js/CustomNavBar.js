function loadCustomNavbar(){
    var customNavBar = `
                        <nav class="navbar-color navbar navbar-expand-lg bg-body-tertiary">
                        <div class="navbar-color container-fluid">
                        
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="Pagina_principal.html"><span class="mx-2 fs-3"><i class="bi bi-house"></i>Home</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="btn mx-2 fs-3" href="Productos.html"><img src="assets/imagenes/pan_icon.png" width="46px" height="46px">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contacto"><span class="mx-2 fs-3"><i class="bi bi-person-lines-fill"></i>Contacto</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="quienesomos.html"><span class="mx-2 fs-3"><i class="bi bi-people-fill"></i>Quienes Somos</span></a>
                            </li>
                            </ul>
                            <button id="checkout" type="button" class="button-checkout d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <span class="mx-3 fs-4"><i class="bi bi-cart3"></i>Pagar</span>
                            </button>
                        </div>
                        </div>
                    </nav>
                    `;

    var customNavBarHTML = document.getElementById("custom-navbar");
    customNavBarHTML.innerHTML = customNavBar;
}

loadCustomNavbar();