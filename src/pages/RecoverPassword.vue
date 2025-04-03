<script setup>
import Headercomponent from "../components/Headercomponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>

<template>
  <Headercomponent />
  <main>
    <div class="container mt-5 mb-5 pb-5 pt-5 bg-white" text>
      <div class="row">
        <div class="col-md-6">
          <h2 class="fs-4">Recupera tu contraseña</h2>
          <p class="fs-4">
            ¿Olvidaste tu contraseña? No te preocupes. Aqui te dejamos los pasos
            que tienes que hacer para recuperar tu contraseña y que es lo
            siguiente:
          </p>
          <ol>
            <li>Introduce tu correo electrónico y dale a continuar.</li>
            <li>
              Recibirás un codigo de verificacion a tu correo electrónico.
            </li>
            <li>Introduce el codigo en el formulario y dale validar codigo.</li>
            <li>
              Una vez que ingresas el codigo te va a pedir que metas una
              contraseña nueva
            </li>
            <li>
              Luego confirms la contraseña y le das continuar e inicias sesión
              normalmente
            </li>
          </ol>
        </div>
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Correo Electronico:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="tucorreo123@gmail.com"
                id1="email"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Codigo de Verificacion:</label>
              <input
                type="text"
                class="form-control"
                id="code"
                placeholder="Ingresar codigo"
                required
                disabled
                id2="code"
              />
            </div>

            <button type="button" class="btn btn-primary" id="continue-btn">
              Continuar
            </button>
            <button
              type="button"
              class="btn btn-success"
              id="verify-code-btn"
              style="display: none"
            >
              Verificar Código
            </button>
            <div id="password-form" style="display: none">
              <div class="form-group mt-3">
                <label for="">Contraseña:</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Ingresa la nueva contraseña"
                  required
                />
              </div>
              <div class="form-group">
                <label for="">Confirmar contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  id="confirm-password"
                  placeholder="Porfavor confirma tu contraseña"
                  required
                />
              </div>
              <button
                type="button"
                class="btn btn-primary"
                id="submit-password-btn"
              >
                Continuar
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <form action=""></form>
        </div>
      </div>
    </div>
  </main>

  <FooterComponent />
</template>

<style></style>
