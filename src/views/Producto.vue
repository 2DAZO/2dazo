<template>
  <div>
    <Navegador></Navegador>
    <div class="content-main bg-white rounded container mt-4 pb-5">
      <div class="content-product p-4">
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
        <div class="d-flex flex-column text-start" style="justify-content:center;"> 
          <div class="precio-content mb-4">
            <div class="d-flex flex-column text-start">
              <p class="mb-2 fw-semibold ciudad">Villavicencio</p>
              <h4 class="fw-bold" style="font-size:24px;">Zapatillas Nike</h4>
            </div>
            <div class="d-flex flex-column justify-content-center text-end">
              <p class="mb-1" style="font-size: 18px; font-weight: 600;">Estado:</p>
              <h4 class="fw-bold" style="font-size:36px; color: var(--naranja);">8/10</h4>
            </div>
          </div>
          <div class="d-flex flex-column text-start mb-5">
            <p class="mb-1" style=" font-weight: 600;">
              Precio negociable: <span style="font-size: 18px">Si</span>
            </p>
            <h4 class="fw-bold" style="font-size:36px; color: var(--naranja);">$1.750.000</h4>
          </div>
          <div class="boton-container d-flex">
            <BotonWhatsappPC class="boton"/>
          </div>
        </div>
      </div>

      <div class="content-product">
        <div class="mt-5">
          <div class="d-flex justify-content-around">
            <a
              to="/"
              class="d-flex button-description rounded"
              data-bs-toggle="collapse"
              href="#collapsedescripcion"
              role="button"
              aria-expanded="false"
              aria-controls="collapsedescripcion"
            >Descripción</a>
            <a
              to="/"
              class="d-flex button-description rounded"
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
          <div class="collapse description-container d-flex flex-column text-start mt-5" id="collapseseguridad">
            <p class="fw-bold" style="font-size:18px;">Seguridad</p>
            <div>
              <p class=" mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nam iste. Eveniet omnis molestiae corrupti repellendus, dolorum mollitia corporis recusandae! Repellat ratione optio magni praesentium dignissimos animi porro aut!</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navegador from "../components/Navegador.vue";
import Footer from "../components/Footer.vue";
import BotonWhatsappPC from "../components/BotonWhatsappPC.vue";

export default {
  name: "Producto",
  components: {
    Navegador,
    Footer,
    BotonWhatsappPC,
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
.content-product {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  width: 70%;
}

.description-container {
  transition: 00.3s;
}

.button-description {
  width:max-content;
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
