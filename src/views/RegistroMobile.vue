<template>
  <div class="main-container me-4 ms-4">
    <nav class="navbar navbar-expand-lg navbar-light navbar-container">
      <BotonAtras/>

      <router-link
        to="/"
        class="navbar-brand"
        style="margin: 0"
        href="#"
      >
        <img
          src="https://res.cloudinary.com/segundazo/image/upload/v1628277929/LOGO_Mesa_de_trabajo_1_orzv3e.png"
          alt=""
          height="30"
        />
      </router-link>
    </nav>

    <Barra></Barra>

    <div class="contenido mt-3">
      <form action="" method="post" class="form-container">
        <label for="fullName" class="input-container mb-4">
          <span class="fw-bold ">Nombre completo</span>
          <input
          type="text"
          class="form-control texto mt-1"
          name="fullName"
          placeholder="Juan Esteban "/>
        </label>
        <label for="" class="input1-container mb-4">
          <span class="fw-bold ">Tipo de documento</span> <br/>
          <select name="cars" id="cars" form="carform">
            <option disabled selected value="seleccionar">Seleccionar</option>
            <option value="cedula-ciudadania">Cedula de ciudadanía</option>
            <option value="cedula-extranjera">Cedula extranjera</option>
          </select>
        </label>
        <label for="" class="input-container mb-4">
          <span class="fw-bold ">Tipo de documento</span>
          <input
          type="text"
          class="form-control texto mt-1"
          placeholder="Lo que quieras mi rey"/>
        </label>
        <label for="" class="input-container mb-4">
          <span class="fw-bold ">Número de documento</span>
          <input
          type="text"
          class="form-control texto mt-1"
          placeholder="Lo que quieras mi rey"/>
        </label>
        <label for="" class="input-container mb-4">
          <span class="fw-bold ">Genero</span>
          <input
          type="text"
          class="form-control texto mt-1"
          placeholder="Lo que quieras mi rey"/>
        </label>
        <label for="" class="input-container mb-4">
          <span class="fw-bold mb-1">Correo electrónico</span>
          <input
          type="text"
          class="form-control texto mt-1"
          placeholder="Lo que quieras mi rey"/>
        </label>
        <label for="" class="input-container mb-4">
          <span class="fw-bold mb-1">Teléfono</span>
          <input
          type="text"
          class="form-control texto mt-1"
          placeholder="Lo que quieras mi rey"/>
        </label>
        <label for="" class="input-container mb-4">
          <span class="fw-bold ">Crea tu contraseña</span>
          <input
          type="text"
          class="form-control texto mt-1"
          placeholder="Lo que quieras mi rey"/>
        </label>
        <label for="" class="input-container mb-4">
          <span class="fw-bold ">Confirma tu contraseña</span>
          <input
          type="text"
          class="form-control texto mt-1"
          placeholder="Lo que quieras mi rey"/>
        </label>
      </form>
    </div>
  </div>
</template>

<script>
import Barra from "../components/Barra.vue";
import BotonAtras from "../components/BotonAtras.vue";

export default {
  name: "RegistroMobile",
  components: {
    Barra,
    BotonAtras,
  },
};
</script>

<style scoped>

.main-container {
  height: 100vh;
}

.contenido {
  text-align: start;
  
}

.form-container{
  display: flex;
  justify-content: start;
  flex-direction: column;
}

.icono-container {
  color: var(--naranja);
}

.categorias {
  width: 160px;
  height: 75px;
  background-color: var(--naranja);
}

.input-container {
  margin: 0 0 0 10px;
  background-color: var(--gris-claro);
  border-bottom: 1px solid var(--naranja);
}

.input-container input {
  border: none;
  outline: none;
  background-color: #fff0;
}
.input1-container select {
  border: none;
  outline: none;
  background-color: #fff0;
}
</style>>
