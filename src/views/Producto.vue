<template>
  <div>
    <Navegador></Navegador>
    <div class="content-main bg-white rounded container mt-4">
      <div class="content-product p-4">
        <div class="flex flex-column">
          <img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" style="width: 80%;" alt="">
          <div class="d-flex justify-content-center mt-2" style="height: 70px;">
            <div v-for="item in items" :key="item.id" class="img-containers d-flex justify-content-center align-items-center rounded">
              <img :src="item.img" alt="">
            </div>
          </div>
        </div>
        <div class="d-flex flex-column text-start">
          <div class="precio-content mb-3">
            <div class="d-flex flex-column text-start">
              <p class="mb-1">Villavicencio</p>
              <h4 class="fw-bold">Zapatillas Nike</h4>
            </div>
            <div class="d-flex flex-column text-end">
              <p class="mb-1">Estado:</p>
              <h4 class="fw-bold">8/10</h4>
            </div>
          </div>
          <div class="d-flex flex-column text-start">
            <p class="mb-1">Precio negociable: <span style="font-size:18px;">Si</span></p>
            <h4 class="fw-bold">$1.750.000</h4>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navegador from "../components/Navegador.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Producto",
  components: {
    Navegador,
    Footer,
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
      ]
    }
  },
};
</script>

<style scoped>
.content-product {
  display:grid;
  grid-template-columns: 1fr 1fr;
}

.precio-content {
  display:grid;
  grid-template-columns: 1fr 1fr;
}

.img-containers {
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: .3s;
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
</style>>
