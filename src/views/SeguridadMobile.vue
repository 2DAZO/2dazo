<template>
  <div class="">
    <Barra></Barra>
    <div class="contenido pb-5">
      <div class="icono-container mt-5">
        <svg
          width="76"
          height="76"
          viewBox="0 0 76 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <circle cx="40" cy="34" r="32" stroke="#FF7465" stroke-width="3" />
          </g>
          <path
            d="M39.7123 53C39.2877 53 39.2877 53 38.863 53C38.4383 52.5682 24 45.2273 24 34V21.9091C24 21.0455 24.4247 20.6136 25.274 20.1818L38.863 15C39.2877 15 39.7123 15 40.137 15L53.726 20.1818C54.5753 20.6136 55 21.0455 55 21.9091V34C55 45.2273 40.9863 52.5682 40.137 53C40.137 53 40.137 53 39.7123 53Z"
            stroke="#FF7465"
            stroke-width="3"
            stroke-linejoin="round"
          />
          <defs>
            <filter
              id="filter0_d"
              x="0.5"
              y="0.5"
              width="75"
              height="75"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-2" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <h1 class="mb-0"><strong>Hola</strong></h1>
        <p class="lh-1">Por tu segurad</p>
      </div>
      <div class="seguridad-container d-flex flex-column text-start ps-3 pe-3 mb-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquid saepe illum veniam vero, tempora obcaecati quod. Praesentium recusandae iusto delectus veritatis nemo corporis ex, ipsam dolore voluptatem quas. Culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquid saepe illum veniam vero, tempora obcaecati quod. Praesentium recusandae iusto delectus veritatis nemo corporis ex, ipsam dolore voluptatem quas. Culpa?</p>
        <a href="" class="factura mb-5">Solicitar factura de seguridad</a>
      </div>
    </div>
  </div>
</template>

<script>
import Barra from "../components/Barra.vue";

export default {
  name: "SeguridadsMobile",
  components: {
    Barra,
  },
};
</script>

<style scoped>
.contenido{
  height: 100vh;
}
.icono-container {
  color: var(--naranja);
}

.categorias {
  width: 160px;
  height: 75px;
  background-color: var(--naranja);
}

.factura{
  text-decoration: none;
  color: var(--naranja);
}
</style>>
