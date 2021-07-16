<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Nuevo Usuario</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="user.nombre"
            required
          />
        </div>

        <div class="form-group">
          <label>Usuario - Email</label>
          <input
            type="email"
            class="form-control"
            v-model="user.usuario"
            required
          />
        </div>

        <div class="form-group">
          <label>Clave</label>
          <input
            type="text"
            class="form-control"
            v-model="user.clave"
            required
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("users")
        .add(this.user)
        .then(() => {
          alert("Usuario Creado!");
          this.user.nombre = "";
          this.user.usuario = "";
          this.user.clave = "";
          this.$router.push("/list");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
