    <template>
    <nav class="navbar navbar-expand-lg navbar-light maximo">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img
            src="https://res.cloudinary.com/segundazo/image/upload/v1628141649/LOGO-02_cuhfym.png"
            alt="Logo 2DAZO"
            class="logo"
            />
        </a>
        <form class="d-flex buscador">
            <input
            class="form-control me-2"
            type="search"
            placeholder="Busca lo que quieras"
            aria-label="Search"
            />
                <button class="btn btn-outline-success" type="submit">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                >
                    <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    />
                </svg>
                </button>
        </form>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                >Categorías</a
                >
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
                >
            </li>
            </ul>
        </div>
        </div>
    </nav>
    </template>


    <script>
    export default {
    name: "Navegador",
    };
    </script>

    <style scoped>
    .logo {
    height: 25px;
    }

    .maximo {
    margin: auto;
    max-width: 1080px;
    }

    .buscador {
    margin: 0 15px;
    padding: 5px 25px;
    border-radius: 50px;
    border: #ff7465 solid 1px;
    }

    .buscador input {
    border: none;
    outline: none;
    }


    .buscador button {
    border: none;
    color: #ff7465;
    }

    .buscador button:hover{
        color: white;
        background-color: #ff7465;
    }


    </style>

