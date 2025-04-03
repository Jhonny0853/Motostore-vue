<script setup>
import Headercomponent from "../components/Headercomponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>

<template>
  <Headercomponent />
  <main>
    <div class="container mt-5 mb-5 bg-white p-5" text>
      <div class="row">
        <div class="col-md-6">
          <h2 class="fs-4">Bienvenido a MotoStore</h2>
          <p class="fs-4">
            Gestiona tus publicaciones, destaca tus productos, conecta con
            compradores interesados a través de WhatsApp y haz crecer tu
            negocio.
          </p>
        </div>
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Correo Electronico</label>
              <input
                type="email"
                class="form-control"
                id="usuario"
                aria-describedby="emailHelp"
                placeholder="tucorreo123@gmail.com"
                required
              />
              <small id="emailHelp" class="form-text text-muted"
                >Nosotros velamos por tu seguridad.</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Contraseña"
                required
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Recordarme</label
              >
            </div>
            <button type="submit" class="btn btn-primary" id="ingresar">
              ingresar
            </button>
            <div class="form-group text-center py-3">
              <a class="mx-3" href="registrarse.html">Crear cuenta</a>
              <router-link class="mx-3" to="/recoverpassword"
                >Recuperar Contraseña</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>

<style></style>
