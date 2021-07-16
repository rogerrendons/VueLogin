<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Usuario - Email</th>
            <th>Teléfono</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in Users" :key="user.key">
            <td>{{ user.nombre }}</td>
            <td>{{ user.usuario }}</td>
            <td>{{ user.clave }}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: user.key } }"
                class="btn btn-primary"
                >Editar
              </router-link>
              <button
                @click.prevent="deleteUser(user.key)"
                class="btn btn-danger"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link class="nav-link" to="/home">Volver al inicio</router-link>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  data() {
    return {
      Users: [],
    };
  },
  created() {
    db.collection("users").onSnapshot((snapshotChange) => {
      this.Users = [];
      snapshotChange.forEach((doc) => {
        this.Users.push({
          key: doc.id,
          nombre: doc.data().nombre,
          usuario: doc.data().usuario,
          clave: doc.data().clave,
        });
      });
    });
  },
  methods: {
    deleteUser(id) {
      if (window.confirm("Desea eliminar el registro?")) {
        db.collection("users")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Registro Borrado!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style>
