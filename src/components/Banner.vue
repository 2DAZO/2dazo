<template >
<div class="row contenedor mt-2">
        <div id="carouselExampleIndicators" class="carousel slide col-8 me-2 rounded-3" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
        </button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <a class="carousel-item active rounded-3" href="https://www.facebook.com/villavoalcaldia">
        <img src="https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn332/wp-content/uploads/2021/03/blog-banner_solarboost_1220x550_es.jpg.webp" class="d-block w-100 rounded-3 " alt="Foto">
        </a>
        <a class="carousel-item ounded-3">
        <img src="https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn332/wp-content/uploads/2021/03/blog-banner_solarboost_1220x550_es.jpg.webp" class="d-block w-100 rounded-3" alt="Foto">
        </a>
        <a class="carousel-item ounded-3">
        <img src="https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn332/wp-content/uploads/2021/03/blog-banner_solarboost_1220x550_es.jpg.webp" class="d-block w-100 rounded-3" alt="Foto">
        </a>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>

    <a class=" col -4 info rounded-3 me-3 position-relative cuadro-info" href="https://www.w3schools.com/jsref/jsref_splice.asp">
    </a>


</div>

</template>

<style scoped>

.contenedor{
    width: 100%;
    max-width: 1400px;
    margin: auto;
    /* max-height: 320px; */
}

.info{
    background-color: blue;
}

.cuadro-info{
    background: url("https://i.pinimg.com/originals/02/3a/87/023a877e31bece11178bc786e058d49f.jpg");
    background-size: cover;
    background-position: center;
}

.saber{
    color: var(--gris-oscuro);
    background-color: var(--blanco);
    border: 1px solid var(--naranja);
}

</style>