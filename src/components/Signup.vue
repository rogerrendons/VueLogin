<template>
    <div class="vue-tempalte">
        <form @submit.prevent="userRegistration">
            <h3>Registro</h3>
            <div class="form-group">
                <label>Nombre</label>
                <input type="text" class="form-control form-control-lg" v-model="user.name" />
            </div>
            <div class="form-group">
                <label>Correo Electrónico</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>
            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">
               Registro
            </button>
            <p class="forgot-password text-right">
                Ya esta registrado? 
                <router-link :to="{name: 'login'}">Ingrese</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userRegistration() {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.name
          })
          .then(() => {
            this.$router.push('/')
          });
      })
      .catch((error) => {
         alert(error.message);
      });
    }
  }
};
</script>
