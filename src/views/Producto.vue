<template>
  <div class="main-container mx-2">
    <div class="boton-container d-flex d-md-none ">
      <BotonWhatsapp class="boton"/>
    </div>
    <div class="d-block d-lg-none">
      <NavbarProducto/>
    </div>
    <div class="d-none d-lg-block">
      <Navegador />
    </div>
    <div class="content-main rounded container-xxl mt-4">
      <div class="content-product ">
        <div class="flex flex-column">
          <img
            src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp"
            style="width: 80%"
            alt=""
          />
          <div class="d-flex justify-content-center mt-2" style="height: 70px">
            <div
              v-for="item in items"
              :key="item.id"
              class="
                img-containers
                d-flex
                justify-content-center
                align-items-center
                rounded
              "
            >
              <img :src="item.img" alt="" />
            </div>
          </div>
        </div>
        <div class="d-flex flex-column text-start mb-5 mb-md-0" style="justify-content:center;"> 
          <div class="precio-content mb-4 d-flex d-md-grid">
            <div class="d-flex flex-column text-start">
              <p class="mb-2 fw-semibold ciudad">Villavicencio</p>
              <h4 class="fw-bold" style="font-size:24px;">Zapatillas Nike</h4>
            </div>
            <div class="d-none d-md-flex flex-column justify-content-center text-end">
              <p class="mb-1" style="font-size: 18px; font-weight: 600;">Estado:</p>
              <h4 class="fw-bold" style="font-size:36px; color: var(--naranja);">8/10</h4>
            </div>
          </div>
          <div class="precio-content d-grid d-md-flex">
            <div class="d-flex flex-column text-start mb-md-5">
              <p class="mb-1" style=" font-weight: 600;">
                Precio negociable: <span style="font-size: 18px">Si</span>
              </p>
              <h4 class="fw-bold" style="font-size:36px; color: var(--naranja);">$1.750.000</h4>
            </div>
            <div class="d-flex d-md-none flex-column justify-content-center text-end">
              <p class="mb-1" style="font-size: 18px; font-weight: 600;">Estado:</p>
              <h4 class="fw-bold" style="font-size:36px; color: var(--naranja);">8/10</h4>
            </div>
          </div>
          <div class="boton-container d-none d-md-flex ">
            <BotonWhatsappPC class="boton"/>
          </div>
        </div>
      </div>

      <div class="content-product">
        <div class="mt-0 mt-md-5 pe-md-3 ps-md-3">
          <div class="row d-md-flex  mb-4">
            <a
              to="/"
              class="d-flex button-description rounded col me-1 justify-content-center"
              data-bs-toggle="collapse"
              href="#collapsedescripcion"
              role="button"
              aria-expanded="false"
              aria-controls="collapsedescripcion"
            >Descripción</a>
            <a
              to="/"
              class="d-flex button-description rounded col ms-1 justify-content-center d-md-none"
              data-bs-toggle="collapse"
              href="#collapseseguridad"
              role="button"
              aria-expanded="false"
              aria-controls="collapseseguridad"
            >Seguridad</a>
          </div>
          <div class="collapse description-container d-flex flex-column text-start" id="collapsedescripcion">
            <div>
              <p class="fw-bold mb-1">Características principales</p>
              <ul>
                <li>Marca Nike</li>
                <li>Modelo: CI3866</li>
                <li>Color: Black/White</li>
                <li>AIR 270 REACT</li>
              </ul>
              <div class="d-flex flex-column text-end">
                <span class="fw-bold">Ver más...</span>
              </div>
            </div>
          </div>
          <div class="collapse description-container d-flex flex-column text-start mt-5 d-md-none" id="collapseseguridad">
            <p class="fw-bold" style="font-size:18px;">Seguridad</p>
            <div>
              <p class=" mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nam iste. Eveniet omnis molestiae corrupti repellendus, dolorum mollitia corporis recusandae! Repellat ratione optio magni praesentium dignissimos animi porro aut!</p>
            </div>
          </div>
        </div>

        <div class="d-none d-md-block mt-5 ps-md-3 pe-md-3">
          <div class="d-flex  mb-4">
            <a
              to="/"
              class="d-flex button-description rounded col ms-1 justify-content-center"
              data-bs-toggle="collapse"
              href="#collapseseguridad"
              role="button"
              aria-expanded="false"
              aria-controls="collapseseguridad"
            >Seguridad</a>
          </div>
          <div class="collapse description-container d-flex flex-column text-start mt-5" id="collapseseguridad">
            <p class="fw-bold" style="font-size:18px;">Seguridad</p>
            <div>
              <p class=" mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nam iste. Eveniet omnis molestiae corrupti repellendus, dolorum mollitia corporis recusandae! Repellat ratione optio magni praesentium dignissimos animi porro aut!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-none d-md-block">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navegador from "../components/Navegador.vue";
import NavbarProducto from "../components/NavbarProducto.vue";
import Footer from "../components/Footer.vue";
import BotonWhatsappPC from "../components/BotonWhatsappPC.vue";
import BotonWhatsapp from "../components/BotonWhatsapp.vue";

export default {
  name: "Producto",
  components: {
    Navegador,
    NavbarProducto,
    Footer,
    BotonWhatsappPC,
    BotonWhatsapp,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          img: "https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp",
        },
        {
          id: 2,
          img: "https://i.blogs.es/594843/chrome/1366_2000.jpg",
        },
        {
          id: 3,
          img: "https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp",
        },
        {
          id: 4,
          img: "https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main-container{
  height: 100vh;
}

.content-product {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px) {
  .content-product {
  display: flex;
  flex-direction: column;
}
}

.content-main {
  background-color: white;
  }

@media (max-width: 768px) {
  .content-main {
  background-color: transparent;
  }
}

.precio-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
}


.img-containers {
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: 0.3s;
  margin: 0 10px;
}

.img-containers img {
  height: 100%;
  width: 100%;
  border-radius: 5px;
}

.img-containers:hover {
  transform: scale(1.1);
}

.boton-descripcion {
  padding: 10px 30px;
    align-items: center;
    background: var(--naranja);
    color: var(--blanco);
    text-decoration: none;
    transition: all 0.3s;
}

.ciudad{
  width: max-content;
	font-size: 18px;
	border-bottom-right-radius: 20px;
	border-top-right-radius: 20px;
	padding: 5px 10px;
	color: var(--blanco);
	background: var(--verde);
}

.boton-container {
  justify-content: center;
}

.boton {
  width: 80%;
}

.description-container {
  transition: 00.3s;
}

.button-description {
  padding: 10px;
  align-items: center;
  background: var(--naranja);
  color: var(--blanco);
  text-decoration: none;
  transition: all 0.3s;
}

.button-description:hover {
  transform: scale(1.05);
}
</style>>
