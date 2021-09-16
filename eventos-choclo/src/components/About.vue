<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">{{ this.$store.state.title }}</h1>          
        </div>
      </div>
    </div>
    <div class="container">
        <h2 class="subtitle is-size-3">Sobre Nosotros</h2>
        <p class="org-description is-size-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium, libero asperiores.</p>
        <p class="org-description is-size-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae, iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium, libero asperiores.</p>
    </div>
    <h2 class="subtitle is-size-3">Cont&aacute;ctanos</h2>
    <div class="container">
        <div class="right-container">
            <GoogleMap />
            <v-icon small>fas fa-map-marker-alt</v-icon>
            <span>Cali, Valle del Cauca, Colombia</span>
            <br>
            <v-icon small>fas fa-phone-alt</v-icon>
            <span>(+57) 555-555-5555</span>
            <br>
            <v-icon small>fas fa-envelope</v-icon>
            <span>eventos-choclo@eventosschoclo.com</span>
            <br><hr><br>
            <v-icon x-large class="social-icon">fab fa-whatsapp</v-icon>
            <v-icon x-large class="social-icon">fab fa-facebook</v-icon>
            <v-icon x-large class="social-icon">fab fa-twitter</v-icon>
            <v-icon x-large class="social-icon">fab fa-linkedin</v-icon>
            <v-icon x-large class="social-icon">fab fa-instagram</v-icon>
        </div>
        <div class="left-container">
            <ContactForm />
        </div>
    </div>
  </div>
</template>
<script>
import GoogleMap from '@/components/GoogleMap.vue'
import ContactForm from '@/components/ContactForm.vue'
export default {
  name: 'About',
  components: {
    GoogleMap,
    ContactForm
  }  
}
</script>
<style lang="scss" scoped>
  .org-description {
    margin-top: 40px;
  }
  .subtitle {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    font-size: 30px;
  }
  .right-container {
    width: 40%;
    float: right;
    text-align: center;
    
    span {
        margin-left: 10px;
    }
    .social-icon {
        margin-right: 15px;
        margin-bottom: 50px;
    }
  }
  .left-container {
    width: 60%;
    float: left;
    text-align: center;
    
  }
  hr {
    height: 1px;
    border-width: 0;
    color: gray;
    background-color: gray;
  }
</style>