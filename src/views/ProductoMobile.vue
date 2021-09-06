<template>
  <div class="main-container mt-3 me-4 ms-4">
    <BotonWhatsapp></BotonWhatsapp>
    <div>
      <div>
        <img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" alt="imagen del producto" class="product-img rounded">
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    
  </div>
</template>

<script>
import BotonWhatsapp from "../components/BotonWhatsapp.vue";

export default {
  name: "ProductoMobile",
  components: {
    BotonWhatsapp,
  },
};
</script>

<style scoped>
.main-container{
  height: 100vh;
}

.product-img{
  width:100%;
}

</style>>
