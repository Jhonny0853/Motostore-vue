<script setup>
import { onMounted } from "vue";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <router-link class="navbar-brand" to="/">
        <img
          src="../../public/img/logo_moto_store-1-5.png"
          style="width: 200px; height: 150px"
          alt="logo"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ms-2">
          <li class="nav-item">
            <a class="nav-link" href="categoria.html">Categorias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="descuentos.html">Descuentos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="ayuda-frontend.html">Ayuda</a>
          </li>
          <form class="form-inline">
            <div class="input-group">
              <input type="search" class="form-control" placeholder="Search" />
              <button class="btn btn-success" type="submit">Search</button>
            </div>
          </form>
          <li class="nav-item">
            <a class="nav-link" href="QuienesSomos.html">Quienes somos</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login"
              >Iniciar sesion</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="registrarse.html">Registrarse</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style></style>
