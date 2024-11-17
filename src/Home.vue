<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

  <HeaderComponent />
    <Carousel />  
  <!-- Contenedor de RestaurantesComponent con recuadro blanco centrado -->
  <div class="centered-box">
    <RestaurantesComponent />
  </div>

  <FooterComponent />
</template>

<script>
import FooterComponent from './components/Footer.vue'; // Importa correctamente el componente Footer
import Carousel from './components/Carousel.vue'; // Importa correctamente el componente Carousel
import HeaderComponent from './components/Header.vue';
import RestaurantesComponent from './components/Restaurantes.vue';

export default {
  components: {
    FooterComponent, // Registra correctamente el componente Footer
    Carousel, // Registra correctamente el componente Carousel
    HeaderComponent,
    RestaurantesComponent,
  },
};
</script>

<style scoped></style>
