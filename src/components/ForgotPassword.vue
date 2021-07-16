<template>
    <div class="vue-tempalte">
        <form @submit.prevent="forgetPassword">
            <h3>Recuperar Contraseña</h3>

            <div class="form-group">
                <label>Correo Electrónico</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Restaurar Contraseña</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {   
        email: ''
      }
    };
  },
  methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
            alert('Se ha enviado a su correo electrónico registrado la solicitud de cambio de contraseña!')
            this.user = {
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  }
};
</script>
