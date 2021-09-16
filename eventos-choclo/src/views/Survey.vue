<template>
    <div>
        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-size-1">Encuesta de Usuarios</h1>
                    <p>¡Bienvenidos!
                        <br><br> Este formulario tiene como propósito conocer las diferentes actividades que realiza la población caleña y hacía qué tipo de eventos se decantan con mayor facilidad.
                        <br><br> ¡No te preocupes!
                        <br> Tus datos no serán compartidos con terceros, el fin de la encuesta es netamente académico😄.
                    </p>          
                </div>
            </div>
        </div>
        <div class="custom-container">
            <SurveyForm />
        </div>
    </div>
</template>
<script>
import SurveyForm from '../components/SurveyForm';
export default {
    name:'Survey',
    components: {
        SurveyForm
    }
}
</script>
<style lang="scss" scoped>
    .custom-container {
        margin: 70px 200px 50px 200px;
    }
</style>