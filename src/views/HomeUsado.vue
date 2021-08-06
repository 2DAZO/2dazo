<template>
  <div class="homeUsado">
    <Navegador></Navegador>
    <div id="carouselExampleControls" class="carousel slide carrusel-container" data-bs-ride="carousel">
      <div class="carousel-inner maximo">
        <div class="carousel-item active">
          <img src="https://http2.mlstatic.com/D_NQ_944252-MLA46967599466_082021-OO.webp" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="https://http2.mlstatic.com/D_NQ_944252-MLA46967599466_082021-OO.webp" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="https://http2.mlstatic.com/D_NQ_944252-MLA46967599466_082021-OO.webp" class="d-block w-100" alt="">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


    <div class="categorias">
      <div class="container-fluid">
    <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
			
			<div class="col-2">
				<div class="card card-block card-1"></div>
			</div>
			<div class="col-5">
				<div class="card card-block card-2"></div>
			</div>
			<div class="col-5">
				<div class="card card-block card-3"></div>
			</div>
			<div class="col-5">
				<div class="card card-block card-4"></div>
			</div>
			<div class="col-5">
				<div class="card card-block card-5"></div>
			</div>
			<div class="col-5">
				<div class="card card-block card-6"></div>
			</div>
			<div class="col-5">
				<div class="card card-block card-7"></div>
			</div>
			<div class="col-5">
				<div class="card card-block card-8"></div>
			</div>
			<div class="col-5">
				<div class="card card-block card-9"></div>
			</div>
			<div class="col-5">
				<div class="card card-block card-10"></div>
			</div>
    </div>
</div>
    </div>


    <div class="container justify-content-evenly row maximo-productos">
      <div class="card border-0 text-start" style="width: 15rem;">
        <img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" class="card-img-top" alt="">
        <div class="card-body d-flex flex-column justify-content-start align-items-start">
          <p class="card-text"><strong>PC Master Pro</strong></p>
          <p class="">Precio negociable: <strong>Si</strong> </p>
          <div>
            <p>$ 1'700.000</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

import Navegador from '../components/Navegador.vue';

export default {
  name: "HomeUsado",
  components: {
    Navegador,
  },
};
</script>
<style scoped>

.carrusel-container {
  margin-bottom: 20px;
}

.maximo {
margin: auto;
max-width: 1600px;
}
.maximo-productos {
margin: auto;
max-width: 1200px;
}

.categorias{
  display: none;
}


@media (max-width: 992px) { 

  .categorias{
    display: block;
  }

  .scrolling-wrapper{
	overflow-x: auto;
}

.card-block{
	height: 85px;
	background-color: #fff;
	border: none;
	background-position: center;
	background-size: cover;
	transition: all 0.2s ease-in-out !important;
	border-radius: 24px;
}

.card-1{
	background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

.card-2{
	background-color: #0093E9;
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}

.card-3{
	background-color: #00DBDE;
background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);
}

.card-4{
	background-color: #FBAB7E;
background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
}

.card-5{
	background-color: #85FFBD;
background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
}

.card-6{
	background-color: #FA8BFF;
background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);
}

.card-7{
	background-color: #FA8BFF;
background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);
}

.card-8{
	background-color: #FBDA61;
background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
}

.card-9{
	background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

.card-10{
	background-color: #FF3CAC;
background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);

}

}




</style>
