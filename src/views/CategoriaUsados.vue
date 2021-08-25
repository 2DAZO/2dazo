<template>
    <div>
        <Navegador></Navegador>
        <Barra></Barra>
        <div class="contenido">
            <div class="icono-container mt-5">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                    <circle cx="40" cy="34" r="32" fill="white"/>
                    <circle cx="40" cy="34" r="32" stroke="#FF7465" stroke-width="3"/>
                    </g>
                    <path d="M21.8334 21.25C21.8334 18.8108 23.8108 16.8333 26.25 16.8333H30.6667C33.106 16.8333 35.0834 18.8108 35.0834 21.25V25.6667C35.0834 28.1059 33.106 30.0833 30.6667 30.0833H26.25C23.8108 30.0833 21.8334 28.1059 21.8334 25.6667V21.25Z" stroke="#FF7465" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M43.9167 21.25C43.9167 18.8108 45.8941 16.8333 48.3334 16.8333H52.75C55.1893 16.8333 57.1667 18.8108 57.1667 21.25V25.6667C57.1667 28.1059 55.1893 30.0833 52.75 30.0833H48.3334C45.8941 30.0833 43.9167 28.1059 43.9167 25.6667V21.25Z" stroke="#FF7465" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.8334 43.3333C21.8334 40.8941 23.8108 38.9167 26.25 38.9167H30.6667C33.106 38.9167 35.0834 40.8941 35.0834 43.3333V47.75C35.0834 50.1893 33.106 52.1667 30.6667 52.1667H26.25C23.8108 52.1667 21.8334 50.1893 21.8334 47.75V43.3333Z" stroke="#FF7465" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M43.9167 43.3333C43.9167 40.8941 45.8941 38.9167 48.3334 38.9167H52.75C55.1893 38.9167 57.1667 40.8941 57.1667 43.3333V47.75C57.1667 50.1893 55.1893 52.1667 52.75 52.1667H48.3334C45.8941 52.1667 43.9167 50.1893 43.9167 47.75V43.3333Z" stroke="#FF7465" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <filter id="filter0_d" x="0.5" y="0.5" width="75" height="75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-2" dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                <h1 class="mb-0"> <strong>Hola</strong></h1>
                <p class="lh-1">Mira nuestras categorías</p>
            </div>
            <div class="categorias-container d-flex flex-column ">
                <div class="d-flex justify-content-around mb-3">
                    <div class="categorias rounded">

                    </div>
                    <div class="categorias rounded">

                    </div>
                </div>
                <div class="d-flex justify-content-around mb-3">
                    <div class="categorias rounded">

                    </div>
                    <div class="categorias rounded">

                    </div>
                </div>
                <div class="d-flex justify-content-around mb-3">
                    <div class="categorias rounded">

                    </div>
                    <div class="categorias rounded">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Barra from '../components/Navegador.vue'
import Navegador from '../components/Barra.vue'

export default {
    name: "CategoriaUsados",
    components: {
        Barra,
        Navegador,
    },
}

</script>

<style scoped>
    .contenido {
        padding: 0 10px 0;
    }

    .icono-container{
        color: var(--naranja);
    }

    .categorias {
        width: 160px;
        height: 75px;
        background-color: var(--naranja);
    }
</style>>
