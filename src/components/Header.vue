<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <!-- Logo añadido aquí -->
      <a class="navbar-brand text-white" href="#">
        <img src="../assets/imgs/logo.png" alt="Logo" style="height: 50px;">
      </a>
      <!-- Botón para mostrar la ubicación con el icono y color negro en el texto -->
      <button class="btn btn-outline-light text-black" @click="getLocation">
        <i class="fas fa-location-pin me-2"></i> <!-- Icono de ubicación -->
        Tu Ubicación
      </button>
      <!-- Mostrar la ubicación -->
      <p v-if="location" class="text-black">{{ location }}</p>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      location: null, // Para almacenar la ciudad
    };
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
            this.location = "No se pudo obtener la ubicación.";
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
