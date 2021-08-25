<template>
<div class="row justify-content-center mt-2 mt-lg-4 mt-lg-0">
	<div v-for="producto in productos" :key="producto.id" class="col-xl-3 col-sm-6 col-md-4 col-12 p-1" >
			<div class="card rounded-2 border-0 text-start p-2 align-items-center position-relative tarjeta" >
				<div class="position-absolute destacado" v-if="producto.destacado===true">
					<p class>Destacado</p>
				</div>
				<div class="position-absolute ciudad">
					<p class>{{producto.ciudad}}</p>
				</div>
				<img :src="producto.img" style="max-width:250px;" class="card-img-top p-2" alt="">
				<div class="card-body d-flex flex-column justify-content-start align-items-start" style="width:100%;">
					<div>
						<p class="card-text nombre-producto"><span class="fw-bold">{{producto.name}}</span></p>
					</div>
					<div class="d-grid" style="grid-template-columns: 1fr auto; margin-top:10px; width:100%">
						<div class="lh-sm " style="display: flex; flex-direction:column; justify-content:center;">
							<div style="font-size:14px;">
								<p class="mb-0">Precio negociable: <span class="text-success fw-bold" v-if="producto.negociable === true">Si</span> <span class="text-success fw-bold" v-else>No</span></p>
							</div>
							<div>
								<p class="fw-bold">{{producto.price}}</p>
							</div>
						</div>
						<div class="lh-sm" style="text-align: end; display: flex; flex-direction:column; justify-content: flex-start; font-size:14px;">
							<p class="mb-0">Estado</p>
							<p class="fw-bold"><span class="text-success">{{producto.estado}}</span>/10</p>
						</div>
					</div>
				</div>
			</div>
		</div>
</div>

</template>

<style scoped>

.tarjeta{
	cursor: pointer;
	transition: all .3s;
	box-shadow: none
}

.tarjeta:hover{
	box-shadow: 0 0px 10px rgba(136, 136, 136, 0.329);
	transform: scale(1.05);
}

.nombre-producto {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.ciudad{
	z-index: 10;
	top: 15px;
	right: 0;
}

.ciudad p{
	font-size: 13px;
	border-bottom-left-radius: 20px;
	border-top-left-radius: 20px;
	padding: 5px 10px;
	color: var(--blanco);
	background: var(--verde);
}

.destacado{
	z-index: 10;
	top: 15px;
	left: 0;
}

.destacado p{
	font-size: 13px;
	border-bottom-right-radius: 20px;
	border-top-right-radius: 20px;
	padding: 5px 10px;
	color: var(--gris-oscuro);
	background: #ffc70e;
}

</style>

<script>

import {productosApi} from '../services/api/productos';

export default {
name: "ListaProductos",

data(){
	return {
		productos:[]
	}
},

methods:{
	async cargarProductos(){
		this.productos = await productosApi.getProductos();
	}
},

mounted(){
	this.cargarProductos()
}
};
</script>

