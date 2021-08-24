<template>
<div class="row justify-content-center mt-4 mt-lg-0">
	<div v-for="producto in productos" :key="producto.id" class="col-xl-3 col-sm-6 col-md-4 col-12 p-1">
			<div class="card rounded-2 border-0 text-start p-2 align-items-center" >
				<img src="https://http2.mlstatic.com/D_Q_NP_621621-MCO46015188216_052021-AB.webp" style="max-width:250px;" class="card-img-top p-2" alt="">
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

.nombre-producto {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
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

