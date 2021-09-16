<template>
    <div class="container">
        <div class="field">
            <label class="label">Ingresa tu nombre</label>
            <div class="control has-icons-left">
                <input class="input" type="text" placeholder="Escribe tu nombre..." value="">
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
            </div>
        </div>
        <div class="field">
            <label class="label">Ingresa tu correo electr&oacute;nico</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-danger" type="email" placeholder="Escribe tu email..." value="">
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
            <p class="help is-danger">Ingresa un email v&aacute;lido</p>
        </div>
        <div class="field">
            <label class="label">D&eacute;janos un mensaje</label>
            <div class="control">
                <textarea class="textarea" placeholder="Ecribe tu mensaje..."></textarea>
            </div>
        </div>
        <div class="control">
            <button class="button is-success is-outlined is-link">Enviar</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ContactForm',
    components: {

    }
}
</script>
<style lang="scss" scoped>
    .container {
        margin-left: 100px;
        margin-right: 100px;
    }
    label, p {
        text-align: left;
    }
</style>