<template>
  <section>
    <div class="container-fluid my-4">
      <h3 class="section-title">!Los mas elegidos¡</h3>
      <!-- Carrusel -->
      <div id="restaurantCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <!-- Diapositivas dinámicas -->
          <div
            class="carousel-item"
            :class="{ active: index === 0 }"
            v-for="(group, index) in groupedRestaurants"
            :key="index"
          >
            <div class="d-flex flex-wrap justify-content-center">
              <div 
                class="card-container position-relative m-2" 
                style="width: 300px;" 
                v-for="restaurant in group" 
                :key="restaurant.id"
              >
                <div class="image-container">
                  <img :src="restaurant.image" class="rounded-circle" alt="Restaurant Image">
                </div>
                <div class="info-overlay">
                  <h5 class="text-white">{{ restaurant.name }}</h5>
                  <p class="text-white">{{ restaurant.description }}</p>
                  <a :href="restaurant.url" class="btn btn-light mt-2" target="_blank">Ver más</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Controles del carrusel -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#restaurantCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#restaurantCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import logoMc from '../assets/imgs/logo-mc.png'; // Importar imagen
import logoKFC from '../assets/imgs/logo-kfc.png'; // Importar imagen
import logoFRIS from '../assets/imgs/logo-fris.png'; // Importar imagen
import logoJVZ from '../assets/imgs/logo-jvz.png'; // Importar imagen
import logoMTO from '../assets/imgs/logo-mto.png'; // Importar imagen




export default {
  data() {
    return {
      restaurants: [
        { id: 1, name: "MacDonalds", description: "Disfruta de una variedad de platos tradicionales en un ambiente acogedor y familiar.", image: logoMc, url: "#" },
        { id: 2, name: "La Cocina de Juan", description: "Especialidades en mariscos frescos y platillos típicos, ideal para un almuerzo relajado.", image: logoKFC, url: "#" },
        { id: 3, name: "Sabor a México", description: "Auténtica cocina mexicana en un ambiente cálido, con platillos que te harán sentir en casa.", image: logoFRIS, url: "#" },
        { id: 4, name: "La Parrilla del Valle", description: "Cortes de carne a la parrilla y una amplia selección de vinos nacionales e internacionales.", image: logoJVZ, url: "#" },
        { id: 5, name: "Café Central", description: "Café gourmet con una selección de pasteles y bocadillos ideales para un buen desayuno o merienda.", image:logoMTO, url: "#" },
        { id: 6, name: "Mariscos El Pescador", description: "Deliciosos mariscos frescos y platillos del mar, con una vista espectacular al océano.", image: "https://via.placeholder.com/300x300?text=Mariscos+El+Pescador", url: "#" },
      ],
    };
  },
  computed: {
    groupedRestaurants() {
      const chunkSize = this.getChunkSize();
      const groups = [];
      for (let i = 0; i < this.restaurants.length; i += chunkSize) {
        groups.push(this.restaurants.slice(i, i + chunkSize));
      }
      return groups;
    },
  },
  methods: {
    getChunkSize() {
      const width = window.innerWidth;
      if (width < 576) return 1; // Dispositivo móvil (1 tarjeta por fila)
      if (width < 768) return 2; // Tablets (2 tarjetas por fila)
      if (width < 992) return 3; // Pantallas medianas (3 tarjetas por fila)
      return 5; // Pantallas grandes (4 tarjetas por fila)
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateChunkSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateChunkSize);
  },
};
</script>
