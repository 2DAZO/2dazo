<template >
    <div class="footer">
        <div class="container">
            <div class="pt-3 pb-2">
                <div class="row justify-content-center p-4">
                    <div class="col-12 col-lg-6 d-flex flex-column align-items-center">
                    <h7>Interés</h7>
                    <ul class="nav">
                        <li class="nav-item m-2"><a href="#" class="nav-link p-0 text-muted">Terminos y condiciones</a></li>
                        <li class="nav-item m-2"><a href="#" class="nav-link p-0 text-muted">Seguridad</a></li>
                        <li class="nav-item m-2"><a href="#" class="nav-link p-0 text-muted">Lo más top</a></li>
                        <li class="nav-item m-2"><a href="#" class="nav-link p-0 text-muted">Contáctanos</a></li>
                        <li class="nav-item m-2"><a href="#" class="nav-link p-0 text-muted">Síguenos</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-5 offset-lg-1 offset-0">
                        <form>
                            <h5>Suscríbete para más noticias</h5>
                            <p>Nos estaremos comunicando contigo para hacerte saber de nosotros</p>
                            <div class="d-flex w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Dirección de correo</label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Dirección de correo">
                                <button class="btn btn-primary" type="button">Suscríbete</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="d-flex justify-content-between py-2 border-top">
                    <p class="my-2">© 2021 2DAZO, Inc. All rights reserved.</p>
                        <ul class="list-unstyled d-flex">
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Footer",
}
</script>
<style  scoped>
    .footer {
        width: 100%;
        height: max-content;
        background-color: var(--gris-claro);
    }

    p{
        font-size: 14px;
        color: var(--gris-oscuro);
        line-height: 18px;
    }

    li{
        font-size: 12px;
    }

</style>