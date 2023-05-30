<template>
    <div class="banner_container">
        <div class="img_bg">
            <div class="img">
                <img src="../assets/images/aliquotasICMS.svg" alt="">
            </div>
        </div>
        <div class="desc">
            <div class="desc_text">
                <p>Recurso utilizado para facilitar a fiscalização dos tributos que incidem várias vezes no decorrer da
                    cadeia de circulação de uma determinada mercadoria.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.banner_container {
    margin-top: 3rem;
    position: relative;
}

.img_bg {
    background: url(../assets/images/21542.jpg);
    background-color: #007900;
    background-size: cover;
    background-blend-mode: multiply;
    height: 27vw;
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto;
}

.desc {
    background-color: #fff;
    position: relative;
    display: flex;
    top: -50px; 
    width: 80%;
    margin: auto;
    box-shadow: 0 3px 6px #00000033;
}
.desc_text{
    text-align: center;
    padding: 2rem;
    font-size: 22px;
    color: #383838;
    font-style: italic;
}
</style>
