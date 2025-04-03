<script setup></script>

<template>
  <footer class="py-4">
    <div class="container">
      <!-- Primera fila: Enlaces y redes sociales -->
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-center"
      >
        <!-- Enlaces legales - Izquierda -->
        <div class="mb-3 mb-md-0">
          <ul class="list-inline mb-0">
            <li class="list-inline-item me-3">
              <router-link class="text-decoration-none fs-5" to="/legalnotice"
                >Aviso Legal</router-link
              >
            </li>
            <li class="list-inline-item me-3">
              <a href="#" class="text-decoration-none fs-5">Contáctanos</a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-decoration-none fs-5">Ayuda</a>
            </li>
          </ul>
        </div>

        <!-- Redes sociales - Derecha (iconos más grandes) -->
        <div class="mb-3 mb-md-0">
          <ul class="list-inline mb-0">
            <li class="list-inline-item me-3">
              <a href="#" class="text-white">
                <i class="fab fa-youtube fa-3x"></i>
              </a>
            </li>
            <li class="list-inline-item me-3">
              <a href="#" class="text-white">
                <i class="fab fa-facebook fa-3x"></i>
              </a>
            </li>
            <li class="list-inline-item me-3">
              <a href="#" class="text-white">
                <i class="fab fa-x-twitter fa-3x"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-white">
                <i class="fab fa-instagram fa-3x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright centrado -->
      <div class="col-12 text-center mt-4 pt-3 border-top border-secondary">
        <p class="mb-0 text-white">https://Motostore.com</p>
      </div>
    </div>
  </footer>
</template>

<style></style>
