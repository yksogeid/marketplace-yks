<template>
    <section>
      <h3 class="section-title">Restaurantes cerca de ti</h3>
      <div class="container my-4">
        <div class="row">
          <div class="col-md-4 col-sm-6 mb-4" v-for="restaurant in restaurants" :key="restaurant.id">
            <div class="card shadow-lg border-0 rounded-4">
              <img :src="restaurant.image" class="card-img-top" alt="Restaurant Image">
              <div class="card-body">
                <h5 class="card-title text-dark">{{ restaurant.name }}</h5>
                <p class="card-text text-muted">{{ restaurant.description }}</p>
                <a :href="restaurant.url" class="btn btn-primary w-100" target="_blank">Ver más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        restaurants: [
  {
    "id": 1,
    "name": "El Buen Sabor",
    "description": "Disfruta de una variedad de platos tradicionales en un ambiente acogedor y familiar.",
    "image": "https://via.placeholder.com/300x200?text=El+Buen+Sabor",
    "url": "#"
  },
  {
    "id": 2,
    "name": "La Cocina de Juan",
    "description": "Especialidades en mariscos frescos y platillos típicos, ideal para un almuerzo relajado.",
    "image": "https://via.placeholder.com/300x200?text=La+Cocina+de+Juan",
    "url": "#"
  },
  {
    "id": 3,
    "name": "Sabor a México",
    "description": "Auténtica cocina mexicana en un ambiente cálido, con platillos que te harán sentir en casa.",
    "image": "https://via.placeholder.com/300x200?text=Sabor+a+México",
    "url": "#"
  },
  {
    "id": 4,
    "name": "La Parrilla del Valle",
    "description": "Cortes de carne a la parrilla y una amplia selección de vinos nacionales e internacionales.",
    "image": "https://via.placeholder.com/300x200?text=La+Parrilla+del+Valle",
    "url": "#"
  },
  {
    "id": 5,
    "name": "Café Central",
    "description": "Café gourmet con una selección de pasteles y bocadillos ideales para un buen desayuno o merienda.",
    "image": "https://via.placeholder.com/300x200?text=Café+Central",
    "url": "#"
  },
  {
    "id": 6,
    "name": "Mariscos El Pescador",
    "description": "Deliciosos mariscos frescos y platillos del mar, con una vista espectacular al océano.",
    "image": "https://via.placeholder.com/300x200?text=Mariscos+El+Pescador",
    "url": "#"
  },
  {
    "id": 7,
    "name": "Sushi World",
    "description": "El mejor sushi de la ciudad, preparado con los ingredientes más frescos y servidos con creatividad.",
    "image": "https://via.placeholder.com/300x200?text=Sushi+World",
    "url": "#"
  },
  {
    "id": 8,
    "name": "La Casa del Tacos",
    "description": "Tacos al pastor, carnitas y más, con tortillas hechas a mano, en un ambiente informal y alegre.",
    "image": "https://via.placeholder.com/300x200?text=La+Casa+del+Tacos",
    "url": "#"
  },
  {
    "id": 9,
    "name": "El Refugio de la Abuela",
    "description": "Platos caseros con recetas tradicionales de la abuela, todo hecho con amor y los mejores ingredientes.",
    "image": "https://via.placeholder.com/300x200?text=El+Refugio+de+la+Abuela",
    "url": "#"
  },
],
      };
    },
  };
  </script>