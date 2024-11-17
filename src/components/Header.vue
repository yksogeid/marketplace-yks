<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid d-flex align-items-center">
      <!-- Logo añadido aquí -->
      <a class="navbar-brand text-white" href="#">
        <img src="../assets/imgs/logo.png" alt="Logo" style="height: 90px;">
      </a>
      
      <!-- Espacio entre el logo y la ubicación -->
      <p class="mb-0 me-2">Tu ubicación:</p>

      <div class="ms-4"> <!-- ms-4 agrega margen a la izquierda -->
        <!-- Mostrar la ubicación con el icono y las ciudades cercanas -->
        <div v-if="location" class="d-flex align-items-center text-black">
          <div class="dropdown">
            <button class="btn btn-link text-black dropdown-toggle" type="button" id="locationDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <!-- Icono de ubicación -->
              <i class="fas fa-location-pin me-2"></i> 
              {{ location }}
            </button>
            <ul class="dropdown-menu" aria-labelledby="locationDropdown">
              <li><a class="dropdown-item" href="#">{{ location }}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Botones adicionales -->
      <div class="d-flex align-items-center ms-auto">
        <!-- Botón de búsqueda -->
        <button class="btn btn-outline-dark me-2">
          <i class="fas fa-search"></i>
        </button>

        <!-- Botón de carrito de compras -->
        <button class="btn btn-outline-dark me-2">
          <i class="fas fa-shopping-cart"></i>
        </button>

        <!-- Botón de iniciar sesión (amarillo) -->
        <button class="btn btn-warning">
          <i class="fas fa-user me-2"></i> Iniciar Sesión
        </button>
      </div>
    </div>
  </nav>
</template>





<script>
export default {
  data() {
    return {
      location: null, // Para almacenar la ubicación actual
      nearbyCities: [], // Para almacenar las ciudades cercanas
    };
  },
  mounted() {
    this.getLocation(); // Obtener la ubicación al cargar el componente
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        // Solicitamos la ubicación
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Obtenemos la latitud y longitud
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            // Llamamos a la API para obtener el nombre de la ciudad
            this.getCityName(lat, lon);
          },
          (error) => {
            // Si hay un error, mostramos un mensaje
            this.location = "404 UBICACION";
          }
        );
      } else {
        this.location = "Geolocalización no está soportada en este navegador.";
      }
    },
    async getCityName(lat, lon) {
      try {
        // Hacemos una solicitud a Nominatim (OpenStreetMap) para obtener la dirección
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
        const data = await response.json();
        
        if (data && data.address) {
          // Extraemos el nombre de la ciudad
          let cityName = data.address.city || data.address.town || data.address.village || 'Ubicación desconocida';

          // Eliminamos la parte "Perímetro Urbano" si está presente
          if (cityName.includes("Perímetro Urbano")) {
            cityName = cityName.replace("Perímetro Urbano", "").trim();
          }

          // Asignamos el nombre de la ciudad a la variable 'location'
          this.location = cityName;
        } else {
          this.location = "No se pudo obtener la ciudad.";
        }
      } catch (error) {
        this.location = "Hubo un error al obtener la ciudad.";
      }
    }
  },
};
</script>

