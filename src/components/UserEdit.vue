<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Actualizar Usuario</h3>
      <form @submit.prevent="onUpdateForm">
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
          <button class="btn btn-primary btn-block">Actualizar</button>
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
  created() {
    let dbRef = db.collection("users").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.user = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("users")
        .doc(this.$route.params.id)
        .update(this.user)
        .then(() => {
          console.log("Usuario Actualizado!");
          this.$router.push("/list");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
