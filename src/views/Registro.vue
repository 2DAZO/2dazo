<template>
  <div class="main-container">
    <div class="banner d-none d-md-flex">
    </div>

    <div class="contenido d-flex justify-content-center">
      <form action="" method="post" class="form-container my-auto py-5">
        <p class="fw-semibold mb-4" style="font-size: 30px;">Forma parte de esta <strong style="color: var(--naranja);">Familia</strong></p>
        <label for="fullName" class="input-container mb-3">
          <span class="fw-bold ">Nombre completo</span>
          <input
          type="text"
          class="form-control texto"
          name="fullName"
          placeholder="Juan Esteban "/>
        </label>

        <label for="" class="input1-container mb-3">
          <span class="fw-bold ">Tipo de documento</span> <br/>
          <select class="form-select" aria-label="Default select example" name="cars" id="cars" form="carform">
            <option disabled selected value="seleccionar">Seleccionar</option>
            <option value="cedula-ciudadania">Cedula de ciudadanía</option>
            <option value="cedula-extranjera">Cedula extranjera</option>
          </select>
        </label>

        <label for="" class="input-container mb-3">
          <span class="fw-bold ">Número de documento</span>
          <input
          type="number"
          class="form-control texto"
          placeholder="Lo que quieras mi rey"/>
        </label>

        <label for="" class="input1-container mb-3">
          <span class="fw-bold ">Genero</span> <br/>
          <select class="form-select" aria-label="Default select example" name="cars" id="cars" form="carform">
            <option disabled selected value="seleccionar">Seleccionar</option>
            <option value="cedula-ciudadania">Mujer</option>
            <option value="cedula-extranjera">Hombre</option>
          </select>
        </label>

        <label for="" class="input-container mb-3">
          <span class="fw-bold mb-1">Correo electrónico</span>
          <input
          type="email"
          class="form-control texto"
          placeholder="Lo que quieras mi rey"/>
        </label>

        <label for="" class="input-container mb-3">
          <span class="fw-bold mb-1">Teléfono</span>
          <input
          type="number"
          class="form-control texto"
          placeholder="Lo que quieras mi rey"/>
        </label>

        <label for="" class="input-container mb-3">
          <span class="fw-bold ">Crea tu contraseña</span>
          <input
          type="password"
          class="form-control texto"
          placeholder="Lo que quieras mi rey"/>
        </label>

        <label for="" class="input-container mb-5">
          <span class="fw-bold ">Confirma tu contraseña</span>
          <input
          type="password"
          class="form-control texto"
          placeholder="Lo que quieras mi rey"/>
        </label>

        <div class="politica-container d-flex mb-4">
          <input
          type="checkbox"
          class=" mt-1"/>
          <p class="ms-3">Declaro que he leído y aceptado el <router-link to="/registro-b" class="politica">tratamiento de datos personales</router-link> y los <router-link to="/registro-b" class="politica">términos y condiciones</router-link></p>
        </div>

        <button type="" class="boton rounded p-1 mb-2">Ingresar</button>
        <div class="d-flex justify-content-center">
          <p>¿Ya tiene cuenta? <router-link to="/login" class="recuperar fw-bold">Iniciar sesion</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "Registro",
  components: {
  },
};
</script>

<style scoped>

.main-container {
  height: 100vh;
  display: grid;
  grid-template-columns: 60% 40%;
  
}

@media (max-width: 768px) {
  .main-container {
    display: flex;
    justify-content: center;
  }
}

.banner {
  background-color: rgb(255, 164, 137);
}

.contenido {
  
}

.form-container{
  width: 300px;
  text-align: start;
  display: flex;
  justify-content: start;
  flex-direction: column;
}

.politica {
  color: var(--naranja);
  text-decoration: none;
}

.icono-container {
  color: var(--naranja);
}

.input-container {
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

.boton {
  color: white;
  background-color: var(--naranja);
  border: none;
}

.recuperar {
  color: var(--naranja);
  text-decoration: none;
}
</style>>
