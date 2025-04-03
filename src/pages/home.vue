<script setup>
import Headercomponent from "../components/Headercomponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>

<template>
  <Headercomponent />
  <main>
    <div
      id="carouselExampleIndicators"
      class="carousel slide mt-5"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner mt-5">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            style="width: 600px; height: 500px"
            src="/public/img/moto4.jpeg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            style="width: 300px; height: 500px"
            src="/public/img/Bujia3.jpeg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            style="width: 600px; height: 500px"
            src="/public/img/Moto2.jpeg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <section>
      <div class="container-fluid bg-light my-5 pl-5 py-5 text-center fs-1">
        <h2>Productos</h2>
        <div class="row">
          <div class="col-lg-4 ms-5 col-md-6 mt-3">
            <div class="card" style="width: 300px">
              <img
                class="card-img-top"
                src="/public/img/bujia.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Bujia</h5>
                <p class="card-text">Bujia para Frio.</p>
                <p class="card-text">$45.000 COP</p>
                <p class="card-text">
                  Estas bujias sirven para cualquier tipo de moto.
                </p>
                <!-- Botón para abrir el modal -->
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#verDetallesModal"
                >
                  Ver Detalles
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="verDetallesModal"
                  tabindex="-1"
                  aria-labelledby="verDetallesModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="verDetallesModalLabel">
                          Detalles especificos
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Cerrar"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <!-- Espacio para la imagen -->
                          <div
                            class="col-md-6 d-flex justify-content-center align-items-center border-end"
                          >
                            <img
                              src="/public/img/bujia.jpg"
                              alt="Imagen del producto"
                              class="img-fluid"
                              id="productoImagen"
                            />
                          </div>
                          <!-- Espacio para los detalles del producto -->
                          <div class="col-md-6">
                            <h5>Bujia</h5>
                            <p>Bujia para clima frio</p>
                            <p><strong>Precio:</strong> 45.000 COP</p>
                            <p><strong>Tipo de repuesto:</strong> Generico</p>
                            <p><strong>Cantidad:</strong> 20</p>
                            <p><strong>Referencia:</strong> CPR8EA-9</p>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Cerrar
                        </button>
                        <button
                          type="button"
                          class="btn btn-success"
                          data-bs-dismiss="modal"
                        >
                          Ir a WhatsApp
                          <i class="fa-brands fa-whatsapp fa-1x"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-3">
            <div class="card" style="width: 18rem">
              <img
                class="card-img-top"
                src="/public/img/honda.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Moto Honda</h5>
                <p class="card-text">Moto honda CB 125f Deportivo</p>
                <p class="card-text">$3.500.000 COP</p>
                <p class="card-text">Moto de segunda</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#verDetallesModal1"
                >
                  Ver Detalles
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="verDetallesModal1"
                  tabindex="-1"
                  aria-labelledby="verDetallesModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="verDetallesModalLabel">
                          Detalles especificos
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Cerrar"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <!-- Espacio para la imagen -->
                          <div
                            class="col-md-6 d-flex justify-content-center align-items-center border-end"
                          >
                            <img
                              src="/public/img/honda.jpg"
                              alt="Imagen del producto"
                              class="img-fluid"
                              id="productoImagen"
                            />
                          </div>
                          <!-- Espacio para los detalles del producto -->
                          <div class="col-md-6">
                            <h5>Moto Honda</h5>
                            <p>
                              Moto honda 2024 para sentirte libre y andar
                              tranquilo
                            </p>
                            <p><strong>Precio:</strong> $3.500.000 COP</p>
                            <p><strong>Marca:</strong> Honda</p>
                            <p><strong>Tipo de Moto:</strong> Deportiva</p>
                            <p><strong>Cilindraje:</strong> 125</p>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Cerrar
                        </button>
                        <button
                          type="button"
                          class="btn btn-success"
                          data-bs-dismiss="modal"
                        >
                          Ir a WhatsApp
                          <i class="fa-brands fa-whatsapp fa-1x"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-3">
            <div class="card" style="width: 18rem">
              <img
                class="card-img-top"
                src="/public/img/scooter.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Moto yamaha scooter</h5>
                <p class="card-text">Scooter 150 Deportivo.</p>
                <p class="card-text">$7.500.000 COP.</p>
                <p class="card-text">Moto de segunda.</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#verDetallesModal2"
                >
                  Ver Detalles
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="verDetallesModal2"
                  tabindex="-1"
                  aria-labelledby="verDetallesModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="verDetallesModalLabel">
                          Detalles especificos
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Cerrar"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <!-- Espacio para la imagen -->
                          <div
                            class="col-md-6 d-flex justify-content-center align-items-center border-end"
                          >
                            <img
                              src="/public/img/scooter.png"
                              alt="Imagen del producto"
                              class="img-fluid"
                              id="productoImagen"
                            />
                          </div>
                          <!-- Espacio para los detalles del producto -->
                          <div class="col-md-6">
                            <h5>Scooter</h5>
                            <p>La moto scooter que necesitas</p>
                            <p><strong>Precio:</strong> $7.500.000 COP</p>
                            <p><strong>Marca:</strong> Yamaha</p>
                            <p><strong>Tipo de Moto:</strong> Scooter</p>
                            <p><strong>Cilindraje:</strong> 150</p>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Cerrar
                        </button>
                        <button
                          type="button"
                          class="btn btn-success"
                          data-bs-dismiss="modal"
                        >
                          Ir a WhatsApp
                          <i class="fa-brands fa-whatsapp fa-1x"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-3">
            <div class="card" style="width: 18rem">
              <img
                class="card-img-top"
                src="/public/img/guayas.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Guayas</h5>
                <p class="card-text">$24.000 COP</p>
                <p class="card-text">Guayas Totalmente nuevas</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#verDetallesModal3"
                >
                  Ver Detalles
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="verDetallesModal3"
                  tabindex="-1"
                  aria-labelledby="verDetallesModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="verDetallesModalLabel">
                          Detalles especificos
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Cerrar"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <!-- Espacio para la imagen -->
                          <div
                            class="col-md-6 d-flex justify-content-center align-items-center border-end"
                          >
                            <img
                              src="/public/img/guayas.png"
                              alt="Imagen del producto"
                              class="img-fluid"
                              id="productoImagen"
                            />
                          </div>
                          <!-- Espacio para los detalles del producto -->
                          <div class="col-md-6">
                            <h5>Bujia</h5>
                            <p>Bujia para clima frio</p>
                            <p><strong>Precio:</strong> $24.000 COP</p>
                            <p><strong>Tipo de repuesto:</strong> Original</p>
                            <p><strong>Cantidad:</strong> 18</p>
                            <p><strong>Referencia:</strong> WR7DC</p>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Cerrar
                        </button>
                        <button
                          type="button"
                          class="btn btn-success"
                          data-bs-dismiss="modal"
                        >
                          Ir a WhatsApp
                          <i class="fa-brands fa-whatsapp fa-1x"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-3">
            <div class="card" style="width: 18rem">
              <img
                class="card-img-top"
                src="/public/img/yamaha.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Moto Yamaha</h5>
                <p class="card-text">6.700.000 COP</p>
                <p class="card-text">Moto yamaha XTZ</p>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#verDetallesModal4"
                >
                  Ver Detalles
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="verDetallesModal4"
                  tabindex="-1"
                  aria-labelledby="verDetallesModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="verDetallesModalLabel">
                          Detalles especificos
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Cerrar"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <!-- Espacio para la imagen -->
                          <div
                            class="col-md-6 d-flex justify-content-center align-items-center border-end"
                          >
                            <img
                              src="/public/img/yamaha.jpg"
                              alt="Imagen del producto"
                              class="img-fluid"
                              id="productoImagen"
                            />
                          </div>
                          <!-- Espacio para los detalles del producto -->
                          <div class="col-md-6">
                            <h5>Moto yamaha XTZ</h5>
                            <p>
                              La motos que necesitas para todo tipos de terrenos
                              terrestres
                            </p>
                            <p><strong>Precio:</strong> $6.700.000 COP</p>
                            <p><strong>Marca:</strong> Yamaha</p>
                            <p><strong>Tipo de Moto:</strong> Enduro</p>
                            <p><strong>Cilindraje:</strong> 125</p>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Cerrar
                        </button>
                        <button
                          type="button"
                          class="btn btn-success"
                          data-bs-dismiss="modal"
                        >
                          Ir a WhatsApp
                          <i class="fa-brands fa-whatsapp fa-1x"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-3">
            <div class="card" style="width: 18rem">
              <img
                class="card-img-top"
                src="/public/img/Cadena.webp"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Cadena Reforzada Dorada</h5>
                <p class="card-text">$120.000</p>
                <p class="card-text">Cadenas que te dejara impresionado</p>
                <a href=""></a>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#verDetallesModal5"
                >
                  Ver Detalles
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="verDetallesModal5"
                  tabindex="-1"
                  aria-labelledby="verDetallesModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="verDetallesModalLabel">
                          Detalles especificos
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Cerrar"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <!-- Espacio para la imagen -->
                          <div
                            class="col-md-6 d-flex justify-content-center align-items-center border-end"
                          >
                            <img
                              src="/public/img/Cadena.webp"
                              alt="Imagen del producto"
                              class="img-fluid"
                              id="productoImagen"
                            />
                          </div>
                          <!-- Espacio para los detalles del producto -->
                          <div class="col-md-6">
                            <h5>Cadena Reforzada Dorada</h5>
                            <p>Cadenas que te dejara impresionado</p>
                            <p><strong>Precio:</strong> $120.000 COP</p>
                            <p><strong>Tipo de repuesto:</strong> Original</p>
                            <p><strong>Cantidad:</strong> 12</p>
                            <p><strong>Referencia:</strong> DID 520VX3-120</p>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Cerrar
                        </button>
                        <button
                          type="button"
                          class="btn btn-success"
                          data-bs-dismiss="modal"
                        >
                          Ir a WhatsApp
                          <i class="fa-brands fa-whatsapp fa-1x"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center my-5">
            <li class="page-item">
              <a class="page-link" href="#">«</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">»</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </main>
  <FooterComponent />
</template>

<style></style>
