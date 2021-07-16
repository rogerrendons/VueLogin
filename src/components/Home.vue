<template>
  <div class="vue-tempalte">
    <div>
      <h3>Bienvenido</h3>
      <h4>
        Hola {{ user.displayName }}, Usuario Clase Alpha, recuerde su correo
        electrónico registrado: {{ user.email }}
      </h4>
      <br />
      <router-link class="nav-link" to="/signup">Registrar nuevo acceso a usuario administrativo</router-link>
      <router-link class="nav-link" to="list">Ver lista de usuarios generales</router-link>
      <router-link class="nav-link" to="add">Adicionar usuarios generales</router-link>
      <div class="container mt-5">
        <router-view></router-view>
      </div>
      <button
        type="submit"
        class="btn btn-dark btn-lg btn-block"
        @click="logOut()"
      >
        Salir
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/");
          });
        });
    },
  },
};
</script>
