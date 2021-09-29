<template>
  <div class="main-container me-2 ms-2">
    <NavbarMobile2/>
    <Barra></Barra>
    <div class="contenido">
      <div class=" mt-3 mb-3">
        <div
        id="bannerpublicitarios"
        class="carousel slide col-12 rounded-3"
        data-bs-ride="carousel"
        >
        <div class="carousel-indicators">
            <button
            type="button"
            data-bs-target="#bannerpublicitarios"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
            ></button>
            <button
            type="button"
            data-bs-target="#bannerpublicitarios"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            ></button>
            <button
            type="button"
            data-bs-target="#bannerpublicitarios"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            ></button>
        </div>
        <div class="carousel-inner">
            <a
            class="carousel-item active rounded-3"
            href="https://www.facebook.com/villavoalcaldia"
            >
            <img
                src="https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn332/wp-content/uploads/2021/03/blog-banner_solarboost_1220x550_es.jpg.webp"
                class="d-block w-100 rounded-3"
                alt="Foto"
            />
            </a>
            <a class="carousel-item ounded-3">
            <img
                src="https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn332/wp-content/uploads/2021/03/blog-banner_solarboost_1220x550_es.jpg.webp"
                class="d-block w-100 rounded-3"
                alt="Foto"
            />
            </a>
            <a class="carousel-item ounded-3">
            <img
                src="https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn332/wp-content/uploads/2021/03/blog-banner_solarboost_1220x550_es.jpg.webp"
                class="d-block w-100 rounded-3"
                alt="Foto"
            />
            </a>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#bannerpublicitarios"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#bannerpublicitarios"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
      </div>
      <ListaProductos/>
    </div>
  </div>
</template>

<script>
import Barra from "../components/Barra.vue";
import NavbarMobile2 from "../components/NavbarMobile2.vue";
import ListaProductos from "../components/ListaProductos.vue";

export default {
  name: "TopMobile",
  components: {
    Barra,
    NavbarMobile2,
    ListaProductos
  },
};
</script>

<style scoped>

.main-container {
  height: 100vh;
}

.contenido {
  padding: 0 10px 0;
}

.categorias {
  width: 160px;
  height: 75px;
  background-color: var(--naranja);
}
</style>>
