<template>
  <div class="main-container">
    <div class="banner d-none d-md-flex">

    </div>

    <div class="contenido d-flex justify-content-center">
      <form action="" method="post" class="form-container my-auto">
        <router-link
        to="/"
        class=" d-flex justify-content-center mb-4"
        style="margin: 0"
        href="#"
        >
          <img
            src="https://res.cloudinary.com/segundazo/image/upload/v1628277929/LOGO_Mesa_de_trabajo_1_orzv3e.png"
            alt=""
            width="250"
          />
        </router-link>
        <p class="mb-4">Nos agrada volver a verte.</p>
        <label for="" class="input-container mb-3">
          <span class="fw-bold mb-1">Correo electrónico</span>
          <input
          type="email"
          class="form-control texto"
          placeholder="Lo que quieras mi rey"/>
        </label>
        <label for="" class="input-container mb-4">
          <span class="fw-bold ">Contraseña</span>
          <input
          type="password"
          class="form-control texto"
          placeholder="Lo que quieras mi rey"/>
        </label>
        <div class="d-flex justify-content-center">
          <p>¿Olvidaste tu contraseña? <router-link to="/login" class="recuperar fw-bold">Recuperar</router-link></p>
        </div>
        <button type="" class="boton rounded p-1 mb-2">Ingresar</button>
        <div class="d-flex justify-content-center">
          <p>¿No te haz registrado? <router-link to="/registro" class="recuperar fw-bold">Registrarme</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  components: {
  },
};
</script>

<style scoped>

.main-container {
  height: 100vh;
  display: grid;
  grid-template-columns: 60% 40%;
  background-color: var(--gris-claro);
  
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

.form-container{
  width: 300px;
  text-align: start;
  display: flex;
  justify-content: start;
  flex-direction: column;
}

.input-container {
  border-bottom: 1px solid var(--naranja);
}

.input-container input {
  border: none;
  outline: none;
}
.input1-container select {
  border: none;
  outline: none;
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
