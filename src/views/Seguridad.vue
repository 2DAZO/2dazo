<template>
  <div>
    <Navegador></Navegador>
    <Barra></Barra>
    <div class="d-flex justify-content-center mt-5 mb-5">
      <div class="w-full w-md-75 bg-white rounded container p-3">
        <div class="titulo">
          <h1 class="mb-0"><strong>Hola</strong></h1>
          <p class="lh-1">Por tu segurad</p>
        </div>
        <div
          class="
            seguridad-container
            d-flex
            flex-column
            text-start
            ps-3
            pe-3
            mb-5
          "
        >
          <p style="text-align: justify;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            aliquid saepe illum veniam vero, tempora obcaecati quod. Praesentium
            recusandae iusto delectus veritatis nemo corporis ex, ipsam dolore
            voluptatem quas. Culpa? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum aliquid saepe illum veniam vero,
            tempora obcaecati quod. Praesentium recusandae iusto delectus
            veritatis nemo corporis ex, ipsam dolore voluptatem quas. Culpa?
          </p>
          <a href="" class="factura mb-5">Solicitar factura de seguridad</a>
        </div>
      </div>
    </div>
    <div class="d-none d-lg-block">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navegador from "../components/Navegador.vue";
import Footer from "../components/Footer.vue";
import Barra from "../components/Barra.vue";

export default {
  name: "Seguridad",
  components: {
    Navegador,
    Footer,
    Barra
  },
};
</script>

<style scoped>
.contenido {
  height: 100vh;
}
.titulo {
  color: var(--naranja);
}
.factura {
  text-decoration: none;
  color: var(--naranja);
}
</style>>
